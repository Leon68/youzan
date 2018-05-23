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
        data.id = parseInt(Math.random() * 10000)
        this.$store.dispatch('addLists', data)
      }
      if (this.type === 'edit') {
        data.id = this.id
        this.$store.dispatch('updateAction', data)
      }
    },
    remove() {
      if (window.confirm('确认删除？')) {
        this.$store.dispatch('removeAction', this.id)
      }
    },
    setDefaultAddress() {
      // Address.setDefault(this.id).then(res => {
      //   this.$router.go(-1)
      // })
      this.$store.dispatch('setDefaultAction', this.id)
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
    lists: {
      handler() {
        this.$router.go(-1)
      },
      deep: true
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
