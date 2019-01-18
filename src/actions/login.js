// import * as types from '../store/types';
import API from '../utils/api';
import router from '@/router';

const actions = {
  login ({ commit, dispatch }, params = {}) {
    return new Promise((resolve, reject) => {
      API.loginApi(params).then(async res => {
        await dispatch('getSystemInfo');
        router.replace('/item/itemFilter/toHomePageNew');
        resolve(res);
      }, err => {
        reject(err);
      });
    });
  }
};

export default actions;
