// import * as types from '../store/types';
import API from '../utils/api';
// import router from '@/router';

const actions = {
  login ({ commit, dispatch }, params = {}) {
    return new Promise((resolve, reject) => {
      API.loginApi(params).then(async res => {
        await dispatch('getSystemInfo');
        // 默认跳转到用户拥有第一个权限地址
        await dispatch('goFirstPage');
        resolve(res);
      }, err => {
        reject(err);
      });
    });
  }
};

export default actions;
