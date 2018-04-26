import Vue from 'vue'
import Router from 'vue-router'

import Member from './components/member.vue'
import Address from './components/address.vue'
import All from './components/all.vue'
import Form from './components/form.vue'

Vue.use(Router)

let routes = [{
  path: '/',
  component: Member
}, {
  path: '/address',
  component: Address,
  children: [{
    path: '',
    component: All
  }, {
    path: 'all',
    component: All
  }, {
    path: 'form',
    component: Form

  }]
}]

let router = new Router({
  routes
})
const app = new Vue({
  router
}).$mount('#app')
