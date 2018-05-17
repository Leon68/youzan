export default {
  data() {
    return {
      name: '',
      tel: '',
      provinceValue: -1,
      address: '',
      id: '',
      type: this.$route.query.type,
      instance: this.$route.query.instance
    }
  }
}
