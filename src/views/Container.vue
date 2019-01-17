<template>
<div>
  <ConHeader></ConHeader>

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
