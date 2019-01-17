<template>
<div>
  {{currentMenuList}}
  <el-menu :default-active="$route.path" :router="true">
    <div v-for="(item, i) in currentMenuList" :key="i">
      <el-menu-item v-if="!item.children" :index="item.url">
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
  name: 'ConSide',
  computed: {
    ...mapState({
      currentMenuList: ({ root }) => root.currentMenuList
    })
  }
};
</script>
