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
    cartLists: null,
    total: 0,
    editingShop: null,
    editingShopIndex: -1
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
      set (newVal) {
        this.cartLists.forEach(shop => {
          shop.checked = newVal
          shop.goodsList.forEach(goods => {
            goods.checked = newVal
          })
        })
      }
    },
    selectLists () {
      let total = 0
      let arr = []
      if (this.cartLists && this.cartLists.length > 0) {
        this.cartLists.forEach(shop => {
          shop.goodsList.forEach(goods => {
            if (goods.checked) {
              arr.push(goods)
              total += goods.price * goods.number
            }
          })
        })
      }
      this.total = total
      return arr
    }
  },
  created () {
    this.getCartLists()
  },
  methods: {
    getCartLists () {
      axios.post(url.cartLists).then(res => {
        let cartLists = res.data.cartList
        cartLists.forEach(shop => {
          shop.checked = true
          shop.removeChecked = false
          shop.editing = false
          shop.editingMsg = '编辑'
          shop.goodsList.forEach(goods => {
            goods.checked = true
            goods.removeChecked = false
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
    },
    selectAll () {
      this.allSelected = !this.allSelected
    },
    edit (shop, shopIndex) {
      shop.editing = !shop.editing
      shop.editingMsg = shop.editing ? '完成' : '编辑'
      this.cartLists.forEach((item, i) => {
        if (shopIndex !== i) {
          item.editingMsg = shop.editing ? '' : '编辑'
        }
      })
    }
  }
})
