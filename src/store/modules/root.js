import * as types from '../types';
import AddRoutes from '@/router/AddRoutes';
import router from '@/router/';

const state = {
  getFirstPageRoute: '', // 登录之后第一个跳转的页面
  pageLoading: false,
  userRoleList: [],
  currentRoute: {
    path: ''
  },
  currentMenuList: {},
  currentUser: {
    menuIds: [], // 扁平化的menuId数组
    menuList: []
  }
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
  [types.CURRENT_MENU_LIST] (state, data) {
    // 当前用户拥有的菜单权限，根据规则显示
    state.currentMenuList = data;
    let menuIds = [];
    data.map(val => {
      menuIds.push(val.menuId);
    });
    state.currentUser.menuIds = menuIds;
  },
  // 改变当前路由
  [types.ROUTE_CHANGE] (state, data) {
    state.currentRoute = data;
  },
  [types.ADD_ROUTES] (state, data) {
    const routes = new AddRoutes();
    router.addRoutes(routes.addDynamicRoutes(state.currentUser.menuIds));
    state.getFirstPageRoute = routes.getFirstPageRoute;
  }
};

const getters = {};

export default {
  state,
  mutations,
  getters
};