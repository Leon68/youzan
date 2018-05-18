<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div class="swp-page swiper-slide"
           v-for="(list, index) in lists"
           :key="index"
      >
        <a class="js-no-follow" :href="list.clickUrl">
          <img class="goods-main-photo fadeIn"
               :src="list.img">
        </a>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
// swiper 对dom节点进行操作的,dom节点什么时候生产?
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.css'

export default {
  name: 'swiper',
  props: {
    lists: {
      type: Array,
      required: true
    }
  },
  created() {
    console.log(this.lists)
  },
  mounted() {
    let mySwiper = new Swiper('.swiper-container', {
      autoplay: true,
      loop: true,
      effect: 'flip',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      }
    })
  }
}
</script>

<style>
  .swiper-container .swiper-wrapper .swiper-slide a {
    height: 100%;
    width: 100%;
  }

</style>
