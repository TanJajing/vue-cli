<template>
    <!-- top -->
     <div class="nav-top">
      <div class="clear div-center">
        <div class="top-right">
          <div class="top-li" :class="isOpened.isUserInfo" @mouseenter="isOpendFn('isUserInfo', 'over')" @mouseleave="isOpendFn('isUserInfo', 'out')">
            <p class="hand">用户中心 <i class="icon iconfont icon-keyboard-arrow-down"></i></p>
            <div v-if="isOpened.isUserInfo === 'active'">
              <p><a :href="`${rootPath}/pages/user/trade/userOrder.jsp`" target="_blank">我的订单</a>
              <p><a :href="`${rootPath}/pages/user/trade/deliveryOrder.jsp`" target="_blank">发货单</a></p>
              <p><a>退出登录</a></p>
            </div>
          </div>
          <div class="top-li"><p><a :href="`${rootPath}/pages/shop/shopcart.jsp?mchtId=${mchtId}`"><i class="icon iconfont icon-shopping-cart tl-icon"></i>购物车 0件</a></p></div>
          <div class="top-li m-top-click" :class="isOpened.isService" @mouseenter="isOpendFn('isService', 'over')" @mouseleave="isOpendFn('isService', 'out')">
            <p class="hand">客户服务 <i class="icon iconfont icon-keyboard-arrow-down"></i></p>
            <div v-if="isOpened.isService === 'active'">
              <p><a :href="`${rootPath}/help/orderProcess.html?mchtId=${mchtId}`" target="_blank">帮助中心</a></p>
              <p><a :href="`${rootPath}/pages/user/trade/userComplain.jsp`" target="_blank">咨询投诉</a></p>
              <p><a :href="`${rootPath}/member/memberServiceCenter?mchtId=${mchtId}`" target="_blank">服务中心</a></p>
            </div>
          </div>
          <div class="top-li" :class="isOpened.isPhone" @mouseenter="isOpendFn('isPhone', 'over')" @mouseleave="isOpendFn('isPhone', 'out')">
            <p><i class="icon iconfont icon-phone-android tl-icon"></i>手机版</p>
            <div v-if="isOpened.isPhone === 'active'">
              <img :src="`${rootPath}/m/res/ios.png`" alt="IOS版" title="IOS版" />
              <p><a class="blue" :href="`https://itunes.apple.com/us/app/he-dong-li/id1114748977?l=zh&ls=1&mt=8`">扫码下载IOS版</a></p>
              <img :src="`${rootPath}/m/res/android.png`"  alt="安卓版" title="安卓版"/>
              <p><a class="blue" :href="`${rootPath}/m/version/b2b-android.apk`">扫码下载安卓版</a></p>
            </div>
          </div>
          <div class="top-li qr-code" :class="isOpened.isWeChat" @mouseenter="isOpendFn('isWeChat', 'over')" @mouseleave="isOpendFn('isWeChat', 'out')">
            <p>微信公众号</p>
            <div v-if="isOpened.isWeChat === 'active'">
              <img :src="`${rootPath}/theme/public/temp/miniMsg.png`" />
            </div>
          </div>
          <div class="top-li">
            <p>全国统一客服<i class="icon iconfont icon-headset-mic tl-icon"></i></p>
          </div>
        </div>
        <div>您当前所在省份 :  <i class="icon iconfont icon-room tr-icon"></i>北京</div>
      </div>
    </div>
</template>

<script>
import Global from '../Global.vue';
export default {
  name: 'HeadTop',
  data () {
    return {
      rootPath: Global.rootPath,
      mchtId: Global.mchtId,
      isOpened: {isUserInfo: '', isService: '', isWeChat: '', isPhone: ''}
    };
  },
  methods: {
    isOpendFn (value, type) {
      for (let x in this.isOpened) {
        if (x !== value) {
          this.isOpened[x] = '';
        }
      }
      this.isOpened[value] = type === 'over' ? 'active' : '';
    }
  }
};
</script>
