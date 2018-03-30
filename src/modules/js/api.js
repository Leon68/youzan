let url = {
  hostLists: '/index/hotLists',
  banner: '/index/banner',
  topLists: '/category/topList',
  subList: '/category/subList',
  rank: '/category/rank',
  searchList: '/search/list',
  details: '/goods/details',
  deal: '/goods/deal',
  cartLists: '/cart/list',
  cartAdd: '/cart/add',
  cartReduce: '/cart/reduce',
  cartRemove: '/cart/remove',
  cartMremove: '/cart/mremove'
}

// 开发环境和真实环境的切换
// let host = ''
// let host = 'http://rapapi.org/mockjsdata/23334'
// let host = 'http://rapapi.org/mockjsdata/24170'
// let host = 'http://result.eolinker.com/jEGBpGF04de2ff01e31a339cbd2a7c5399ba5b3a0b663fa?uri='
let host = 'http://rap2api.taobao.org/app/mock/7058/GET'

for (let key in url) {
  if (url.hasOwnProperty(key)) {
    url[key] = host + url[key]
  }
}

export default url
