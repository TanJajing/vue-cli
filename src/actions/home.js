import API from '../utils/api';
import * as types from '../store/types';

const actions = {
  getData: ({ commit }, params) => {
    return API.getDataAPI(params).then(res => {
      commit(types.TEST_LIST, res.data);
    });
  }
};

export default actions;