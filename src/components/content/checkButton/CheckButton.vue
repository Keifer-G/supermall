<template>
  <div class="check-button" :class="{check: ischeck}">
      <img src="~assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
    name:"CheckButton",
    props:{
        ischeck:{
            type:Boolean,
            default(){
                return false
            }
        }
    },

}
</script>

<style>
.check-button {
    border-radius: 50%;
    border: 2px solid #dddddd
}
.check{
    background-color: var(--color-tint);
    border-color: var(--color-tint);  
}
</style>