<template>
  <div id="profile">
    <nav-bar class="profile-nav"><div slot="center"><span>我的商城</span></div></nav-bar>

    <login></login>
    <money></money>
    <profile-list></profile-list>
  </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar'

import login from './childrenComps/login'
import money from './childrenComps/money'
import profileList from './childrenComps/profileList'

export default {
    name:'profile',
    components:{
      NavBar,
      login,
      money,
      profileList
    }
}
</script>

<style>
.profile-nav{
  background-color: var(--color-tint);
  color: #fff;
}
</style>