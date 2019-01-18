<template>
          <!-- 购物车 -->
          <div class="cart-list">
            <h3><a class="fr" :href="`${rootPath}/pages/shop/shopcart.jsp?mchtId=${mchtId}`">查看全部</a>购物车</h3>
            <div class="shop-view">
            <div class="shop-items">
              <div v-for="mcht in headShopcart.itemList" :key="mcht.mchtId" class="items">
                <h4 class="title"><el-checkbox class="mchtCheck" type="checkbox" /><i class="icon iconfont icon-store"></i>{{mcht.mchtName}}</h4>
                <dl v-for="item in mcht.mchtItemList" :key="item.itemId" :class="item.vr===3||item.vr===2?'un-show':''" class="item clear">
                  <dt class="clear">
                    <el-checkbox :disabled="item.vr===3||item.vr===2?'disabled':''" class="item-check" type="checkbox" />
                    <img :src="item.picStr" />
                  </dt>
                  <dd>
                    <h5 class="name omit_2">
                      <a v-if="item.mchtType === 6" href="/NFD/newPage/NFDitemDetailQuery?skuId">{{item.itemName}}</a>
                      <a v-else href="/item/itemDetail/itemDetailQuery?skuId">{{item.itemName}}</a>
                      <span v-if="item.activityType === 2 || item.activityType === 3" class="mark">赠</span>
                      <span v-if="item.activityType === 1 || item.activityType === 3" class="mark02">减</span>
                    </h5>
                    <div class="money clear">
                      <p v-if="item.vr !== 3 && item.vr !== 2" class="amount fl">
                        <span class="increase"><i class="icon iconfont icon-add"></i></span>
                        <input disabled="true" type="number" />
                        <span class="reduce"><i class="icon iconfont icon-remove"></i></span>
                      </p>
                      <p v-else class="amount un-count fl">
                        <span class="increase"><i class="icon iconfont icon-add"></i></span>
                        <input disabled type="number" :value="item.buyNums" />
                        <span class="reduce"><i class="icon iconfont icon-remove"></i></span>
                      </p>
                      <p v-if="item.priceFlag && (item.vr !== 3 && item.vr !== 2)" class="price">￥<span>{{item.itemActPrice}}</span></p>
                      <p v-if="item.vr === 3" class="fr rose">已下架</p>
                      <p v-if="item.vr === 2" class="fr rose">库存不足</p>
                    </div>
                  </dd>
                  <div class="del"><i class="icon iconfont icon-delete"></i></div>
                </dl>
              </div>
            </div>
          </div>
          <div class="shop-operable clear">
            <div class="fl settle-price">
              <p><span class="rose">{{headShopcart.itemNums}}</span>件商品</p>
              <p>共计：￥<span class="rose">{{headShopcart.totalFee}}</span></p>
            </div>
            <p class="go-settle"><a class="fr btn-default btn-rose">去结算</a></p>
          </div>
        </div>
</template>

<script>
import Global from '../Global.vue';
import { mapState, mapActions } from 'vuex';
export default {
  name: 'ShopCart',
  data () {
    return {
      rootPath: Global.rootPath,
      mchtId: Global.mchtId,
      checked: true
    };
  },
  beforeMount () {
    this.queryNewShopcart({mchtId: this.mchtId});
  },
  computed: {
    ...mapState({
      headShopcart: ({ head }) => head.headShopcart
    })
  },
  methods: {
    ...mapActions(['queryNewShopcart'])
  }
};
</script>
