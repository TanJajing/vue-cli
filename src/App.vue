<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>
<style lang="scss">
@import 'assets/index';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  .btn-ooo {background: #99f !important; color: #fff;}
}
</style>
