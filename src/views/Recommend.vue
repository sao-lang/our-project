<template>
  <div class="recommend">
    <Swiper :banners="banners"></Swiper>
    <ul class="newgoods">
      <li 
        v-for="item in newGoods"
        :key="item.id"
        >
        <p>
          <span>{{item.main_title}}</span>
          <span>{{item.sub_title}}</span>
        </p>
        <p 
          >
          <img
            v-for="(img,index) in item.products"
            :key="index"
            :src="img.picUrl"
            >
        </p>
        <p>
          <i 
            v-for="(text,index) in item.products"
            :key="index"
            v-bind:class="text.tag==='精选新品'?'black':'red'"
            >
              {{text.tag}}
          </i>
        </p>
      </li>
    </ul>
    <div 
      class="pros"
      v-for="(pro,index) in pros"
      :key="index"
      >
      <h4>{{pro.name}}</h4>
      <Pros></Pros>
    </div>
  </div>
</template>

<script>
//引入instance
import {instance} from '@/utils/http'
import Swiper from '@/components/Swiper'
import Pros from '@/components/Pros'
export default {
  components: {
    Swiper,
    Pros
  },
  data () {
    return {
      banners: [],
      newGoods: [],
      pros:[]
    }
  },
  created () {
    instance.get('/appapi/home/mktBannerApp/v3?silo_id=2013000100000000008&platform_code=PLATEFORM_H5')
      .then(res=>{
        this.banners = res.data.banners;
      })
    instance.get('/appapi/ninenew/operational/v1?credential=')
      .then(res=>{
        this.newGoods = res.data.show2;
      })
    instance.get('/appapi/home/eventForH5?params=%7B%7D&timestamp=1586424789965&summary=d6e87e181453187fa36d8c282773e2d5&platform_code=H5')
      .then(res=>{
        console.log(res.data.lists);
        this.pros = res.data.lists;
      })
 }
}
</script>

<style lang="scss" scoped>
.recommend {
  .newgoods {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: .2rem .16rem 0;
    box-sizing: border-box;
    li {
      width: 49%;
      background:rgb(247,247,247);
      p:nth-of-type(1)  {
        font-family: 'PingFang SC','Microsoft Yahei';
        font-weight: bold;
        span:nth-of-type(1){
          font-size: .16rem;
          color: #111;
          height: .6rem;
          line-height: .6rem;
          letter-spacing: 0;
        }
        span:nth-of-type(2){
          margin-left: .03rem;
          font-size: .12rem;
          color: #666;
          line-height: 1;
        }
      }
      p:nth-of-type(2) {
        display: flex;
        justify-content: space-between;
        padding: .08rem;
        background: rgb(247,247,247);
        img {
          width: .61rem;
          background: rgb(247,247,247);
        }
      }
      p:nth-of-type(3){
        display: flex;
        justify-content: space-between;
        margin-top: .06rem;
        margin-bottom: .1rem;
        font-size: .11rem;
        i {
          width: .5rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        i:nth-of-type(1) {
          margin-left: .13rem;
        }
        i:nth-of-type(2) {
          margin-right: .13rem;
        }
      }
      .black {
        border: .01rem solid black;
      }
      .red {
        border: .01rem solid red;
        color: #fff;
        background: red;
      }
    }
  }
  .pros {
    padding: .2rem .16rem;
    h4 {
      font-size: .2rem;
      color: black;
    }
  }
}
</style>