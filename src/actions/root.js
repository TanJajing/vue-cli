import API from '../utils/api';
import * as types from '../store/types';

const actions = {
  getMenuList: ({ commit }, params) => {
    return API.getMenuListAPI(params).then(res => {
      commit(types.CURRENT_MENU_LIST, res.data);
    });
  },
  getData: ({ commit }, params) => {
    return API.getDataAPI(params).then(res => {
      return res;
    });
  },
  getUserRole ({ commit }, params) {
    return API.getUserRoleAPI(params).then(res => {
      commit(types.USER_ROLE_LIST, res.data);
    });
  },
  goFirstPage ({ commit, state }, params) {
    const path = state.root.getFirstPageRoute;
    debugger;
    commit(types.ROUTE_CHANGE, {
      path
    });
  },
  async getSystemInfo ({ commit, dispatch }, params) {
    // 添加路由
    await dispatch('getMenuList');
    commit('ADD_ROUTES');
  }
};

export default actions;