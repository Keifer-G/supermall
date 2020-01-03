<template>
  <div class="tab-control">
      <div class="tabbcontrol">
      <div v-for="(item,index) in titles" :key='item.id' class="tabcontrol-item"
      :class="{active:index===currentIndex}" @click="itemClick(index)">
          <span>{{item}}</span>
      </div>
      </div>
  </div>
</template>

<script>
export default {
    name:'TabControl',
    props:{
        titles:{
            type:Array,
            default(){
                return []
            }
        }
    },
    data(){
        return{
            currentIndex:0
        }
    },
    methods:{
        itemClick(index){
            this.currentIndex=index;
            this.$emit('tabClick',index);
        }
    }
}
</script>

<style>
.tabbcontrol{
    display: flex;
    text-align: center;
    font-size: 15px;
    background-color: #ffffff;
    height: 40px;
    line-height: 40px;
}
.tabcontrol-item{
    flex:1;
}
.active{
    color: var(--color-high-text);
}
.tabcontrol-item span{
    padding: 5px;
}
.active span {
    border-bottom:3px solid var(--color-tint);    
}
</style>