<template>
<div class="div-center">
  <ConHeader></ConHeader>
  <div class="content-style">
    <router-view></router-view>
  </div>
  <ConFooter></ConFooter>
</div>
</template>

<script>
import ConHeader from './Head.vue';
import ConFooter from './Foot.vue';
export default {
  name: 'Container',
  components: {
    ConHeader,
    ConFooter
  }
};
</script>
