<template>
  <div>
    <group>
      <x-address @on-hide="logHide" @on-show="logShow" :title="title" :value="value" :list="addressData" @on-shadow-change="onShadowChange" placeholder="请选择地址" :show.sync="showAddress"></x-address>
      <!--<x-address @@on-shadow-change="sendAddressValue(value)" :title="title" v-model="value" :list="addressData" placeholder="请选择地址" :show.sync="showAddress"></x-address>-->
    </group>
  </div>
</template>

<script>
import { Group, XAddress, ChinaAddressV4Data, XButton, Value2nameFilter as value2name } from 'vux'

export default {
  props: [ 'ids' ],
  components: {
    Group,
    XAddress,
    XButton
  },
  data () {
    return {
      title: '选择地址',
      addressData: ChinaAddressV4Data,
      showAddress: false,
      value: this.ids
    }
  },
  methods: {
    doShowAddress () {
      this.showAddress = true
      setTimeout(() => {
        this.showAddress = false
      }, 2000)
    },
    onShadowChange (ids, names) {
      console.log('change', ids, names)
      this.value = ids
      this.$emit('sendAddressValue', ids, names)
    },
    changeData () {
      this.value2 = ['430000', '430400', '430407']
    },
    changeDataByLabels () {
      this.value2 = ['广东省', '广州市', '天河区']
    },
    changeDataByLabels2 () {
      this.value2 = ['广东省', '中山市', '--']
    },
    getName (value) {
      return value2name(value, ChinaAddressV4Data)
    },
    logHide (str) {
      console.log('on-hide', str)
    },
    logShow (str) {
      console.log('on-show')
    },
    sendAddressValue() {
      console.log('send', this.value)
    }
  }
}
</script>
