import * as types from '../types';

const state = {
  testList: {}
};

const mutations = {
  [types.TEST_LIST] (state, data) {
    state.testList = data;
  },
};

const getters = {};

export default {
  state,
  mutations,
  getters
};