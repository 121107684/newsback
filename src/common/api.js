import request from 'common/request';
/* 用户登录
   params： {
        "password": "string",
        "username": "string"
    }
*/
export const userLogin = (data) => {
    return request.post({
        url: '/api/udc/login',
        params: data,
        type:'json'
    });
};
/* 忘记密码
   params： {
        "password": "string",
        "username": "string"
    }
*/
export const userLoginOut = () => {
    return request.post({
        url: '/api/udc/loginOut',
        type:'json'
    });
};
/* 退出登录
   params： {
        "password": "string",
        "username": "string"
    }
*/
export const userForgetPwd = (data) => {
    return request.post({
        url: '/api/udc/login',
        params: data,
        type:'json'
    });
};
/* 修改密码
   params： {
        "newPassword": "string",
        "oldPassword": "string",
        "username": "string"
    }
*/
export const userModifyPwd = (data) => {
    return request.post({
        url: '/api/udc/modifyPwd',
        params: data,
        type:'json'
    });
};


/****************************新闻模块接口****************************** */

/* 新闻分页列表
   params： {
        "lastId": "string",
        "pageNum": "string",
        "pageSize": "string",
        "type": 0
    }
*/
export const getNewsPage = (data) => {
    console.debug(data);
    let url = '';
    if (data.type) {
        url = '/api/udc/news/page/Type'
    } else {
        url = '/api/udc/news/page'
    }
    return request.post({
        url: url,
        params: data,
        type:'json'
    });
};
/* 新闻分页列表(无登陆)
    params： {
        "pageNum": "string",
        "pageSize": "string",
        "type": 0
    }
*/
export const getNewsPagePublished = (data) => {
    return request.post({
        url: '/api/udc/news/page/published/type',
        params: data,
        type:'json'
    });
};

/* 新闻添加
   params： {
        "title": "string",
        "type": "integer",
        "status": "integer", 1 未发布 2已发布 添加默认1
        "imgDatas": [],
        digest: ''
    }
*/
export const newsAdd = (data) => {
    return request.post({
        url: '/api/udc/news/add',
        params: data,
        type:'json'
    });
};
/* 新闻编辑
   params： {
        "id": "integer"
        "title": "string",
        "type": "integer",
        "status": "integer", 1 未发布 2已发布 添加默认1
        "imgDatas": [],
        digest: ''
    }
*/
export const newsEdit = (data) => {
    return request.post({
        url: '/api/udc/news/update',
        params: data,
        type:'json'
    });
};

/* 新闻删除
   params： {
        "id": "integer"
    }
*/
export const newsDelect = (data) => {
    return request.post({
        url: '/api/udc/news/remove',
        params: data,
        type:'json'
    });
};

/* 新闻发布
   params： {
        "id": "integer"
    }
*/
export const newsPublish = (data) => {
    return request.post({
        url: '/api/udc/news/publish',
        params: data,
        type:'json'
    });
};

/* 新闻详情
   params： {
        "id": "integer"
    }
*/
export const newsInfo = (data) => {
    return request.post({
        url: '/api/udc/news/info',
        params: data,
        type:'json'
    });
};

/***************************会员申请接口*********************** */
/* 会员分页列表
   params： {
        "beginDate" : "string",
        "endDate" : "string",
        "lastId": "string",
        "pageNum": "string",
        "pageSize": "string"
    }
*/
export const getMshipApplypage = (params) => {
    return request.post({
        url: '/api/udc/mship/applyPage',
        params: params,
        type:'json'
    });
};

/* 会员申请详情
   params： {
        "id" : "string"
    }
*/
export const getMshipApply = (params) => {
    return request.post({
        url: '/api/udc/mship/apply',
        params: params,
        type:'json'
    });
};

/* 会员申请详情
   params： {
        "id" : "string"
    }
*/
export const getMshipApplyInfo = (params) => {
    return request.post({
        url: '/api/udc/mship/applyInfo',
        params: params,
        type:'json'
    });
};

/***************************广告栏设置*********************** */

/* 广告分页列表
   params： {
        "lastId": "string",
        "pageNum": "string",
        "pageSize": "string",
        "type": 0
    }
*/
export const getAdPage = (data) => {
    return request.post({
        url: '/api/udc/ad/page',
        params: data,
        type:'json'
    });
};

/* 广告分页列表(无登陆)
   params： {
        "lastId": "string",
        "pageNum": "string",
        "pageSize": "string",
        "type": 0
    }
*/
export const getAdPagePublished = (data) => {
    return request.post({
        url: '/api/udc/ad/page/published',
        params: data,
        type:'json'
    });
};
/* 广告删除
   params： {
        "id": "string"
    }
*/
export const getAdDel = (data) => {
    return request.post({
        url: '/api/udc/ad/remove',
        params: data,
        type:'json'
    });
};

/* 广告详情
   params： {
        "id": "string"
    }
*/
export const getAdInfo = (data) => {
    return request.post({
        url: '/api/udc/ad/info',
        params: data,
        type:'json'
    });
};

/* 广告编辑
   params： {
        "id": "string",
        "imgData": {
            "key": "string",
            "thumbUrl": "string",
            "url": "string"
        },
        "imgKey": "string",
        "publishDate": "string",
        "status": 0,
        "title": "string",
        "url": "string"
    }
*/
export const getAdUpdata = (data) => {
    return request.post({
        url: '/api/udc/ad/update',
        params: data,
        type:'json'
    });
};

/* 广告添加
   params： {
        "id": "string",
        "imgData": {
            "key": "string",
            "thumbUrl": "string",
            "url": "string"
        },
        "imgKey": "string",
        "publishDate": "string",
        "status": 0,
        "title": "string",
        "url": "string"
    }
*/
export const getAdAdd = (data) => {
    return request.post({
        url: '/api/udc/ad/add',
        params: data,
        type:'json'
    });
};