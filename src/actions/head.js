import API from '../utils/api';
import * as types from '../store/types';

const actions = {
  queryHotWordList: ({ commit }, params) => {
    return API.queryHotWordListAPI(params).then(res => {
      commit(types.HOT_WORD, res.rt);
    });
  },
  queryNewShopcart: ({ commit }, params) => {
    return API.queryNewShopcartAPI(params).then(res => {
      commit(types.NEW_SHOPCART, res.data);
    });
  }
};

export default actions;