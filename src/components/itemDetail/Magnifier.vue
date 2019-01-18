<template>
<div class="magnifier">
  <div class="magnifier-show">
    <div v-if="itemDataList && itemDataList.length">
    <div v-if="isMouseShow" :style="{left: `${magnifierData.left}px`, top: `${magnifierData.top}px`}" @mouseover="handOver"  @mousemove="handMove" @mouseout="handOut" class="big-mouse"></div>
    <img id="showImg" class="show-img" :src="magnifierData.srcPath"  @mouseover="showMouseEvent" @mouseout="showMouseEvent" :width="450" :height="450"/>
    <div v-if="isMouseShow" class="big-view">
      <img :src="magnifierData.srcPath" style="position: absolute" :style="{left: `-${magnifierData.bigLeft}px`, top: `-${magnifierData.bigTop}px`}" class="big-img" height="900px" width="900px">
    </div>
    </div>
  </div>
  <div class="magnifier-swiper clear">
    <div v-if="itemDataList && itemDataList.length >= 5" class="left" @click="prevPage"><i class="icon iconfont icon-keyboard-arrow-left"></i></div>
    <div class="container">
      <ul id="magnifierSwiper" class="items">
        <li v-for="(item, index) in itemDataList" :key="item.id" @click="checkCurrImg(item.path, index)" :class="imgIndex === index ? 'active' : ''" class="item" style="background: #fa9">
          <img :src="item.sPic" />
        </li>
      </ul>
    </div>
    <div v-if="itemDataList && itemDataList.length >= 5" class="right" @click="nextPage"><i class="icon iconfont icon-keyboard-arrow-right"></i></div>
  </div>
  <div class="operation">
    <p @click="setCollectionFn"><i class="icon iconfont" :class="!existenceCollection?'icon-favorite-border':'icon-favorite'"></i>收藏</p>
    <p><i class="icon iconfont icon-sharepx"></i>分享</p>
    <p><i class="icon iconfont icon-compare-arrows"></i>对比</p>
  </div>
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import $ from 'jquery';
export default {
  name: 'Magnifier',
  data () {
    return {
      isMouseShow: false,
      width: 450,
      height: 450,
      imgRect: {},
      imgIndex: 0,
      siperData: {
        index: 0,
        left: 0,
        stepWidth: 72,
        showLength: 5
      },
      collObj: {
        collObjId: 82257,
        collType: 1
      }
    };
  },
  beforeMount () {
    this.queryExistenceCollection(this.collObj);
  },
  computed: {
    itemDataList () {
      if (this.itemDetailList) {
        return this.itemDetailList.productPicObjList;
      }
    },
    magnifierData () {
      if (this.saveMagnifierData) {
        return this.saveMagnifierData;
      }
    },
    ...mapState({
      saveMagnifierData: ({ itemDetail }) => itemDetail.saveMagnifierData,
      existenceCollection: ({ itemDetail }) => itemDetail.existenceCollection,
      itemDetailList: ({ itemDetail }) => itemDetail.itemDetailList
    })
  },
  methods: {
    showMouseEvent (e) {
      if (e.type === 'mouseover') {
        this.isMouseShow = true;
        this.imgRect = document.getElementById('showImg').getBoundingClientRect();
      }
    },
    getPos (ev) {
      return {x: ev.pageX, y: ev.pageY, width: ev.target.clientWidth, height: ev.target.clientHeight};
    },
    handMove (e) {
      if (this.isMouseShow === true) {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        this.saveMagnifierData.left = this.getPos(e).x - (this.getPos(e).width / 2) - (this.imgRect.left);
        this.saveMagnifierData.top = this.getPos(e).y - (this.getPos(e).height / 2) - (this.imgRect.top + scrollTop);
        if (this.saveMagnifierData.left >= this.imgRect.width - this.getPos(e).width) {
          this.saveMagnifierData.left = this.imgRect.width - this.getPos(e).width;
        } else if (this.saveMagnifierData.left <= 0) {
          this.saveMagnifierData.left = 0;
        }
        if (this.saveMagnifierData.top >= this.imgRect.height - this.getPos(e).height) {
          this.saveMagnifierData.top = this.imgRect.height - this.getPos(e).height;
        } else if (this.saveMagnifierData.top <= 0) {
          this.saveMagnifierData.top = 0;
        }
        this.saveMagnifierData.bigLeft = this.saveMagnifierData.left * 2;
        this.saveMagnifierData.bigTop = this.saveMagnifierData.top * 2;
        this.saveMagnifierDataFn();
      }
    },
    saveMagnifierDataFn () {
      this.$store.commit('SAVE_MAGNIFIER_STATE', this.saveMagnifierData);
    },
    handOut (e) {
      this.isMouseShow = false;
    },
    handOver (e) {
      this.isMouseShow = true;
    },
    prevPage () {
      let length = Math.ceil(this.itemDataList.length / this.siperData.showLength) - 1;
      if (this.siperData.index >= length) {
        this.siperData.index = length;
        this.siperData.left = (this.siperData.stepWidth * this.siperData.showLength) * length;
        return false;
      }
      this.siperData.index = this.siperData.index + 1;
      this.animateFn();
    },
    nextPage () {
      if (this.siperData.index <= 0) {
        this.siperData.index = 0;
        this.siperData.left = 0;
        return false;
      }
      this.siperData.index = this.siperData.index - 1;
      this.animateFn();
    },
    animateFn (flag) {
      this.siperData.left = this.siperData.index * (this.siperData.stepWidth * this.siperData.showLength);
      $('#magnifierSwiper').animate({marginLeft: -this.siperData.left + 'px'}, 1000);
    },
    checkCurrImg (path, index) {
      this.imgIndex = index;
      this.saveMagnifierData.srcPath = path;
      this.saveMagnifierDataFn();
    },
    setCollectionFn () {
      this.queryExistenceCollection(this.collObj);
    },
    ...mapActions(['queryExistenceCollection'])
  },
  watch: {
    saveMagnifierData: 'saveMagnifierDataFn'
  }
};
</script>
