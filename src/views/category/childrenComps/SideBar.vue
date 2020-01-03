<template>
  <div class="side-bar">
      <scroll class="cate-scroll" ref="scroll" >
            <div class="cate-title" :key="index"  v-for="(item,index) in sideList">
                <div class="cate-title-item" @click="cateItemClick(item,index)" ref="cateitem" :class="{activeitem:currentIndex===index}">
                    <div class="cate-choose" v-show="currentIndex===index"></div>
                    <span :class="{active:currentIndex===index}">{{item.title}}</span>
                </div>
            </div>
      </scroll>
  </div>
</template>

<script>
import Scroll from 'components/common/scroll/Scroll'

export default {
    name:"SideBar",
    data(){
        return{
            currentIndex:0,
        }
    },
    props:{
        sideList:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
        Scroll
    },
    methods:{
        cateItemClick(item,index){
            const obj = {
                maitKey: item.maitKey,
                miniWallkey: item.miniWallkey,
                index
      };
            this.currentIndex = index;
            this.$emit("cateItemClick",obj);
        }
    },
    mounted(){

    }
}
</script>

<style>

.side-bar{
    height: 100%;
}
.cate-scroll{
  overflow: hidden;
  
    position: fixed;
    left: 0;
    right: 220px;
    top: 44px;
    bottom: 49px;
    background-color: #f1f1f1;
 
    width: 100px;
}
.cate-title-item{
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-size: 12px;
    background-color: #f1f1f1;
}
.cate-choose{
    width: 3px;
    height: 40px;
    background-color: var(--color-tint);
    position: absolute;
    left: 0;
}
.active{
    color: #ff5777;
    font-weight: 800
}
.activeitem{
    background-color: #fff;
}
</style>