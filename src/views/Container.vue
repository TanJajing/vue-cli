<template>
<div>
  <ConHeader></ConHeader>
  <ConSide></ConSide>
  <div class="content-style">
    <router-view></router-view>
  </div>
  <ConFooter></ConFooter>
</div>
</template>

<script>
import ConHeader from './Head.vue';
import ConSide from './Side.vue';
import ConFooter from './Foot.vue';
export default {
  name: 'Container',
  components: {
    ConHeader,
    ConSide,
    ConFooter
  }
};
</script>
