<template>
<div>你好
<el-button class="btn-ooo" @click="sureOkk">确定</el-button>
  <Select v-if="testList" v-model="datalist.testValue" style="width:200px">
    <Option v-for="item in testList" :value="item.value" :key="item.value">{{ item.id }}</Option>
  </Select>
</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  data () {
    return {
      datalist: {
        testValue: ''
      }
    };
  },
  computed: {
    ...mapState({
      testList: ({ home }) => home.testList.list
    })
  },
  methods: {
    sureOkk () {
      this.getData();
    },
    ...mapActions([
      'getData'
    ])
  }
};
</script>

<style>

</style>
