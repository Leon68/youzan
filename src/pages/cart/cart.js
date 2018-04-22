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
    editingShopIndex: -1,
    isRemoveGoods: false,
    removeData: null,
    removeMsg: null
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
    allRemoveSelected: {
      get () {
        if (this.editingShop) {
          return this.editingShop.removeChecked
        }
        return false
      },
      set (newVal) {
        if (this.editingShop) {
          this.editingShop.removeChecked = newVal
          this.editingShop.goodsList.forEach(goods => {
            goods.removeChecked = newVal
          })
        }
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
    },
    removeLists () {
      if (this.editingShop) {
        let arr = []
        this.editingShop.goodsList.forEach(good => {
          if (good.removeChecked) {
            arr.push(good)
          }
        })
        return arr
      }
      return []
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
      let attr = this.editingShop ? 'removeChecked' : 'checked'
      shop[attr] = !shop[attr]
      shop.goodsList.forEach(goods => {
        goods[attr] = shop[attr]
      })
    },
    selectGoods (shop, goods) {
      let attr = this.editingShop ? 'removeChecked' : 'checked'
      goods[attr] = !goods[attr]
      shop[attr] = shop.goodsList.every(goods => {
        return goods[attr]
      })
    },
    removeGoods (shop, shopIndex, goods, goodsIndex) {
      this.isRemoveGoods = true
      this.removeData = {shop, shopIndex, goods, goodsIndex}
      this.removeMsg = '确定要删除该商品么?'
    },
    removeList () {
      this.isRemoveGoods = true
      this.removeMsg = `确定将所选 ${this.removeLists.length} 个商品删除么?`
    },
    confirmRemove () {
      if (this.removeMsg === '确定要删除该商品么?') {
        let {shop, shopIndex, goods, goodsIndex} = this.removeData
        axios.post(url.cartRemove, {
          id: goods.id
        }).then(res => {
          shop.goodsList.splice(goodsIndex, 1)
          if (shop.goodsList.length === 0) {
            this.cartLists.splice(shopIndex, 1)
            this.removeShop()
          }
          this.isRemoveGoods = false
        })
      } else {
        let ids = []
        this.removeLists.forEach(goods => {
          ids.push(goods.id)
        })
        axios.post(url.cartMremove, {
          ids
        }).then(res => {
          let arr = []
          this.editingShop.goodsList.forEach(goods => {
            let index = this.removeLists.findIndex(item => {
              return item.id === goods.id
            })
            if (index === -1) {
              arr.push(goods)
            }
          })
          if (arr.length) {
            this.editingShop.goodsList = arr
          } else {
            this.lists.splice(this.editingShopIndex, 1)
            this.removeShop()
          }
          this.removePopup = false
        })
      }
    },
    cancelRemove () {
      this.isRemoveGoods = false
    },
    removeShop () {
      this.editingShop = null
      this.editingShopIndex = -1
      this.cartLists.forEach(shop => {
        shop.editing = false
        shop.editingMsg = '编辑'
      })
    },
    selectAll () {
      let attr = this.editingShop ? 'allRemoveSelected' : 'allSelected'
      this[attr] = !this[attr]
    },
    removeAll () {
      axios.post(url.cartMremove, {

      })
      this.cartLists.splice(this.editingShopIndex, 1)
      this.removeShop()
    },
    edit (shop, shopIndex) {
      shop.editing = !shop.editing
      shop.editingMsg = shop.editing ? '完成' : '编辑'
      this.cartLists.forEach((item, i) => {
        if (shopIndex !== i) {
          item.editingMsg = shop.editing ? '' : '编辑'
        }
      })
      this.editingShop = shop.editing ? shop : null
      this.editingShopIndex = shop.editing ? shopIndex : -1
    },
    add (goods) {
      console.log('add')
      axios.post(url.cartAdd, {
        id: goods.id,
        number: 1
      }).then(res => {
        console.log('nobody')
        goods.number++
      })
    },
    reduce (goods) {
      if (goods.number === 1) return
      axios.post(url.cartReduce, {
        id: goods.id,
        number: 1
      }).then(res => {
        goods.number--
      })
    }
  }
})
