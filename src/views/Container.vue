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
    this.getUserRole({});
  },
  computed: {
    ...mapState({
      currentUser: ({ root }) => root.currentUser,
      pageLoading: ({ root }) => root.pageLoading
    })
  },
  methods: {
    ...mapActions([
      'getUserRole'
    ]),
    ...mapMutations({
      _addRoutes: 'ADD_ROUTES'
    })
  }
};
</script>
