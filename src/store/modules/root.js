import * as types from '../types';
import AddRoutes from '@/router/AddRoutes';
import router from '@/router/';

const state = {
  getFirstPageRoute: '', // 登录之后第一个跳转的页面
  pageLoading: false,
  userRoleList: [],
  currentRoute: {},
  currentUser: {
    menuIds: [], // 扁平化的menuId数组
    menuList: [],
    operator: {
      opRegion: null,
      staffName: '',
      provinces: []
    }
  },
};

const mutations = {
  [types.SHOW_PAGE_LOADING] (state) {
    state.pageLoading = true;
  },
  [types.HIDE_PAGE_LOADING] (state) {
    state.pageLoading = false;
  },
  [types.USER_ROLE_LIST] (state, data) {
    state.userRoleList = data;
  },
  // 改变当前路由
  [types.ROUTE_CHANGE] (state, data) {
    state.currentRoute = data;
  },
  [types.ADD_ROUTES] (state, data) {
    const routes = new AddRoutes();
    router.addRoutes(routes.addDynamicRoutes(state.userRoleList));
    state.getFirstPageRoute = routes.getFirstPageRoute;
  }
};

const getters = {};

export default {
  state,
  mutations,
  getters
};