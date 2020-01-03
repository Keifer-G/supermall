<template>
  <div class="cart-list">
    <scroll class="cart-scroll" ref="scroll">
    <cart-list-item v-for="(item,index) in list" :key="index" :item-info="item">
    </cart-list-item>
    </scroll>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

import CartListItem from './CartListItem'

import Scroll from 'components/common/scroll/Scroll'

export default {
    name:"CartList",
    computed:{
      ...mapGetters(['list'])
    },
    components:{
      Scroll,
      CartListItem
    },
     activated(){
      this.$refs.scroll.refresh()
    }

}
</script>

<style>
.cart-scroll{
    height: 100%;
    overflow: hidden;
}

.cart-list {
  height: calc(100% - 44px - 49px - 40px);
}

</style>