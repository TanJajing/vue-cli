<template>
<div>
  -------------------------------------------------------------
  {{currentUser}}
<el-button class="btn-ooo" @click="sureOkk">确定</el-button>
  <Select v-if="testList" v-model="datalist.testValue" style="width:200px">
    <Option v-for="item in testList" :index="item.id" :value="item.value" :key="item.value">{{ item.id }}</Option>
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
  beforMount () {
    this.getData();
  },
  computed: {
    ...mapState({
      currentUser: ({ root }) => root.currentUser,
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
