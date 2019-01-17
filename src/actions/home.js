import API from '../utils/api';
import * as types from '../store/types';

const actions = {
  getData: ({ commit }, params) => {
    return API.getDataAPI(params).then(res => {
      // commit(types.TEST_LIST, res.data);
      commit(types.ROUTE_CHANGE, {
        path: '/home'
      });
      debugger;
    });
  }
};

export default actions;