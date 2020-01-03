<template>
  <swiper>
    <swiper-item v-for="item in kidbanners" :key="item.id">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'

  export default {
    name: "HomeSwiper",
    props: {
      kidbanners: {
        type: Array,
        default() {
          return []
        }
      }
    },
    data(){
      return {
        isLoad:false
      }
    },
    components: {
      Swiper,
      SwiperItem
    },
    methods:{
      swiperLoad(){
        if(!this.isLoad){
          this.$emit('swiperImgLoad')
          this.isLoad=true
        }
      }
    }
  }
</script>

<style scoped>

</style>
