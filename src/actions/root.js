import API from '../utils/api';
import * as types from '../store/types';

const actions = {
  getData: ({ commit }, params) => {
    return API.getDataAPI(params).then(res => {
      return res;
    });
  },
  getUserRole ({ commit }, params) {
    return API.getUserRoleAPI(params).then(res => {
      debugger;
      commit(types.USER_ROLE_LIST, res.data);
    });
  },
  goFirstPage ({ commit, state }, params) {
    const path = state.root.getFirstPageRoute;
    commit(types.ROUTE_CHANGE, {
      path
    });
  },
  async getSystemInfo ({ commit, dispatch }, params) {
    debugger;
    // 获取菜单
    await dispatch('getUserRole');
    // 添加路由
    commit('ADD_ROUTES');
  }
};

export default actions;