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
      provinceName: '',
      cityName: '',
      districtName: '',
      names: [],
      ids: [],
      type: this.$route.query.type,
      instance: this.$route.query.instance
    }
  },
  components: {
    myaddress
  },
  methods: {
    add() {
      let { name, tel, provinceName, cityName, ids, districtName, address } = this
      console.log('this', this)
      let data = { name, tel, cityName, provinceName, ids, districtName, address }
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
      this.ids = ids
      this.names = names
      this.provinceName = names[0]
      this.cityName = names[1]
      this.districtName = names[2]
      console.log('father', 'ids', this.ids, 'names', names)
    }
  },
  computed: {
    lists() {
      return this.$store.state.lists
    }
  },
  watch: {
    lists() {
      this.$router.go(-1)
    }
  },
  created() {
    if (this.type === 'edit') {
      let address = this.instance
      this.name = address.name
      this.tel = address.tel
      this.address = address.address
      this.id = address.id
      this.ids = address.ids ? address.ids : [ address.provinceValue.toString(), address.cityValue, address.districtValue ]
      // this.provinceValue = address.provinceName
      // this.cityName = address.cityName
      // this.area = address.districtName
    }
  }
}
