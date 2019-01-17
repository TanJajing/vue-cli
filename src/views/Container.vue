<template>
<div>
  <ConHeader></ConHeader>
  -------------------------------------------------------------
  {{currentUser}}
</div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex';
import ConHeader from './Head.vue';
export default {
  name: 'Container',
  components: {
    ConHeader
  },
  beforeMount () {
  },
  computed: {
    ...mapState({
      currentUser: ({ root }) => root.currentUser,
      pageLoading: ({ root }) => root.pageLoading
    })
  },
  methods: {
    ...mapActions([
      'getMenuList'
    ]),
    ...mapMutations({
      _addRoutes: 'ADD_ROUTES'
    })
  }
};
</script>
