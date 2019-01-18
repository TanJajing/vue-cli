import * as types from '../types';

const state = {
  itemDetailList: {},
  anotherAtaticList: [],
  saveMagnifierData: {
    srcPath: '',
    left: 0,
    top: 0,
    bigLeft: 0,
    bigTop: 0
  },
  modelDetail: {},
  loginMemberInfo: {},
  judgement4P: {},
  existenceCollection: false
};

const mutations = {
  [types.ITEM_DETAIL_LIST] (state, data) {
    state.saveMagnifierData.srcPath = data.productPicObjList && data.productPicObjList.length > 0 ? data.productPicObjList[0].sPic : '';
    state.itemDetailList = data;
  },
  [types.ANOTHER_STATIC_LIST] (state, data) {
    state.anotherAtaticList = data;
  },
  [types.SAVE_MAGNIFIER_STATE] (state, data) {
    state.saveMagnifierData = data;
  },
  [types.ITEM_MODEL_DETAIL] (state, data) {
    state.modelDetail = data;
  },
  [types.LOGIN_MEMBER_INFO] (state, data) {
    state.loginMemberInfo = data;
  },
  [types.JUDGEMENT_4P] (state, data) {
    state.judgement4P = data;
  },
  [types.EXISTENCE_COLLECTION] (state, data) {
    state.existenceCollection = data;
  }
};

const getters = {
};

export default {
  state,
  mutations,
  getters
};