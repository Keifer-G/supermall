<template>
  <div class="detail-swiper">
      <swiper  class="detail-swiper-item">
          <swiper-item v-for="item in topImgs" :key="item.id" >
              <img :src="item" alt="">
          </swiper-item>
      </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'

export default {
    name:'DetailSwiper',
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        topImgs:{
            type:Array,
            default(){
                return[]
            }
        }
    }

}
</script>

<style>
.detail-swiper-item{
    height: 300px;
    overflow: hidden;
}
</style>