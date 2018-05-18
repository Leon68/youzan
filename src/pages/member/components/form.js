import Vue from 'vue'
import Xaddress from './xadress.vue'
export default {
  data() {
    return {
      name: '',
      tel: '',
      provinceValue: -1,
      address: '',
      id: '',
      arealist: '',
      type: this.$route.query.type,
      instance: this.$route.query.instance
    }
  },
  components: {
    Xaddress
  },
  methods: {
  },
  created() {
  }
}
