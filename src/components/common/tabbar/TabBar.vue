<template>
    <div id="tab-bar">
          <slot></slot>
    </div>
</template>

<script>
export default {
    name:'TabBar'
}
</script>

<style>
#tab-bar{
  display: flex;
  background-color: #f0f0f0;
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  box-shadow: 0px -2px 1px rgba(100, 100, 100, .1)
}
</style>