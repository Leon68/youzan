import Vue from 'vue'
import Address from 'js/addressService.js'
import myaddress from './myaddress.vue'
export default {
  data() {
    return {
      name: '',
      tel: '',
      address: '',
      id: '',
      provinceValue: '',
      cityName: '',
      area: '',
      names: [],
      ids: [],
      value: [],
      type: this.$route.query.type,
      instance: this.$route.query.instance
    }
  },
  components: {
    myaddress
  },
  methods: {
    add() {
      let { name, tel, ids, names, address } = this
      let data = { name, tel, ids, names, address }
      if (this.type === 'add') {
        this.$store.dispatch('addLists', data)
      }
      if (this.type === 'edit') {
        Address.add(data).then(res => {
          this.$router.go(-1)
        })
      }
    },
    remove() {
      if (window.confirm('确认删除？')) {
        Address.remove(this.id).then(res => {
          this.$router.go(-1)
        })
      }
    },
    setDefaultAddress() {
      Address.setDefault(this.id).then(res => {
        this.$router.go(-1)
      })
    },
    getAddressValue(ids, names) {
      this.addressIds = ids
      this.value = ids
      this.addressNames = names
      console.log('father', 'value', this.value, 'ids', ids, 'names', names)
    }
  },
  created() {
    if (this.type === 'edit') {
      let address = this.instance
      this.name = address.name
      this.tel = address.tel
      this.address = address.address
      this.id = address.id
      this.ids = [ address.provinceValue, address.cityValue, address.districtValue ]
      this.value = [ address.provinceValue.toString(), address.cityValue, address.districtValue ]
      // this.provinceValue = address.provinceName
      // this.cityName = address.cityName
      // this.area = address.districtName
    }
  }
}
