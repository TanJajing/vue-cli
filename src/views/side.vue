<template>
  <!-- 右侧导航 -->
  <div class="side-nav">
      <ul class="side-center">
        <li v-for="(item, index) in sideNav" :key="index" @mouseenter="sideTab(index, 'over')" @mouseleave="sideTab(index, 'out')" :class="index===currentIndex?'active':''">
          <a :href="item.path">
            <i class="icon iconfont" :class="item.icon"></i><span v-if="item.name" :class="item.childrenDiv?'shop-cart':'tool-tip'">{{item.name}}</span>
            <ShopCart v-if="item.childrenDiv"></ShopCart>
          </a>
        </li>
      </ul>
    </div>
</template>

<script>
import Global from '@/components/Global.vue';
import ShopCart from '@/components/side/ShopCart.vue';
const sideNav = [
  {icon: 'icon-account-circle', name: '用户中心', childrenDiv: false, path: Global.rootPath + '/pages/user/trade/userOrder.jsp'},
  {icon: 'icon-shopping-cart', name: '购物车', childrenDiv: true},
  {icon: 'icon-local-activitypx', name: '优惠券', childrenDiv: false, path: Global.rootPath + '/pages/user/trade/userCoupon.jsp'},
  {icon: 'icon-favorite', name: '我的收藏', childrenDiv: false, path: Global.rootPath + '/item/collect/queryItemList'},
  {icon: 'icon-Group2', name: '在线客服', childrenDiv: false},
  {icon: 'icon-Group', name: '问卷调查', childrenDiv: false, path: Global.rootPath + '/member/toDiaowen?url=http://www.hedongli.com/diaowen/wenjuan/hnuvk4vho.html'},
  {icon: 'icon-Group1', name: false, childrenDiv: false}
];
export default {
  name: 'ConSide',
  components: {
    ShopCart
  },
  data () {
    return {
      currentIndex: -1,
      sideNav: sideNav,
      rootPath: Global.rootPath,
      mchtId: Global.mchtId
    };
  },
  methods: {
    sideTab (index, type) {
      this.currentIndex = type === 'over' ? index : -1;
    }
  }
};
</script>
