<template>
  <div class="iscroll" ref="iscroll">
    <div>
      <slot></slot>
    </div> 
  </div>
</template>

<script>
import IScrollView from 'vue-iscroll-view'
import IScroll from 'iscroll'

export default {
  name:"Iscroll",
  data(){
    return {
      iscroll:null
    }
  },
  components:{
    IScrollView,
    IScroll
  },
  updated(){
    this.iscroll = new IScroll('.iscroll',{
      scrollbars:false,
      disableMouse:false,
      probeType:3
    })

  },
  methods:{
    refresh(){
      this.iscroll && this.iscroll.refresh()
    },
  },

}
</script>

<style>

</style>