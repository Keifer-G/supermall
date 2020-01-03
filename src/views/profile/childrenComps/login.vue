<template>
  <div class="login">
      <div class="loginbc">
          <div class="user-img">
              <img src="~assets/img/profile/avatar.svg" alt="">
          </div>
          <div class="register" @click="routerClick">
              <p>登陆/注册</p>
              <div>
                <img src="~assets/img/profile/phone.svg" alt="">
                <span>暂未绑定手机号</span>
              </div>
          </div>
          <div class="proright">
              <img src="~assets/img/common/arrow-left.svg" alt="">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"login",
    methods:{
        routerClick(){
            this.$router.push('/register')
        }
    }
}
</script>

<style scoped>
.login{
    width: 100%;
    height: 90px;
    background-color: var(--color-tint); 
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 20px;
}
.loginbc{
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
}

.user-img img{
    width:60px;
    height: 60px;
}
.user-img{
    justify-content: center
}
.register p{
    font-size: 15px;
}
.register{
    width: 100px;
    margin-left: 10px;
}
.register img {
    position: relative;
    top: 4px;
    width: 16px;
    height: 16px;
    left: -2px;
}
.register span{
    font-size: 12px
}
.proright img {
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    
    margin-left: 95px;
     
}
</style>