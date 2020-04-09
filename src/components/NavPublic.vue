<template>
  <div class="nav">
    <div class="search">
      <!-- 点击登录跳转登录页面 -->
      <span>登录</span>
      <!-- 搜索功能，点击出现搜索组件 -->
      <strong>
        <i class="iconfont icon-search"></i>
        <span>{{searchText}}</span>
      </strong>
      <!-- 购物车，点击跳转购物车页面 -->
      <i class="iconfont icon-gouwu"></i>
    </div>
    <van-tabs 
      scrollspy 
      line-width='.12rem' 
      title-inactive-color="#fff" 
      title-active-color="#fff"
      color="#fff" 
      swipeable 
      background="transparent"
      >
      <van-tab 
        v-for="(item,index) in computedSearchList" 
        :title="item"
        :key="index"
        >
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
//引入vant的滚动的tab标签页
import Vue from 'vue';
import { Tab, Tabs, Search } from 'vant';
Vue.use(Tab);
Vue.use(Tabs)
import {instance} from '@/utils/http'
export default {
  data () {
    return {
      searchText: '',
      searchList: []
    }
  },
  computed: {
    computedSearchList () {
      let arr = this.searchList.map(item=>item.name);
      return ['推荐', ...arr, '即将上新'];
    }
  },
  created () {
    //直接封装axios直接调用接口
    instance.get('/appapi/search/searchDefault/v3')
      .then((res)=>{
        this.searchText = res.data.words;
      })
    instance.get('/appapi/silo/navigationAll/v3?timestamp=1586401647296&summary=13e13559bd1b2e72a1132124af51c5d7')
      .then((res)=>{
        this.searchList = res.data.lists;
      })
  }
}
</script>

<style lang="scss" scoped>
  .nav {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 1rem;
    color: #fff;
    .search {
      display: flex;
      justify-content: space-between;
      text-align: center;
      >span {
        width: .54rem;
        font-size: .15rem;
        line-height: .48rem;
      }
      strong {
        display: flex;
        justify-content: center;
        width: 2.67rem;
        height: .34rem;
        margin-top: .08rem;
        background: hsla(0,0%,100%,.3);
        i,span {
          font-size: .15rem;
          line-height: .34rem;
        }
        span{
          margin-left: .04rem;
        }
      }
      >i {
        width: .49rem;
        font-size: .24rem;
        line-height: .44rem;
      }
    }
  }
</style>