<template>
<div class="firstInfo">
  <h3 class="title"><span>热卖</span>{{itemDetailList.skuName}}</h3>
  <div class="active-info">
    <dl class="clear">
      <dt>零售价</dt>
      <dd v-if="itemDetailList.favourablePrice" class="del">￥{{itemDetailList.favourablePrice}}</dd>
    </dl>
    <dl v-if="itemDetailList.isContract === 1" class="clear sale-price">
      <dt>合约价</dt>
      <dd class="price">￥<span class="bold">{{itemDetailBean.skuContractPrice}}</span></dd>
    </dl>
    <dl v-else class="clear sale-price">
      <dt>建议零售价</dt>
      <dd class="price">￥<span class="bold">{{itemDetailList.marketPrice}}</span></dd>
    </dl>
    <dl class="clear">
      <dt>活动</dt>
      <dd>
        <div class="gifts">
          <span class="gift-icon">买赠</span>订购每满10台，赠送beat耳机×1
          <el-popover
            placement="bottom"
            title="标题"
            width="200"
            trigger="click">
            <i slot="reference" class="icon iconfont icon-help-outline"></i>
          </el-popover>
        </div>
        <div class="gifts">
          <span class="gift-icon">满减</span>订购超10台，单价降50元
          <el-popover
            placement="bottom"
            title="标题"
            width="200"
            trigger="click">
            <i slot="reference" class="icon iconfont icon-help-outline"></i>
          </el-popover>
        </div>
      </dd>
    </dl>
  </div>
  <div class="buy-info">
    <dl class="clear">
      <dt>商品编号</dt>
      <dd>{{itemDetailList.skuCode}}</dd>
    </dl>
    <dl class="clear skus">
      <dt>产品规格</dt>
      <dd v-if="skuList">
        <label v-for="(item, index) in skuList" :key="item.skuId" :index="index" @click="selectSku(index, item.skuId)" :class="checkIndex === index ? 'active': ''" class="sku">{{item.specTips}}</label>
      </dd>
    </dl>
    <dl class="clear">
      <dt>数量</dt>
      <dd class="buy-number">
        <el-input-number v-model="params.buyNumber" @change="handleChange" :min="1" :max="10"></el-input-number>
        <p>此为紧俏机型，每人限购<span class="number">10</span>件</p>
      </dd>
    </dl>
    <dl class="clear">
      <dt>库存量</dt>
      <dd>100件</dd>
    </dl>
  </div>
  <div class="buy-btn">
    <el-button type="danger" @click="buy" style="min-width: 133px;">立即购买</el-button>
    <el-button type="primary"><i class="icon iconfont icon-shopping-cart tl-icon mr5"></i>加入购物车</el-button>
  </div>
</div>
</template>

<script>
import Global from '../Global.vue';
import {mapState} from 'vuex';
export default {
  name: 'FirstInfo',
  data () {
    return {
      params: {
        skuId: null,
        buyNumber: 1
      },
      rootPath: Global.rootPath,
      checkIndex: -1
    };
  },
  computed: {
    skuList () {
      if (this.itemDetailList) {
        return this.itemDetailList.skuUnitSpecsList;
      }
    },
    ...mapState({
      itemDetailList: ({ itemDetail }) => itemDetail.itemDetailList
    })
  },
  methods: {
    selectSku (index, skuId) {
      this.checkIndex = index;
      this.params.skuId = skuId;
    },
    handleChange () {

    },
    buy () {
      window.location.href = this.rootPath + '/shop/shoppingCart/item2Settle.do?itemId=' + this.params.skuId + '&buyNums=' + this.params.buyNumber + '&giftId=';
    }
  }
};
</script>
