<template>
  <div class="scroll">
      <div class="scroll-content" >
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
    name:'Scroll',
    data(){
        return {
            scroll:null
        }
    },
    props:{
        probeType:{
            type:Number,
            default(){
                return 0
            }
        },
        pullUpLoad:{
            type:Boolean,
            default(){
                return false
            }
        }
    },
    mounted(){
        // 创建better-scroll对象
        this.scroll = new BScroll('.scroll',{
            click:true,
            probeType:this.probeType,
            pullUpLoad:this.pullUpLoad
        })

        // 监听滚动得位置
        if(this.probeType===2 || this.probeType===3){
            this.scroll.on('scroll',position=>{
                this.$emit('scroll',position)
             })
        }
        // 监听scroll滚到底部
        if(this.pullUpLoad){
            this.scroll.on('pullingUp',()=>{
                this.$emit('pullingUp')
            })
        }
        // 
    },
    methods:{
        scrollTo(x,y,time=300){
           this.scroll && this.scroll.scrollTo(x,y,time=300);
        },
        finishPullUp(){
            this.scroll && this.scroll.finishPullUp()
        },
        refresh(){
            this.scroll && this.scroll.refresh()
        },
        getScrollY(){
            return this.scroll ? this.scroll.y : 0
        }        
    }
}
</script>

<style>

</style>