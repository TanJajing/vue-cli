<template>
  <div>
    <el-button class="btn-ooo" @click="loginIn">登录</el-button>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
  name: 'Login',
  methods: {
    loginIn: function () {
      this.login();
    },
    ...mapActions([
      'login'
    ])
  }
};
</script>

<style>

</style>
