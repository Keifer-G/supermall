<template>
  <div class="cart-bottom-bar">
      <div class="bottom-bar">
          <check-button class="bottomcheck" :ischeck="allcheck" @click.native="allClick"></check-button>
          <span class="bottomcheck-content">全选</span>
      </div>

      <div class="cart-bottom-price">
          合计:{{totalPrice}}
      </div>

      <div class="calculate" @click="accountClick">
          去结算({{checkList}})
      </div>
  </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton";

export default {
    name:"CartBottomBar",
    components:{
        CheckButton
    },
    computed:{
        totalPrice(){
            return '￥' + this.$store.state.productList.filter(item=>{
                return item.checked
            }).reduce((prevValue,curValue)=>{
                return prevValue + curValue.price*curValue.count
            },0).toFixed(2)
        },
        checkList(){
            return this.$store.state.productList.filter(item=>{
                return item.checked
            }).reduce((prevValue,curValue)=>{
                return prevValue + curValue.count
            },0)
        },
        allcheck(){
            if(this.$store.state.productList.filter(item=>{
                return item.checked
            }).length===this.$store.state.productList.length && this.$store.state.productList.length!==0){
                return true;
            }else if(this.$store.state.productList.length===0){
                return false
            }else{
                return false
            }

            // 还有一种find方法，只要找到一个不符合的就为false ，性能更好一点
        }
    },
    methods:{
        allClick(){

            if(this.allcheck){
                for(let item of this.$store.state.productList){
                    item.checked = false 
                }
            }else{
                for(let item of this.$store.state.productList){
                    item.checked = true
                }
            }

        },
        accountClick(){
            if(!this.$store.state.productList.length){
                this.$toast.show('请添加需要结算的商品')
            }
        }
    }
}
</script>

<style>
.cart-bottom-bar{
    position: relative;
    line-height: 40px;
    height: 40px;

    background-color:#eee;
    
    display: flex
}
.bottomcheck{
    width: 20px;
    height: 20px;  
    line-height: 20px;
}
.bottom-bar{
    display: flex;
/*     padding-top: 10px;
    height: 20px; */
    align-items: center
}
/* .bottomcheck-content{
    padding-top: 2px
} */
.cart-bottom-price{
    margin-left: 5px;
}
.calculate{
    position: absolute;
    right: 0;
    width: 80px;
    background-color: var(--color-tint);
    text-align: center;
    color:white
}
</style>