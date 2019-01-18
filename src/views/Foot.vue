<template>
<div>
    <!-- top -->
    <div class="page-foot">
      <div class="div-center foot-items clear">
        <dl class="foot-item">
          <dt class="icon"><img src="../assets/images/foot01.png" /></dt>
          <dd>
            <h4 class="f-i-title">正品保障</h4>
            <p class="f-i-propaganda">正品保障，提供发票</p>
          </dd>
        </dl>
        <dl class="foot-item">
          <dt class="icon"><img src="../assets/images/foot02.png" /></dt>
          <dd>
            <h4 class="f-i-title">物流承诺</h4>
            <p class="f-i-propaganda">如约送货，送货上门</p>
          </dd>
        </dl>
        <dl class="foot-item">
          <dt class="icon"><img src="../assets/images/foot03.png" /></dt>
          <dd>
            <h4 class="f-i-title">全国联保</h4>
            <p class="f-i-propaganda">30天包退，365天包换</p>
          </dd>
        </dl>
        <dl class="foot-item">
          <dt class="icon"><img src="../assets/images/foot04.png" /></dt>
          <dd>
            <h4 class="f-i-title">咨询、投诉100%受理</h4>
            <p class="f-i-propaganda">受理无延迟，满意为止</p>
          </dd>
        </dl>
      </div>
    </div>
    <div class="font-info">
      <div class="div-center clear">
        <div class="foot-href">
          <h4>购物指南</h4>
          <a :href="`${rootPath}/help/quickOrder.html?mchtId=${mchtId}`" target="_blank">注册用户</a>
          <a :href="`${rootPath}/help/orderProcess.html?mchtId=${mchtId}`" target="_blank">订购流程</a>
          <a :href="`${rootPath}/help/orderMgt.html?mchtId=${mchtId}`" target="_blank">订单管理</a>
          <a :href="`${rootPath}/help/accountMgt.html?mchtId=${mchtId}`" target="_blank">账户管理</a>
        </div>
        <div class="foot-href">
          <h4>支付方式</h4>
          <a :href="`${rootPath}/help/mixPayment.html?mchtId=${mchtId}`" target="_blank">混合支付</a>
          <a :href="`${rootPath}/help/offlinePayment.html?mchtId=${mchtId}`" target="_blank">线下支付</a>
          <a :href="`${rootPath}/help/onlinePayment.html?mchtId=${mchtId}`" target="_blank">网银支付</a>
          <a :href="`${rootPath}/help/mobilePayment.html?mchtId=${mchtId}`" target="_blank">第三方平台支付</a>
          <a :href="`${rootPath}/help/threePay.html?mchtId=${mchtId}`" target="_blank">银联代扣</a>
        </div>
        <div class="foot-href">
          <h4>购物指南</h4>
          <a :href="`${rootPath}/help/orderMgt.html?mchtId=${mchtId}`" target="_blank">订单管理</a>
          <a :href="`${rootPath}/help/accountMgt.html?mchtId=${mchtId}`" target="_blank">用户信息管理</a>
          <a :href="`${rootPath}/help/goodsReceipt.html?mchtId=${mchtId}`" target="_blank">账目管理</a>
        </div>
        <div class="foot-href f-last">
          <h4>购物指南</h4>
          <a :href="`${rootPath}/help/links/ZYlogistics/zhongyi.jsp?mchtId=${mchtId}`" target="_blank">中移物流</a>
        </div>
        <dl class="foot-help">
          <dt><img src="../assets/images/foot05.png" /></dt>
          <dd>
            <h4>客户服务中心</h4>
            <p class="f-number">4001310086</p>
            <p>工作时间：9:00 ~ 23:00</p>
          </dd>
        </dl>
      </div>
    </div>
    <div class="font-company">
      <div class="div-center f-company clear">
        <p class="fl f-c-fl">
          <a :href="`${rootPath}/help/aboutLtd.html?mchtId=${mchtId}`" target="_blank">公司简介</a>
          <a href="###" target="_blank">企业文化</a>
          <a href="###" target="_blank">法律声明</a>
          <a :href="`${rootPath}/help/aboutLtd.html?mchtId=${mchtId}&type=contact`" target="_blank">联系我们</a>
          <a href="###" target="_blank">网站地图</a>
        </p>
        <p class="fr f-c-fr">
          <a :href="`http://www.miitbeian.gov.cn`" target="_blank"><i class="icon iconfont icon-phone-android blue mr6"></i>粤ICP备12066907号</a>
          <a href="###" target="_blank">中国移动通信版权所有</a>
        </p>
      </div>
    </div>
</div>
</template>

<script>
import Global from '@/components/Global.vue';
export default {
  name: 'ConFooter',
  data () {
    return {
      rootPath: Global.rootPath,
      mchtId: Global.mchtId
    };
  }
};
</script>
