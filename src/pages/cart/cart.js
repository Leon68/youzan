import 'css/common.css'
import url from 'js/api.js'

import './cart.css'
import './cart_base.css'
import './cart_trade.css'

import Vue from 'vue'
import axios from 'axios'

import mixin from 'js/mixin.js'

new Vue({
  el: '#app',
  data: {
    cartLists: null
  },
  mixins: [mixin],
  computed: {

  },
  created () {
    this.getCartLists()
  },
  methods: {
    getCartLists () {
      axios.post(url.cartLists).then(res => {
        this.cartLists = res.data.lists
      })
    }

  }
})
