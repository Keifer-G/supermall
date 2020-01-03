<template>
  <div class="cart">
    <nav-bar class="cart-nav-bar">
      <div slot="center">
        购物车(
        <span>{{ cop }}</span>
        )
      </div>
    </nav-bar>
    
    <cart-list></cart-list>
    <cart-bottom-bar></cart-bottom-bar>

  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'
import CartList from './childrenComps/CartList'
import CartBottomBar from './childrenComps/CartBottomBar'

import { mapGetters } from 'vuex'


export default {
    name:'cart',
    data(){
      return {
      }
    },
    components:{
      CartList,
      NavBar,
      CartBottomBar
    },   
    computed:{
      /* ...mapGetters(['cop']) */
      cop(){
        return this.$store.state.productList.reduce((prev,item)=>{
          return prev + item.count
        },0)
      }
    },

}
</script>

<style>
.cart {
  height: 100vh;
}
.cart-nav-bar{
    color: white;
    background-color: var(--color-tint);
}
</style>