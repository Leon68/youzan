webpackJsonp([6],{"035s":function(t,a){},"3Z3u":function(t,a){},Hwmd:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("igmb"),s=(e.n(n),e("035s")),r=(e.n(s),e("7+uW")),i=e("mtWM"),o=e.n(i),c=e("TFhR"),d=e("U/rD");new r.default({el:"#app",data:{topLists:null,topIndex:-1,subData:null,rankData:null},mixins:[d.a],created:function(){this.getTopLists(),this.getSubLists(0)},methods:{getTopLists:function(){var t=this;o.a.post(c.a.topLists).then(function(a){t.topLists=a.data.lists}).catch(function(t){})},getSubLists:function(t,a){var e=this;this.topIndex=t,0===t?this.getRank():o.a.post(c.a.subList,a).then(function(t){e.subData=t.data.data})},toSearch:function(t){location.href="search.html?keyword="+t.name+"&id="+t.id},getRank:function(){var t=this;o.a.post(c.a.rank).then(function(a){t.rankData=a.data.data})}}})},TFhR:function(t,a,e){"use strict";var n={hostLists:"/index/hotLists",banner:"/index/banner",topLists:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",cartLists:"/cart/list",cartAdd:"/cart/add",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",cartUpdate:"/cart/update",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var s in n)n.hasOwnProperty(s)&&(n[s]="http://rap2api.taobao.org/app/mock/7058"+n[s]);a.a=n},"U/rD":function(t,a,e){"use strict";var n={components:{Foot:e("nq5D").a},filters:{priceFixed:function(t){return t.toFixed(2)}}};a.a=n},igmb:function(t,a){},nq5D:function(t,a,e){"use strict";var n=e("mw3O"),s=e.n(n),r=(s.a.parse(location.search.substr(1)).index,s.a.parse(location.search.substr(1)).index),i=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}],o={name:"Foot",data:function(){return{configData:i,curIndex:parseInt(r)||0}},methods:{changeIndex:function(t,a){window.location.replace(a.href+"?index="+t)}}},c={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"bottom-nav"},[e("ul",t._l(t.configData,function(a,n){return e("li",{key:n,class:{active:n===t.curIndex},on:{click:function(e){t.changeIndex(n,a)}}},[e("a",[e("i",{class:a.icon}),t._v(" "),e("div",[t._v(t._s(a.name))])])])}))])},staticRenderFns:[]};var d=e("VU/8")(o,c,!1,function(t){e("3Z3u")},null,null);a.a=d.exports}},["Hwmd"]);
//# sourceMappingURL=category.93930f31f9b9640a3922.js.map