<template>
  <div id="app">
    <router-view/>
    {{currentUser}}
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'App',
  computed: {
    ...mapState({
      currentUser: ({ root }) => root.currentUser,
      currentRoute: ({ root }) => root.currentRoute
    })
  },
  methods: {
    changeRoute (obj) {
      this.$router.push(obj.path);
    }
  },
  watch: {
    currentRoute: 'changeRoute'
  }
};
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  .btn-ooo {background: #99f !important; color: #fff;}
}
</style>
