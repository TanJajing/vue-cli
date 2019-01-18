<template>
    <!-- search -->
    <div class="clear nav-search">
      <div class="div-center">
        <div class="search-box">
          <div class="sear-type" :class="isTypeOpen" @mouseenter="isOpenCheck('over')" @mouseleave="isOpenCheck('out')">
            <p><span>{{searchType[0].name}}</span><i class="icon iconfont icon-keyboard-arrow-down"></i></p>
            <div v-if="isTypeOpen === 'active'">
              <p class="hover" @click="selectType(0)">{{searchType[1].name}}</p>
            </div>
          </div>
          <div @click="publicSearch" class="sear-btn">搜索</div>
          <div class="sear-item">
            <div class="sear-item-flex">
              <p class="flex"><input value="" :class="JSON.stringify(hotWordList) === '{}' ? 'no-tag' : ''" class="sear-input" @input="getSearchValue" placeholder="请输入" type="text" /></p>
              <div class="tag">
                <span v-for="item in hotWordList" :key="item.hotWordId" class="omit">{{item.hotWordName}}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="nav-logo"><img src="../../assets/images/logo.png" width="300" alt="logo" /></div>
      </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  name: 'HeadSearch',
  data () {
    return {
      isTypeOpen: '',
      searchType: [{type: 1, name: '商品'}, {type: 2, name: '商家'}],
      searchValue: '',
      pamas: {
        value: '',
        type: ''
      }
    };
  },
  beforeMount () {
    this.queryHotWordList({mchtId: 13});
  },
  computed: {
    ...mapState({
      hotWordList: ({ head }) => head.hotWordList
    })
  },
  methods: {
    isOpenCheck (type) {
      this.isTypeOpen = type === 'over' ? 'active' : '';
    },
    selectType (index) {
      this.searchType.push(this.searchType[index]);
      this.searchType = this.searchType.slice(1);
      this.isTypeOpen = '';
    },
    getSearchValue (e) {
      this.searchValue = e.target.value;
    },
    publicSearch () {
      this.pamas.value = this.searchValue;
      this.pamas.type = this.searchType[0].type;
    },
    ...mapActions([
      'queryHotWordList'
    ])
  }
};
</script>
