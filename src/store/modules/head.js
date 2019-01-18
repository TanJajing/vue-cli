import * as types from '../types';

const state = {
  hotWordList: {},
  headShopcart: {}
};

const mutations = {
  [types.HOT_WORD] (state, data) {
    state.hotWordList = data;
  },
  [types.NEW_SHOPCART] (state, data) {
    let httpServPath = 'http://www.hedongli.com/business';
    if (data) {
      for (let l = 0; l < data.itemList.length; l++) {
        let mchtItem = data.itemList[l];
        for (let i = 0; i < mchtItem.mchtItemList.length; i++) {
          let item = mchtItem.mchtItemList[i];
          let picStr = httpServPath + item.itemPicUrl;
          let subPicStr = picStr.substring(0, picStr.lastIndexOf('.'));
          let subPicStr2 = picStr.substring(picStr.lastIndexOf('.'));
          item.picStr = subPicStr + '_60x60' + subPicStr2;
          item.ContextPath = '';
          item.vr = 0;
          if (item.validateItemState === undefined || item.validateItemState === null || item.validateItemState === '') continue;
          if ((item.validateItemState !== 3 && item.validateItemState !== '3') && (item.validateItemState !== 13 && item.validateItemState !== '13')) {
            item.vr = 3;
          } else {
            let actPrice = item.itemActPrice;
            let validFee = item.validateItemFree;
            if (actPrice !== validFee) {
              item.vr = 4;
            } // 价格变更，是否结算
            if (item.stockNums >= 0) {
              item.vr = 2;
            } // 库存不足，无法结算
          }
        }
      };
    } else {
      data = {};
    }
    state.headShopcart = data;
  }
};

const getters = {};

export default {
  state,
  mutations,
  getters
};