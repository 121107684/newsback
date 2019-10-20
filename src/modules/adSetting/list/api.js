import request from 'common/request';
/* 线下退款列表获取*/
export const getNewsList = (payNo) => {
    return request.post({
        url: '/news/list',
        params: payNo,
        type:'json'
    });
};


