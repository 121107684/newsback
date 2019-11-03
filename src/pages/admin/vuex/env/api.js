
// import request from 'common/request';
/* 获取售后列表*/
export async function getAfterListReq() {
    return await request.post({
        url: '/mall/admin/after/list',
        type: 'json',
        params
    });
}
