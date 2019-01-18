<template>
<div>
  <div class="body-gray">
    <div class="div-center breadcrumb clear">
      <el-breadcrumb separator-class="el-icon-arrow-right" class="fl">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>手机</el-breadcrumb-item>
        <el-breadcrumb-item>小米（MI）红米5</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="mcht-info fr">
        <el-popover
          placement="bottom"
          width="200"
          trigger="hover">
          <div class="mcht-store-info">
            <div class="info">
              <p><label>供应商：{{loginMemberInfo.mchtName}}</label></p>
              <p><label>所在地：{{loginMemberInfo.mchtRegion}}</label></p>
              <p><label>客服电话：{{loginMemberInfo.custsrvPhone}}</label></p>
            </div>
            <div class="mcht-store-info-btn">
              <a><i class="icon iconfont icon-store"></i>进店逛逛</a>
              <a><i class="icon iconfont icon-store"></i>收藏店铺</a>
            </div>
          </div>
          <h5 class="name" slot="reference"><i class="icon iconfont icon-store"></i>北京终端公司</h5>
        </el-popover>
        <el-popover
          placement="right"
          width="400"
          trigger="hover">
          <div></div>
          <h5 class="name" slot="reference"><i class="icon iconfont icon-headset-mic"></i>联系商家</h5>
        </el-popover>
        <h5></h5>
      </div>
    </div>
  </div>
  <div class="div-center">
    <div class="clear">
      <Magnifier></Magnifier>
      <FirstInfo></FirstInfo>
    </div>
    <ItemInfos></ItemInfos>
  </div>
</div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
import Magnifier from '@/components/itemDetail/Magnifier.vue';
import FirstInfo from '@/components/itemDetail/FirstInfo.vue';
import ItemInfos from '@/components/itemDetail/ItemInfos.vue';
export default {
  name: 'ItemDetail',
  components: {
    Magnifier,
    FirstInfo,
    ItemInfos
  },
  async beforeMount () {
    // 渠道商数据
    await this.queryItemDetail({skuId: 82257});
    this.queryLoginMemberInfo({mchtId: this.itemDetailList.mchtId});
  },
  computed: {
    ...mapState({
      itemDetailList: ({ itemDetail }) => itemDetail.itemDetailList,
      loginMemberInfo: ({ itemDetail }) => itemDetail.loginMemberInfo
    })
  },
  methods: {
    ...mapActions(['queryItemDetail', 'queryLoginMemberInfo'])
  }
};
</script>

<style lang="scss">
@import '../../assets/scss/itemDetail';
</style>
