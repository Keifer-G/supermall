<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service" />
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop" />
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select" />
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <b><div @click="addToCart" class="cart">加入购物车</div></b>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
    addToCart() {
      this.$emit("addToCart");
    }
  }
};
</script>

<style scoped>
.bottom-bar {
  height: 49px;
  position: fixed;
  background-color: #ffffff;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  text-align: center;
  z-index: 10;
}

.bar-item {
  height: 49px;
  flex: 1;
  display: flex;
}

.bar-item > div {
  flex: 1;
}

.bar-left .text {
  font-size: 13px;
}

.bar-left .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 5px auto 0;
  background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}

.bar-left .service {
  background-position: 0 -54px;
}

.bar-left .shop {
  background-position: 0 -98px;
}

.bar-right {
  height: 49px;
  font-size: 15px;
  color: #ffffff;
  line-height: 49px;
}

.bar-right .cart {
  background-color: #ffe817;
  color: #886f6f;
  font-size: 15px;
}

.bar-right .buy {
  background-color: #ff6699;
  font-size: 16px;
}
</style>
