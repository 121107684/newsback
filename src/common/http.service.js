require('isomorphic-fetch');
import {objToParams} from './utils';

const _reqHeaders = {
    'Cache-Control': 'max-age=0',
    'Pragma': 'no-cache',
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    'x-requested-with': 'fetch'
};

const _apiConfig = {
    bodyType: 'text',
    needLoading: true,
    needRepeat: false,
    needStatusError: true,
    needTimeout: 10000,
    download: false
};

/**
 * @description: 公共的请求 支持表单和json两种数据类型
 * @param method {String}  请求的方法类型
 * @param obj {Object} {url, headers, config, params, type 请求的数据类型(type = 'json')}
 * @key config
 *      -- bodyType {String} response类型, 默认'text'
 *      -- needLoading {Boolean} 本次请求是否开启loading, 默认true(开启)
 *      -- needRepeat {Boolean} 本次请求是否支持重复/多次请求, 默认false(关闭)
 *      -- needStatusError {Boolean} 本次请求statusError是否提示, 默认true(开启)
 *      -- needTimeout {Number} 本次请求超时时间, 默认等于timeout, 不需要则配置<=0的数, 优先级高于timeout
 *      -- download {Boolean} 是否是下载, false
 * @return Promise {Object}
 */
function request(method, {
    url,
    params = {},
    config = {},
    headers = {},
    type
}) {
    const _self = this;
    // 重复请求时, url需要做区分
    const _url = ~_self.getUrlIndex(url) ? `${url}--${_self.urlList.length - 1}` : url;
    let meta = {
        method: method,
        headers: Object.assign({}, _reqHeaders, headers),
        credentials: 'include'
    };

    const isJsonType = type === 'json';
    if (isJsonType) {
        meta.headers['Content-Type'] = 'application/json;charset=UTF-8';
    }
    const formParams = objToParams(params);
    if (method === 'get' && formParams) {
        url += `?${formParams}`;
    }
    if (method !== 'get' && formParams) {
        if (isJsonType) {
            meta.body = JSON.stringify(params);
        } else {
            meta.body = formParams.toString();
        }
    }
    // merge config
    const _config = Object.assign({}, _apiConfig, config)

    // 请求开始前 保存请求相关数据
    _self.reqDetails[_url] = {url, meta, _config};
    _self.handleEvent('onBefore', _url);

    const {codeConf, repeatErrNo, timeout, timeoutErrNo} = _self.reqConfig;
    const {bodyType, needRepeat, needLoading, needStatusError, needTimeout} = _config;
    // 开启loading / 是否重复请求
    if (_self.beforeRequest(_url, needLoading) && !needRepeat && ~_self.getUrlIndex(_self.resetUrl(_url))) {
        _self.afterRequest(_url);
        return Promise.reject({errstr: '请不要重复~', errNo: repeatErrNo});
    }

    return new Promise((resolve, reject) => {
        // 获取处理后的请求参数
        const {url, meta} = _self.reqDetails[_url];
        // 超时处理 needTimeout优先级
        let actTimeout = timeout;
        if (needTimeout !== timeout) actTimeout = needTimeout;
        if (actTimeout > 0) {
            // needTimeout优先级
            const fetchTimer = setTimeout(() => {
                const errObj = {
                    url: _self.resetUrl(_url),
                    errstr: '请求超时',
                    errNo: timeoutErrNo
                }
                _self.handleEvent('onReqError', errObj);
                reject(errObj)
            }, actTimeout);
            _self.addFetchTimer(_url, fetchTimer);
        }
        fetch(url, meta).then(response => {
            if (response.status !== 200) {
                _self.afterRequest(_url);
                const rejectInfo = _self.handleEvent('onReqError', response);
                reject(rejectInfo || response);
            }
            // 对response处理 没特殊处理返回null
            _self.reqDetails[_url].response = response;
            const resResult = _self.handleEvent('onFetchRes', _url);
            return resResult || response[bodyType]();
        }).then(data => {
            // 请求结束 / 关闭loading / 超时处理
            _self.afterRequest(_url);
            if (bodyType === 'text' || bodyType === 'json') {
                // 对data的通用处理
                const afterData = _self.handleEvent('onAfter', data);
                if (afterData) {
                    data = afterData;
                }
                // 反序列化data
                if (typeof data === 'string') {
                    data = JSON.parse(data);
                }
            }
            // 校验登录态
            const {loginErrNo, goLogin, needAgainReq} = _self.reqConfig.loginConf;
            const _codeNo = parseInt(data[codeConf.key], 10);
            // 状态码=错误码 || 
            if (_codeNo === loginErrNo) {
                // 保存请求状态
                needAgainReq && _self._apiStatusList.push({
                    method,
                    allParams: {
                        url: _self.resetUrl(_url),
                        params,
                        config,
                        headers,
                        type
                    },
                    cb: {resolve, reject}
                });
                // 已经唤起登录页
                if (!_self._isGoLogin) {
                    // 执行登录  针对端内登录不需要继续请求
                    const needAgainGoLogin = !_self._isGoLogin && goLogin(_self.loginSuccess, _self.resetLoginStatus);
                    if (needAgainGoLogin) { // 端内
                        _self.resetLoginStatus();
                        resolve(null);
                    } else {
                        _self._isGoLogin = true;
                    }
                    return;
                }
            }
            // 状态码是否正常
            if (_codeNo !== codeConf.codeNo) {
                const rejectInfo = needStatusError && _self.handleEvent('onStatusError', data);
                reject(rejectInfo || data);
            }
            
            resolve(data.data);
        }).catch(error => {
            _self.afterRequest(_url);
            const rejectInfo = _self.handleEvent('onReqError', error);
            reject(rejectInfo || error);
        });
    });
}
/**
 * @description: 请求的全局配置
 * @param config {Object} 配置
 * @key codeConf {Object} 状态码校验配置
 *      --- codeNo {Number} 正常状态码, 默认0
 *      --- key {String} response中状态码的key, 默认errNo
 * @key loginConf {Object} 登录配置
 *      --- loginErrNo {Number} 未登录状态码, 默认3
 *      --- goLogin {Function} 登录操作, 传入success,fail两个回调
 *      --- needAgainReq {Boolean} 登录完成后继续请求登录前未完成的请求
 * @key timeout {Number} 请求超时时间, 默认10s, 不需要则配置<=0的数
 * @key timeoutErrNo {Number} 超时错误码, 默认2500
 * @key loading {Object} loading操作,
 *      -- open {Function} 打开loading
 *      -- close {Function} 关闭loading
 *      -- time {Number} 请求开始多少ms开启loading, 默认200ms, 小于0则不开启
 * @key onBefore {Function} 请求前调用, 入参url, 可在this.reqDetails[url]取到对应的请求数据
 * @key onFetchRes {Function} fetch返回的promise里调用, 入参url, 一般用于自定义处理流数据, 需返回状态值, 否则返回null
 * @key onAfter {Function} 请求后调用, 入参为response解析后的数据
 * @key onStatusError {Function} 非正常errNo调用, 入参为解析后的数据, 可返回自定义err信息
 * @key onReqError {Function} 非正常http状态码调用,入参为错误信息, 可返回自定义err信息
 * @key repeatApi {Boolean} 是否阻止重复api请求, 默认true阻止
 * @key repeatErrNo {Number} 重复api错误码, 默认110
 */
const loginConf = {
    loginErrNo: 3,
    goLogin() {},
    needAgainReq: true
};

const _reqConfig = {
    codeConf: {
        codeNo: 0,
        key: 'errNo'
    },
    loginConf,
    timeout: 10000,
    timeoutErrNo: 2500,
    loading: {
        time: 200,
        open() {},
        close() {}
    },
    repeatApi: true,
    repeatErrNo: 110
};
class HttpInterface {
    // 请求前的url/meta
    reqDetails = {};
    // 请求api列表
    urlList = [];
    // loading定时器
    loadingTimer = null;
    // loading开启状态
    isLoading = false;
    // fetch超时定时器
    _fetchTimerList = {};
    // 唤起登录界面
    _isGoLogin = false;
    // 登录前接口状态保存
    _apiStatusList = [];
    // http请求接口列表
    _requestMethodList = {};

    // 初始化配置
    initReqConfig(config) {
        this.reqConfig = Object.assign({}, _reqConfig, config);
        const {loading, goLogin, timeout} = this.reqConfig;
        this.loading = loading;
        this.goLogin = goLogin;
        _apiConfig.needTimeout = timeout;
    }

    constructor(config) {
        this.initReqConfig(config);

        this.loginSuccess = this.loginSuccess.bind(this);
        this.resetLoginStatus = this.resetLoginStatus.bind(this);
    }

    // 获取http
    getHttp() {
        if (this._requestMethodList['get']) {
            return this._requestMethodList;
        }
        return this._requestMethodList = ['get', 'post', 'put', 'delete'].reduce((api, method) => {
            api[method] = request.bind(this, method);
            return api;
        }, {});
    }

    handleEvent(name, data = {}) {
        const cb = this.reqConfig[name];
        if (cb) {
            return cb.call(this, data);
        }
    }
    // 请求前调用 一般用来处理loading
    beforeRequest(url, urlIsNeedLoading) {
        const {urlList, loading, isLoading, reqConfig} = this;
        if (urlList.indexOf(url) === -1) {
            urlList.push(url);
        }
        // 重复请求的逻辑判断
        if (/--\d+$/.test(url) && reqConfig.repeatApi) {
            return true;
        }
        // 是否需要loading
        const {time} = loading;
        // 小于0的不展示
        if (time < 0) return false;
        // let needLoading = noNeedloadingUrls.indexOf(url) === -1;
        if (!isLoading && urlIsNeedLoading) {
            this.loadingTimer = setTimeout(() => {
                loading.open();
            }, loading.time);
            this.isLoading = true;
        }
        return false;
    }
    // 请求后调用
    afterRequest(url) {
        // 处理超时定时器
        this.deleteFetchTimer(url);
        this.deleteReqDetail(url);
        const {urlList, loadingTimer, loading, isLoading} = this;
        this.spliceUrl(url);
        // 请求全部完成
        if (urlList.length === 0) {
            // 请求全部返回 清除开启loading的定时器
            clearTimeout(loadingTimer);
            // 且loading是开启状态
            if (isLoading) {
                loading.close();
                this.isLoading = false;
            }
        }
    }
    // 请求结束, 删除对应url
    spliceUrl(url) {
        const urlIndex = this.getUrlIndex(url);
        this.urlList.splice(urlIndex, 1);
    }
    getUrlIndex(url) {
        return this.urlList.indexOf(url);
    }
    // 重置重复请求改变的url
    resetUrl(url) {
        return url.replace(/--\d+$/, '');
    }
    // 删除reqDetails中已完成的请求数据
    deleteReqDetail(url) {
        delete this.reqDetails[url];
    }
    // 保存请求超时timer
    addFetchTimer(key, timer) {
        this._fetchTimerList[key] = timer;
    }
    // 删除请求超时timer
    deleteFetchTimer(key) {
        const timer = this._fetchTimerList[key];
        if (timer) {
            clearTimeout(timer);
            delete this._fetchTimerList[key];
        }
    }
    // 登录成功回调
    loginSuccess() {
        this._isGoLogin = false;
        const {_requestMethodList, _apiStatusList} = this;
        _apiStatusList.map(req => {
            const {method, allParams, cb: {resolve, reject}} = req;
            _requestMethodList[method](allParams).then(resolve, reject);
        })
    }
    // 取消登录, 重置登录状态
    resetLoginStatus(flag = false) {
        this._isGoLogin = flag;
        this._apiStatusList = [];
    }
}

export default HttpInterface;
