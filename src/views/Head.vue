<template>
<div>
  <div>
    <div>1</div>
    <div>2</div>
    <div>3</div>
  </div>
  {{currentUser}}
  <el-menu :default-active="$route.path" :router="true">
    <div v-if="item.enable" v-for="(item, i) in currentUser.menuList" :key="i">
      <el-menu-item v-if="!item.children" :index="item.url">
        <i :class="item.icon"></i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
      <el-submenu v-else :index="String(i)">
        <template slot="title">
          <i :class="item.icon"></i>
          <span slot="title">{{item.name}}</span>
        </template>
        <el-menu-item v-if="subItem.enable" class="sub-menu" v-for="(subItem, subI) in item.children" :key="subI" :index="subItem.url">
          {{subItem.name}}
        </el-menu-item>
      </el-submenu>
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
