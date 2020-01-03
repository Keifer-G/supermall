<template>
        <div class="tab-bar-i" @click="barClick">
            <div v-if="!isActive"><slot name="item-icon"></slot></div>
            <div v-else><slot name="item-icon-active"></slot></div>
            <div :style="activeStyle"><slot name="item-text"></slot></div>
        </div>
</template>

<script>
export default {
    name:'TabBarItem',
    props:{
        path:String,
        activeColor:{
            type:String,
            default:'var(--color-tint)'
        }
    },
    data(){
        return{
            //
        }
    },
    computed:{
        isActive(){
            return this.$route.path.indexOf(this.path)!==-1;
        },
        activeStyle(){
            return this.isActive ? {color:this.activeColor}:{}
        }
    },
    methods:{
        barClick(){
            this.$router.push(this.path);
        }
    }
}
</script>

<style>
.tab-bar-i{
  flex:1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tab-bar-i img{
    widows: 24px;
    height: 24px;
    margin-top: 2px;
    vertical-align: middle;
}
</style>