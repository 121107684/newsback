
import {
    getAfterListReq,
} from './api';
/* 获取售后列表*/
export async function getAfterList({commit}) {
    let data = await getAfterListReq();
    commit('SET_AFTER_LIST', data.afters);
    commit('CHANGE_AFTER_MANAGE_PAGE_INFO', data);
}