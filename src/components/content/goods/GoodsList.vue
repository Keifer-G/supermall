<template>
  <div class="goodslist">
      <goods-item v-for="item in goods" :key="item.id" :goods-item-img="item" />
  </div>
</template>

<script>
import GoodsItem from './GoodsItem'

export default {
    name:'GoodsList',
    props:{
        goods:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        GoodsItem
    }
}
</script>

<style>
.goodslist{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    padding: 2px
}
</style>