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
export const userForgetPwd = (data) => {
    return request.post({
        url: '/api/udc/login',
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
    return request.post({
        url: '/api/udc/news/page/published',
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
