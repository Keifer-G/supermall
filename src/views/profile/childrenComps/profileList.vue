<template>
  <div class="profile-list">
      <div class="list-block-one">
            <div><img src="~assets/img/profile/message.svg" alt=""><div class="pub-text"><span>我的消息</span></div></div>
            <div><img src="~assets/img/profile/pointer.svg" alt=""><div class="pub-text"><span>积分商城</span></div></div>
            <div><img src="~assets/img/profile/vip.svg" alt=""><div class="pub-text"><span>会员卡</span></div></div>
      </div>
      <div class="list-block-two">
            <div><img src="~assets/img/profile/cart.svg" alt=""><div class="pub-text"><span>我的购物车</span></div></div>
            <div><img src="~assets/img/profile/download.svg" alt="" ><div class="pub-text"><span>下载购物APP</span></div></div>
      </div>
  </div>
</template>

<script>
export default {
    name:"profileList"
}
</script>

<style>
.profile-list img {
    width: 24px;
    height: 24px;
    position: relative;
    left: 16px;
    top: 8px;
}
.profile-list span {
    font-size: 12px;
}
.profile-list{
    line-height: 40px;
}
.list-block-one div{
    height: 40px;
    width: 100%;
    display: flex;
}
.list-block-two div{
    height: 40px;
    width: 100%;
    display: flex;
}
.list-block-one{
    border-bottom: 10px solid #eee;
}
.pub-text{
    border-bottom: 1px solid #eee;
    margin-left: 22px;

}
</style>