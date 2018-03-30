import 'css/common.css'
import url from 'js/api.js'
import mixin from 'js/mixin.js'

import './search.css'

import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import Velocity from 'velocity-animate'

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
      Velocity(document.body, 'scroll', {duration: 1000})
      this.topShow = false
    }
  }
})
