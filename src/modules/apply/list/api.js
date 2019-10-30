import request from 'common/request';
/* 线下退款列表获取*/
export const getMshipApplypage = (payNo) => {
    return request.post({
        url: '/api/udc/mship/applyPage',
        params: payNo,
        type:'json'
    });
};


