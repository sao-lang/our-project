<template>
  <van-swipe :autoplay="3000">
      <van-swipe-item 
        v-for="(item, index) in banners" 
        :key="index"
        class="swiper"
        >
        <img v-lazy="item.main_image" />
        <div>
          <p>{{item.main_title}}</p>
          <p>{{item.sub_title}}</p>
          <p>{{item.description}}</p>
        </div>
      </van-swipe-item>
    </van-swipe>
</template>

<script>
//引入vant轮播swiper插件
import Vue from 'vue';
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe);
Vue.use(SwipeItem);
//图片懒加载
import { Lazyload } from 'vant';

Vue.use(Lazyload);

export default {
    props:["banners"]
}
</script>

<style lang="scss" scoped>
.swiper {
  position: relative;
  img {
      width: 100%;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 3.3rem;
    left: 50%;
    z-index: 10;
    transform: translateX(-50%);
    color: #fff;
    p {
      font-size: .13rem;
    }
    p:nth-of-type(1) {
      font-size: .24rem;
      font-weight: bold;
    }
  }
}
</style>