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
    allSelected: {
      get () {
        if (this.cartLists && this.cartLists.length > 0) {
          return this.cartLists.every(shop => {
            return shop.checked
          })
        }
      },
      set () {

      }
    }
  },
  created () {
    this.getCartLists()
  },
  methods: {
    getCartLists () {
      axios.post(url.cartLists).then(res => {
        console.log(res)
        let cartLists = res.data.cartList
        cartLists.forEach(shop => {
          shop.checked = true
          shop.goodsList.forEach(goods => {
            goods.checked = true
          })
        })
        this.cartLists = cartLists
      })
    },
    selectShop (shop) {
      shop.checked = !shop.checked
      if (shop.checked) {
        shop.goodsList.forEach((goods) => {
          goods.checked = true
        })
      } else {
        shop.goodsList.forEach((goods) => {
          goods.checked = false
        })
      }
    },
    selectGoods (shop, goods) {
      goods.checked = !goods.checked
      shop.checked = shop.goodsList.every(goods => {
        return goods.checked
      })
    }
  }
})
