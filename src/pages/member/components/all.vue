<template>
  <div class="container " style="min-height: 597px;">
    <div class="block-list address-list section section-first js-no-webview-block"
         v-if="lists&&lists.length"
    >
      <a class="block-item js-address-item address-item "
         v-for="list in lists"
         :key="list.id"
         :class="{'address-item-default': list.isDefault}"
      >
        <div class="address-title">{{list.name}} {{list.tel}}</div>
        <p>{{list.provinceName}}{{list.cityName}}{{list.districtName}}{{list.address}}</p>
        <a class="address-edit" @click="toEdit(list)">修改</a>
      </a>
    </div>
    <div v-if="lists&&!lists.length">
      没有地址，请添加
    </div>
    <div class="block stick-bottom-row center">
      <router-link class="btn btn-blue js-no-webview-block js-add-address-btn"
                   :to="{name: 'form', query: {type: 'add'}}">
        新增地址
      </router-link>
    </div>
  </div>
  <!--<a style="display: block;" href="https://pfmarket.youzan.com/market/home?m_alias=3nu78u467kddj" class="ft-copyright"></a>-->
</template>

<script>
import address from 'js/addressService.js'
export default {
  data() {
    return {
      lists: null
    }
  },
  created() {
    address.list().then((resolve, reject) => {
      this.lists = resolve.data.lists
    })
  },
  methods: {
    toEdit(list) {
      this.$router.push({
        name: 'form',
        query: {
          type: 'edit',
          instance: list
        }
      })
    }
  }
}
</script>

<style scoped>
@import './address.css';
@import './address_base.css';
</style>
