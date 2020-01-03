<template>
  <div class="detai-nav">
      <nav-bar>
          <div slot="left"  class="detail-left" @click="backClick">
              <img src="~assets/img/common/back.svg" alt="">
          </div>
          <div slot="center" class="detail-center">
              <div v-for="(item,index) in titles" :key="item.id" 
              class="center-item"
              :class="{active:index===currentIndex}"
              @click="titlesItemClick(index)"
              >
                  {{item}}</div>
          </div>
      </nav-bar>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

export default {
    name:"DetailNav",
    components:{
        NavBar
    },
    data(){
        return {
            titles:['商品','参数','评论','推荐'],
            currentIndex:0
        }
    },
    methods:{
        titlesItemClick(index){
            this.currentIndex = index;
            this.$emit('titlesClick',index)
        },
        backClick(){
            this.$router.back();
        }
    },
    mounted(){
            

    }
}   
</script>

`<style>
.detail-center{
    display: flex;
}
.center-item{
    flex:1;
    font-size: 13px;
}
.active{
    color: var(--color-tint);
}
.detail-left{
    margin-top: 3px;
    margin-left: -3px;
}
</style>