<template>
  <div class="cate-item">
    <div
      :key="index"
      class="cate-list"
      v-for="(item, index) in subList">
      <a :href="item.link"><img :src="item.image" alt="" /></a>
      <p>{{ item.title }}</p>
    </div>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

export default {
    name:"CateItem",
    props:{
        subList:{
            type:Array
        }
    },
    components:{
      Scroll
    }
}
</script>

<style>
.cate-item{
    width: 100%;
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.cate-list{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 66px;
    height: 100px;
}

.cate-list img {
  width: 55px;
  height: 55px;
  margin:7px;
}

.cate-list p {
  font-size: 12px;
}

</style>