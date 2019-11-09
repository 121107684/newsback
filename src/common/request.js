
import eventBus from './eventBus';
import {objToParams, getCookie} from './utils';
const reqHeaders = {
    'Cache-Control': 'max-age=0',
    'Pragma': 'no-cache',
    'Accept': 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    'x-requested-with': 'fetch',
    "accessToken": 'rSU2ns2pdjlx2Khq6pS/QUFFAurtyx4QZpeT7ex4CEJOxWb7GkETsyRKUbpyaNdQ57j41qtjBVU3bW6l+fbKXJtXfAgMiYHVQEzF8Q6EacQPRzL/HIT6SMAxHA=='
};

/**
 * 公共的请求 支持表单和json两种数据类型
 *
 * @param {String} method 请求的方法类型
 * @param {Object} obj = {url, headers, params, type 请求的数据类型(type = 'json')}
 * @returns {Object} Promise
 */
function request(method, {url, headers = {}, params = {}, type}) {
    let meta = {
        method: method,
        headers: Object.assign({}, reqHeaders, headers),
        body: null,
        credentials: 'include'
    };
    const isJsonType = type === 'json';
    if (isJsonType) {
        meta.headers['Content-Type'] = 'application/json;charset=UTF-8';
    }
    let cookies = {}
    if (getCookie('accessToken')) {
        Object.assign(cookies, {accessToken: getCookie('accessToken').replace(/\"/g, "")})
    }
    const formParams = objToParams(params);
    console.debug(formParams); 
    if (method === 'get' && formParams) {
        url += `?${formParams}`;
    } else if (method === 'post' && formParams && cookies.accessToken) {
        url += `?${objToParams(cookies)}`;
    }
    if (method !== 'get' && formParams) {
        if (isJsonType) {
            meta.body = JSON.stringify(params);
        } else {
            meta.body = formParams.toString();
        }
    }
    
    return new Promise((resolve, reject) => {
        let timeout = setTimeout(()=> {
            // Toast({message: '网络错误, 请稍后再试~', duration: 2500});
            let data = {
                errstr: '网络错误, 请稍后再试~',
                errNo: 2500
            };
            reject(data);
            eventBus.$emit('statusError', data);
        }, 60000);
        fetch(url, meta).then(response => {
            if (response.status !== 200) {
                eventBus.$emit('requestError', response);
                reject(response);
            }
            return response.json();
        }).then(data => {
            // 返回JSON中的status非0 视为请求失败
            if (parseInt(data.code, 10) !== 200) {
                eventBus.$emit('statusError', data);
                reject(data);
            }
            // 业务数据挂载在result上，各项目如有不同，直接修改此处
            resolve(data);
        }).catch(error => {
            // eventBus.$emit('requestError', error);
            reject(error);
        }).finally(()=>{
            clearTimeout(timeout);
        });
    });
}

export default ['get', 'post', 'put', 'delete'].reduce((api, method) => {
    api[method] = request.bind(null, method);
    return api;
}, {});

// import {Loading} from 'element-ui';
// import {num2Str} from './utils';
// import HttpInterface from './http.service';
// let loading = null;
// const conf = {
//     timeout: 15000,
//     onStatusError(err) {
//         const {errstr} = err;
//         if (!errstr) {
//             return;
//         }
//         // message.error(errstr);
//         eventBus.$emit('statusError', err);
//     },
//     onReqError(err) {
//         // message.error('网络错误, 请稍后再试~');
//         eventBus.$emit('requestError', err);
//     },
//     onAfter(res) {
//         return num2Str(res);
//     },
//     loading: {
//         time: 100,
//         open() {
//             loading = Loading.service({
//                 fullscreen: true
//             });
//         },
//         close() {
//             if (loading) {
//                 loading.close();
//             }
//         }
//     }
// };
// const request = new HttpInterface(conf).getHttp();

// export default request;

