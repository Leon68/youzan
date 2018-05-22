import Vue from 'vue'
import Vuex from 'vuex'
import Address from 'js/addressService.js'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    lists: null
  },
  mutations: {
    init(state, lists) {
      state.lists = lists
    },
    add(state, instance) {
      console.log(instance)
      state.lists.push(instance)
    }

  },
  actions: {
    getLists({commit}) {
      Address.list().then(res => {
        commit('init', res.data.lists)
      })
    },
    addLists({commit}, instance) {
      Address.add(instance).then(res => {
        commit('add', instance)
      })
    }
  }
})

export default store
