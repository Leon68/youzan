<template>
  <div class="container " style="min-height: 581px;">
    <div class="content">
      <div class="user-infos">
        <div class="pull-left avatar">
          <div class="img" style="background-image: url(https://img.yzcdn.cn/upload_files/no_pic.png?imageView2/2/w/280/h/280/q/75/format/webp);"></div>
        </div>
        <div class="pull-left desc">
          <p>Leon</p>
        </div>
      </div>
      <div class="order-related">
        <ul class="uc-order list-horizon clearfix js-order-overview">
          <li>
            <a class="link clearfix relative link-topay" data-for="topay" href="###" target="_blank">
              <p class="title-info c-black font-size-12">待付款</p>
            </a>
          </li>
          <li>
            <a class="link clearfix relative link-totuan" data-for="totuan" href="###" target="_blank">
              <p class="title-info c-black font-size-12">待接单</p>
            </a>
          </li>
          <li>
            <a class="link clearfix relative link-tosend" data-for="tosend" href="###" target="_blank">
              <p class="title-info c-black font-size-12">待发货</p>
            </a>
          </li>
          <li>
            <a class="link clearfix relative link-send" data-for="send" href="###" target="_blank">
              <p class="title-info c-black font-size-12">待收货</p>
            </a>
          </li>
          <li>
            <a class="link clearfix relative link-rights" href="###" target="_blank">
              <p class="title-info c-black font-size-12">退款/维权</p>
            </a>
          </li>
        </ul>
        <div class="block block-list list-vertical">
          <a class="block-item link clearfix ico-order" href="###" target="_blank">
            <p class="title-info c-black font-size-14">全部订单</p>
          </a>
        </div>
        <div class="block block-list list-vertical">
          <a class="block-item link clearfix ico-favior js-login" href="###" target="_blank">
            <p class="title-info c-black font-size-14">收藏的商品</p>
          </a>
          <a class="block-item link clearfix ico-shop js-login" href="https://maijia.youzan.com/mars/collect/shop" target="_blank">
            <p class="title-info c-black font-size-14">收藏的店铺</p>
          </a>
          <a class="block-item link clearfix ico-bought js-login" href="https://maijia.youzan.com/mars/record/bought" target="_blank">
            <p class="title-info c-black font-size-14">我买过的</p>
          </a>
          <a class="block-item link clearfix ico-history js-login" href="https://maijia.youzan.com/mars/record/goodsbrowse" target="_blank">
            <p class="title-info c-black font-size-14">我的浏览记录</p>
          </a>
        </div>
        <div class="block block-list list-vertical">
          <a class="block-item link clearfix ico-card" href="https://maijia.youzan.com/mars/record/MemberCard" target="_blank">
            <p class="title-info c-black font-size-14">我的会员卡</p>
          </a>
          <a class="block-item link clearfix ico-coupon" href="https://h5.youzan.com/v2/ump/promocard/crosssite?empty_redirect=yzapp" target="_blank">
            <p class="title-info c-black font-size-14">我的优惠券</p>
          </a>
          <a class="block-item link clearfix ico-luckymoney hide" href="https://h5.youzan.com/v2/trade/record/luckymoney?f_platform=yzapp" target="_blank">
            <p class="title-info c-black font-size-14">我的红包</p>
          </a>
          <a class="block-item link clearfix ico-backs" href="https://h5.youzan.com/v2/trade/record/backs?f_platform=yzapp" target="_blank">
            <p class="title-info c-black font-size-14">我的返现</p>
          </a>
        </div>
        <div class="block block-list list-vertical">
          <router-link class="block-item link clearfix ico-setting js-login" to="/address">
            <p class="title-info c-black font-size-14">收货地址管理</p>
          </router-link>
          <a class="block-item link clearfix ico-help" href="" target="_blank">
            <p class="title-info c-black font-size-14">联系客服</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @import './member.css';
  @import './member_base.css';
</style>
