<template>
<div>
  {{currentUser}}/{{$route.path}}
  <el-menu :default-active="$route.path" :router="true">
    <div v-if="item.isShow" v-for="(item, i) in currentUser.menuList" :key="i">
      <el-menu-item :index="item.url">
        <i :class="item.icon"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
    </div>
  </el-menu>
</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'ConHeader',
  computed: {
    ...mapState({
      currentUser: ({ root }) => root.currentUser
    })
  }
};
</script>
