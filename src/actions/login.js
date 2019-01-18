// import * as types from '../store/types';
import API from '../utils/api';
import router from '@/router';

const actions = {
  login ({ commit, dispatch }, params = {}) {
    return new Promise((resolve, reject) => {
      API.loginApi(params).then(async res => {
        router.replace('/home');
        resolve(res);
      }, err => {
        reject(err);
      });
    });
  }
};

export default actions;
