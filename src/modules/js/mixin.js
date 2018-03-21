import Foot from 'components/Foot.vue'

let mixin = {
  components: {
    Foot
  },
  filters: {
    priceFixed: function (price) {
      return price.toFixed(2)
    }
  }
}

export default mixin
