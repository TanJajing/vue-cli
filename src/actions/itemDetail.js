import API from '../utils/api';
import * as types from '../store/types';

const actions = {
  queryItemDetail: ({ commit }, params) => {
    return API.queryItemDetailAPI(params).then(res => {
      commit(types.ITEM_DETAIL_LIST, res.data);
    });
  },
  queryAnotherStatic: ({ commit }, params) => {
    return API.queryAnotherStaticAPI(params).then(res => {
      commit(types.ANOTHER_STATIC_LIST, res.data);
    });
  },
  queryModelDetail: ({ commit }, params) => {
    return API.queryModelDetailAPI(params).then(res => {
      commit(types.ITEM_MODEL_DETAIL, res.data);
    });
  },
  queryLoginMemberInfo: ({ commit }, params) => {
    return API.queryLoginMemberInfoAPI(params).then(res => {
      commit(types.LOGIN_MEMBER_INFO, res.data);
    });
  },
  queryJudgement4P: ({ commit }, params) => {
    return API.queryJudgement4PAPI().then(res => {
      commit(types.JUDGEMENT_4P, res);
    });
  },
  queryExistenceCollection: ({ commit }, params) => {
    return API.queryExistenceCollectionAPI().then(res => {
      commit(types.EXISTENCE_COLLECTION, res);
    });
  }
};

export default actions;