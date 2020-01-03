<template>
  <div class="goods-item" @click="goodsClick">
      <img v-lazy="showImg" alt="" class="item-img" @load="loadImg">
      <div class="content">
          <p>{{goodsItemImg.title}}</p>
          <span class="price">{{goodsItemImg.price}}</span>
          <span class="collect">{{goodsItemImg.cfav}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:"GoodsItem",
    props:{
        goodsItemImg:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    computed:{
        showImg() {
            if(this.goodsItemImg.image){
                return this.goodsItemImg.image
            }else if(this.goodsItemImg.img){
                return this.goodsItemImg.img
            }else if(this.goodsItemImg.show.img){
                return this.goodsItemImg.show.img
            }
            
        }
    },
    methods:{
        loadImg(){           
                this.$bus.$emit('itemLoadImg')
        },
        goodsClick(){
            this.$router.push('/detail/'+this.goodsItemImg.iid)
        }
    }
}
</script>

<style>
.goods-item{
    width:48%;
    position: relative;
    padding-bottom: 40px
}
.item-img{
    width:100%;
    border-radius:5px;
}
.content{
    font-size: 12px;
    text-align: center;
    position: absolute;
    bottom:5px;   
    left: 0;
    right: 0;
    overflow: hidden;
}
.content p{
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    margin-bottom: 3px;
}
.price{
    color: var(--color-tint);
    margin-right: 20px;
}
.collect{
    position: relative;
}
</style>