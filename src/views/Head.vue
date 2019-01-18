<template>
<div>
  <!-- top -->
  <HeadTop></HeadTop>
  <!-- search -->
  <HeadSearch></HeadSearch>
  <!-- 导航 -->
  <div v-if="isShowNavBar" class="nav-bar">
    <div class="div-center">
      <p class="all-item"><i class="icon iconfont icon-list fl"></i>所有商品分类</p>
      <ul>
        <li :class="item.class" v-for="(item, i) in currentUser.menuList" :key="i">
          <a :href="item.url"><i v-if="item.class" class="icon iconfont icon-store tl-icon"></i>{{item.name}}</a>
          <!-- <router-link :to="item.url"><i v-if="item.class" class="icon iconfont icon-store tl-icon"></i>{{item.name}}</router-link> -->
        </li>
      </ul>
    </div>
  </div>
</div>
</template>

<script>
import HeadTop from '@/components/head/HeadTop.vue';
import HeadSearch from '@/components/head/HeadSearch.vue';
import { mapState } from 'vuex';
export default {
  name: 'ConHeader',
  components: {
    HeadTop,
    HeadSearch
  },
  computed: {
    isShowNavBar () {
      let routerName = this.$route.name;
      let isShow = true;
      this.currentNavBar.data.forEach(function (item) {
        if (item.page === routerName) {
          isShow = item.show;
        }
      });
      return isShow;
    },
    ...mapState({
      currentUser: ({ root }) => root.currentUser,
      currentNavBar: ({ root }) => root.currentNavBar
    })
  }
};
</script>
