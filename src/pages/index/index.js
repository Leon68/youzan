import 'css/common.css'
import './index.css'
import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import { InfiniteScroll } from 'mint-ui'
import Foot from 'components/Foot.vue'
import Swiper from 'components/Swiper.vue'
Vue.use(InfiniteScroll)

new Vue({
  el: '#app',
  data: {
    lists: null,
    pageNum: 1,
    loading: false,
    allLoaded: false,
    bannerLists: null
  },
  created () {
    this.getLists()
    this.getBanner()
  },
  methods: {
    getLists () {
      // 判断数据是否加载完毕
      if (this.allLoaded) return
      this.loading = true
      axios.post(url.hostLists, {
        pageNum: this.pageNum,
        pageSize: this.pageSize
      }).then(res => {
        let curLists = res.data.lists
        if (curLists.length < this.pageSize) {
          this.allLoaded = true
        }
        if (this.lists) {
          // 将请求的数据合并
          this.lists = this.lists.concat(curLists)
        } else {
          // 初始化,第一次请求数据
          this.lists = curLists
        }
        this.loading = false
        this.pageNum++
      })
    },
    getBanner () {
      axios.get(url.banner).then(res => {
        this.bannerLists = res.data.lists
      })
    }
  },
  components: {
    Foot, Swiper
  }
})

// app.$mount()
