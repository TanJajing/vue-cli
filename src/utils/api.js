// import qs from 'qs';
import request from './http/index.js';

const development = 'http://localhost:3618';
// const development = '/web-mall';
const API = (url, method) => params => request(url, params, method || 'post');

export default {
  /* 公共 */
  loginApi: API(development + '/log'), // 登录
  queryHotWordListAPI: API('/web-mall/old/user/nologin/queryHotWordList'),
  queryNewShopcartAPI: API('/web-mall/old/shop/shoppingCart/getNewShopcart'),
  // itemDetail
  queryItemDetailAPI: API(development + '/item/itemDetail/itemDetailQuery'), // 商品详情的首屏信息
  queryModelDetailAPI: API('/web-mall/old/item/itemCompare/queryModelDetail'), // 详细参数 ?skuId=82257&catLogId=10203
  queryLoginMemberInfoAPI: API('/web-mall/new/merchant/qryMerchant'), // 店铺信息
  queryAnotherStaticAPI: API('/web-mall/old/item/itemDetail/getAnotherStatic'), // 富文本信息 {preferentialPolicyUrl: '', packingListContentUrl: '', contractDescUrl: ''}
  queryJudgement4PAPI: API('/web-mall/old/item/itemDetail/getJudgement4P'), // 订单评价 {skuId: 82257, index: 1, pageSize: 5}
  queryExistenceCollectionAPI: API('/web-mall/old/item/collect/queryExistenceCollection') // 收藏接口  {collObjId: 82257, collType: 1}
};
