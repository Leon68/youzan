import './category.css'
import 'css/common.css'

import Vue from 'vue'
import axios from 'axios'
import url from 'js/api.js'
import mixin from 'js/mixin.js'

new Vue({
  el: '#app',
  data: {
    topLists: null,
    topIndex: -1,
    subData: null,
    rankData: null
  },
  mixins: [mixin],
  created () {
    this.getTopLists()
    this.getSubLists(0)
  },
  methods: {
    getTopLists () {
      axios.post(url.topLists).then(res => {
        this.topLists = res.data.lists
      }).catch(res => {
      })
    },
    getSubLists (index, id) {
      this.topIndex = index
      if (index === 0) {
        this.getRank()
      } else {
        axios.post(url.subList, id).then(res => {
          this.subData = res.data.data
        })
      }
    },
    toSearch (list) {
      location.href = `search.html?keyword=${list.name}&id=${list.id}`
    },
    getRank () {
      axios.post(url.rank).then(res => {
        this.rankData = res.data.data
      })
    }
  }
})
