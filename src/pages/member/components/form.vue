<template>
  <div class="container " style="min-height: 597px;">
    <div class="section section-first">
      <div class="block form js-form">
        <input class="js-id" name="id" type="hidden" value="">
        <div class="block-item" style="border-top:0;">
          <label>收货人</label>
          <input type="text" placeholder="请输入姓名" name="user_name" v-model="name" maxlength="20">
        </div>
        <div class="block-item">
          <label>联系电话</label>
          <input type="tel" placeholder="联系电话" name="tel" v-model="tel" maxlength="11">
        </div>
        <div class="">
          <myaddress :ids="ids" @sendAddressValue="getAddressValue"></myaddress>
        </div>
        <div class="block-item">
          <label>详细地址</label>
          <input type="text" placeholder="街道门牌信息" name="address_detail" v-model="address" maxlength="100">
        </div>
      </div>
    </div>
    <div class="block section js-save block-control-btn">
      <div class="block-item c-blue center" @click="add">保存</div>
    </div>
    <div class="block section js-delete block-control-btn"
         @click="remove"
         v-show="type==='edit'">
      <div class="block-item c-red center">删除</div>
    </div>
    <div class="block stick-bottom-row center js-save-default "
         @click="setDefaultAddress"
         v-show="type==='edit'">
      <button class="btn btn-standard js-save-default-btn">设为默认收货地址</button>
    </div>
  </div>
  <!--<a style="display: block;" href="https://pfmarket.youzan.com/market/home?m_alias=3nu78u467kddj" class="ft-copyright"></a>-->
</template>
<script src="./form.js">
</script>
<style scoped>
  @import './address.css';
  @import './address_base.css';
</style>
