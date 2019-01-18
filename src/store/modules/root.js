import * as types from '../types';
import Global from '../../components/Global.vue';

const rootPath = Global.rootPath;
const state = {
  getFirstPageRoute: '', // 登录之后第一个跳转的页面
  pageLoading: false,
  currentRoute: {},
  currentUser: {
    menuList: [
      {enable: true, url: rootPath + '/item/itemFilter/toHomePageNew', name: '首页'},
      {enable: true, url: rootPath + '/item/itemFilter/bookMeeting', name: '订货会'},
      {enable: true, url: rootPath + '/item/rushBuying/rushBuyingList', name: '抢购'},
      {enable: true, url: rootPath + '/item/itemFilter/auctionHomePage.do', name: '竞拍'},
      {enable: true, url: rootPath + '/item/itemFilter/combineSalesArea', name: '组合销售'},
      {enable: true, url: rootPath + '/dibao/newPage/toDibaoListPage', name: '区域分销商'},
      {enable: true, url: rootPath + '/nfd', name: 'NFD业务'},
      {enable: true, url: rootPath + '/valueadd/AbilityApprove/toVAHome', name: '增值业务'},
      {enable: true, url: rootPath + '/item/itemFilter/operateMchtList', name: '优质店铺', class: 'store'}
    ],
    operator: {
      opRegion: null,
      staffName: '',
      provinces: []
    }
  },
  currentNavBar: {
    isShowNavBar: true,
    data: [
      {page: 'itemDetail', show: false}
    ]
  },
};

const mutations = {
  [types.SHOW_PAGE_LOADING] (state) {
    state.pageLoading = true;
  },
  [types.HIDE_PAGE_LOADING] (state) {
    state.pageLoading = false;
  },
  // 改变当前路由
  [types.ROUTE_CHANGE] (state, data) {
    state.currentRoute = data;
  },
  [types.ROUTE_UNSHOW] (state, data) {
    state.currentNavBar = data;
  }
};

const getters = {};

export default {
  state,
  mutations,
  getters
};