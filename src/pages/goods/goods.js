import './css/goods_common.css'
import './css/goods_custom.css'
import './css/goods.css'
import './css/goods_theme.css'
import './css/goods_mars.css'
import './css/goods_sku.css'
import './css/goods_fade.css'
import './css/goods_shadow-fade.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import mixin from 'js/mixin.js'
import qs from 'qs'
import Swiper from 'components/Swiper.vue'
import { Spinner, InfiniteScroll } from 'mint-ui'

Vue.use(InfiniteScroll)
Vue.component(Spinner.name, Spinner)

let {id} = qs.parse(location.search.substr(1))

let detailsTab = ['商品详情', '本店成交']

new Vue({
  el: '#app',
  data: {
    detailsList: null,
    detailsTab,
    tabIndex: 0,
    dealLists: null,
    swipLists: null,
    skuType: null,
    showSku: false,
    skuNum: 1,
    isAddCart: false
  },
  mixins: [mixin],
  components: {
    Swiper
  },
  created () {
    this.getDetailsList()
  },
  methods: {
    getDetailsList () {
      axios.post(url.details, {id}).then(res => {
        this.detailsList = res.data.data
        this.swipLists = []
        this.detailsList.imgs.forEach(img => {
          this.swipLists.push({
            urlClick: '',
            image: img
          })
        })
      })
    },
    changeTab (index) {
      this.tabIndex = index
      if (index) {
        this.getDeal()
      }
    },
    getDeal () {
      axios.post(url.deal).then(res => {
        this.dealLists = res.data.data.lists
      })
    },
    chooseSku (type) {
      this.skuType = type
      this.showSku = true
    },
    cancelSku () {
      this.showSku = false
    },
    changeSkuNum (num) {
      if (num < 0 && this.skuNum === 1) return
      this.skuNum += num
    },
    addCart () {
      axios.post(url.addCart, {
        id,
        number: this.skuNum
      }).then(res => {
        if (res.data.status === 200) {
          this.showSku = false
          this.isAddCart = true
          setTimeout(() => {
            this.isAddCart = false
          }, 1000)
        }
      })
    }
  },
  watch: {
    showSku (val, oldVal) {
      document.body.style.overflow = val ? 'hidden' : 'auto'
      // document.body.style.height = val ? '100%' : 'auto'
    }
  }
})
