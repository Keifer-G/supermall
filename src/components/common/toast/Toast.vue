<template>
  <div class="toast" v-show="toastShow">
      <div>{{message}}</div>
  </div>
</template>

<script>
export default {
    name:"Toast",
/*     props:{
        message:{
            type:String,
            default(){
                return ''
            }
        },
        toastShow:{
            type:Boolean,
            default(){
                return false
            }            
        } */
    data(){
        return {
            toastShow:false,
            message:''
        }
    },
    methods:{
        show(message,duration=1500){
            this.toastShow = true;
            this.message =  message;

            setTimeout(()=>{
                this.toastShow = false;
                this.message = '';
            },duration)
        }
    }
}

</script>

<style>
.toast{
    position: fixed;
    left: 50%;
    top: 50%;
    
    transform: translate(-50%,-50%);

    color:white;
    padding: 8px 5px;

    border-radius: 15%;

    text-align: center;

    background-color: rgba(0,0,0,.6);
}
</style>