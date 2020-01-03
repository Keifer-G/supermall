<template>
  <div calss="homerecommend">
      <div class="home-wrapper">
      <div v-for="item in kidrecommend" :key="item.id" class="container">
          <a :href="item.link" >
              <img :src="item.image" alt="" class="image">
              <div class="blank"></div>
              <div class="font">{{item.title}}</div>
          </a>
      </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'HomeRecommend',
    props:{
        kidrecommend:{
            type:Array,
            default(){
            return[]
            }
        }
    }
}
</script>

<style>
.home-wrapper{
    width:100%;
    display:flex;
    height:126px;
}

.image{
    max-width: 70px;
    max-height: 70px;
    margin-left: 5px;
    flex: 1;
    margin-top: 10px
}
.blank{
    width: 80px;
    height:9px
}
.font{
    width: 80px;
    height: 14px;
    font-size: 12px;
    text-align: center;
}

</style>