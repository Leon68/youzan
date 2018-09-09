import 'css/common.css'
import url from 'js/api.js'
import mixin from 'js/mixin.js'

import './search.css'

import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import Velocity from 'velocity-animate'
import 'velocity-animate/velocity.ui.js'
import { Spinner, InfiniteScroll } from 'mint-ui'

Vue.use(InfiniteScroll)
Vue.component(Spinner.name, Spinner)

let {keyword, id} = qs.parse(location.search.substr(1))

new Vue({
  el: '.container',
  data: {
    searchLists: null,
    keyword,
    topShow: false
  },
  mixins: [mixin],
  created () {
    this.getSearchList()
  },
  methods: {
    getSearchList () {
      axios.post(url.searchList, {keyword, id}).then(res => {
        this.searchLists = res.data.lists
      })
    },
    move () {
      console.log(document.documentElement.scrollTop)
      if (document.documentElement.scrollTop > 100) {
        this.topShow = true
      } else {
        this.topShow = false
      }
    },
    toTop () {
      document.documentElement.velocity({scrollTop: 0}, {duration: 400})
      this.topShow = false
    },
    back() {
      history.go(-1)
      // location.href = 'category.html'
      console.log(location.href)
    }
  }
})
