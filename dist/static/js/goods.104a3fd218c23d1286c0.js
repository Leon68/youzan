webpackJsonp([2],{"1MZ3":function(t,n){},"3Z3u":function(t,n){},"5ZyK":function(t,n){},"97Sy":function(t,n){},BRiu:function(t,n){},GNZw:function(t,n){},HFfA:function(t,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=s("ULTG"),a=(s.n(e),s("oobK")),i=s.n(a),o=s("97Sy"),r=(s.n(o),s("bCKv")),c=s.n(r),u=s("5ZyK"),d=(s.n(u),s("wqtO")),l=(s.n(d),s("BRiu")),f=(s.n(l),s("g3n3")),h=(s.n(f),s("oPyW")),p=(s.n(h),s("SgWf")),m=(s.n(p),s("1MZ3")),v=(s.n(m),s("GNZw")),w=(s.n(v),s("7+uW")),g=s("mtWM"),y=s.n(g),k=s("TFhR"),b=s("U/rD"),L=s("mw3O"),x=s.n(L),S=s("NydE");w.default.use(c.a),w.default.component(i.a.name,i.a);var C=x.a.parse(location.search.substr(1)).id;new w.default({el:"#app",data:{detailsList:null,detailsTab:["商品详情","本店成交"],tabIndex:0,dealLists:null,swipLists:null,skuType:null,showSku:!1,skuNum:1,isAddCart:!1},mixins:[b.a],components:{Swiper:S.a},created:function(){this.getDetailsList()},methods:{getDetailsList:function(){var t=this;y.a.post(k.a.details,{id:C}).then(function(n){t.detailsList=n.data.data,t.swipLists=[],t.detailsList.imgs.forEach(function(n){t.swipLists.push({urlClick:"",img:n})})})},changeTab:function(t){this.tabIndex=t,t&&this.getDeal()},getDeal:function(){var t=this;y.a.post(k.a.deal).then(function(n){t.dealLists=n.data.data.lists})},chooseSku:function(t){this.skuType=t,this.showSku=!0},cancelSku:function(){this.showSku=!1},changeSkuNum:function(t){t<0&&1===this.skuNum||(this.skuNum+=t)},addCart:function(){var t=this;y.a.post(k.a.cartAdd,{id:C,number:this.skuNum}).then(function(n){200===n.status&&(t.showSku=!1,t.isAddCart=!0,setTimeout(function(){t.isAddCart=!1},1e3))})}},watch:{showSku:function(t,n){document.body.style.overflow=t?"hidden":"auto"}}})},NydE:function(t,n,s){"use strict";var e=s("DNVT"),a=(s("v2ns"),Array,{name:"swiper",props:{lists:{type:Array,required:!0}},created:function(){console.log(this.lists)},mounted:function(){new e.a(".swiper-container",{autoplay:!0,loop:!0,effect:"flip",pagination:{el:".swiper-pagination",type:"bullets"}})}}),i={render:function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"swiper-container"},[n("div",{staticClass:"swiper-wrapper"},this._l(this.lists,function(t,s){return n("div",{key:s,staticClass:"swp-page swiper-slide"},[n("a",{staticClass:"js-no-follow",attrs:{href:t.clickUrl}},[n("img",{staticClass:"goods-main-photo fadeIn",attrs:{src:t.img}})])])})),this._v(" "),n("div",{staticClass:"swiper-pagination"})])},staticRenderFns:[]};var o=s("VU/8")(a,i,!1,function(t){s("yqYY")},null,null);n.a=o.exports},SgWf:function(t,n){},TFhR:function(t,n,s){"use strict";var e={hostLists:"/index/hotLists",banner:"/index/banner",topLists:"/category/topList",subList:"/category/subList",rank:"/category/rank",searchList:"/search/list",details:"/goods/details",deal:"/goods/deal",cartLists:"/cart/list",cartAdd:"/cart/add",cartReduce:"/cart/reduce",cartRemove:"/cart/remove",cartMremove:"/cart/mremove",cartUpdate:"/cart/update",addressLists:"/address/list",addressAdd:"/address/add",addressRemove:"/address/remove",addressUpdate:"/address/update",addressSetDefault:"/address/setDefault"};for(var a in e)e.hasOwnProperty(a)&&(e[a]="http://rap2api.taobao.org/app/mock/7058"+e[a]);n.a=e},"U/rD":function(t,n,s){"use strict";var e={components:{Foot:s("nq5D").a},filters:{priceFixed:function(t){return t.toFixed(2)}}};n.a=e},ULTG:function(t,n){},g3n3:function(t,n){},nq5D:function(t,n,s){"use strict";var e=s("mw3O"),a=s.n(e),i=(a.a.parse(location.search.substr(1)).index,a.a.parse(location.search.substr(1)).index),o=[{name:"有赞",icon:"icon-home",href:"index.html"},{name:"分类",icon:"icon-category",href:"category.html"},{name:"购物车",icon:"icon-cart",href:"cart.html"},{name:"我",icon:"icon-user",href:"member.html"}],r={name:"Foot",data:function(){return{configData:o,curIndex:parseInt(i)||0}},methods:{changeIndex:function(t,n){window.location.replace(n.href+"?index="+t)}}},c={render:function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("div",{staticClass:"bottom-nav"},[s("ul",t._l(t.configData,function(n,e){return s("li",{key:e,class:{active:e===t.curIndex},on:{click:function(s){t.changeIndex(e,n)}}},[s("a",[s("i",{class:n.icon}),t._v(" "),s("div",[t._v(t._s(n.name))])])])}))])},staticRenderFns:[]};var u=s("VU/8")(r,c,!1,function(t){s("3Z3u")},null,null);n.a=u.exports},oPyW:function(t,n){},v2ns:function(t,n){},wqtO:function(t,n){},yqYY:function(t,n){}},["HFfA"]);
//# sourceMappingURL=goods.104a3fd218c23d1286c0.js.map