<template>
<div></div>
</template>

<script>
import {mapState, mapActions} from 'vuex';
export default {
  name: 'ItemDetail',
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

<style lang="scss"></style>
