<template>
  <div class="register">

      <nav-bar class="regnav">
          <div slot="left" class="regback" @click="backClick"><img src="~assets/img/common/backwhite.svg" alt=""></div>
          <div slot="center"><span v-if="!postShow">登陆</span><span v-if="postShow">注册</span></div>
          <div slot="right" class="regright" @click="rightClick"><span v-if="!postShow">注册</span><span v-if="postShow">立即登陆</span></div>
    </nav-bar>
              
    <div class="reg-content">
        <div class="regcontent">
            <span>用户名：</span>
            <input id="username" type="text" class="reginp" placeholder="请输入用户名">
        </div>
        <div class="regcontent regcontent1">
            <span class="bcontext">密码：</span>
            <input id="password" type="text" class="reginp binp" placeholder="请输入密码">
        </div>
    </div>

    <div class="post reg-content" v-if="postShow">
        <div class="postcontent regcontent">
            <span>手机号：</span>
            <input id="phonenum" type="text" class="postinp reginp" placeholder="请输入手机号">
        </div>
        <div class="postcontent regcontent midpost">
            <span class="pcontext bcontext">QQ：</span>
            <input id="qq" type="text" class="postinp pinp reginp binp" placeholder="请输入QQ账号">
        </div>
        <div class="postcontent regcontent bottompost">
            <span class="pcontext bcontext">邮箱：</span>
            <input id="email" type="text" class="postinp pinp reginp binp" placeholder="请输入邮箱账号">
        </div>
    </div>




    <div class="regbtn" v-if="!postShow">
        <button type="button">登陆</button>
    </div>
    <div class="postbtn regbtn" v-if="postShow">
        <button type="button">立即注册</button>
    </div>

  </div>
</template>

<script>

import NavBar from 'components/common/navbar/NavBar'

export default {
    name:"register",
    components:{
        NavBar,
    },
    data(){
        return {
            postShow:false
        }
    },
    methods:{
        backClick(){
            this.$router.go(-1);
            this.postShow = false;
        },
        rightClick(){
            this.postShow = !this.postShow
        }
    },
}
</script>

<style scoped>
.regnav{
    width: 100%;
    background-color: var(--color-tint);
    color: #fff;
}
.regback{
    margin-top: 6px;
    margin-left: -10px;
}
.regright{
    font-size: 14px;
    margin-left: -5px;
}


.reginp{
    border-radius: 5px;
    width: 200px;
    height: 30px;
    border: 1px solid #ccc;
    outline-style: none;
}
.reginp::placeholder{
    color: #ccc;
    font-size: 12px;
    position: relative;
    left: 5px;;
    top: -1px;
}
.reginp:focus{
    border: 2px solid #ccc;
}
.reg-content{
    font-size: 14px;
}
.regcontent{
    margin-top: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.regcontent1{
    top: 14px;
    position: relative;
}
.bcontext{
    position: absolute;;
    left: 32px;
}
.binp{
    position: absolute;
    right: 32px;;
}

.post{
    position: relative;
    top:28px;
}
.midpost{
    position: relative;
    top: 14px;;
}
.bottompost{
    position: relative;
    top: 42px;
}

.regbtn{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 60px;
}
.regbtn button{
    width: 160px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--color-tint);
    opacity: .9;
    border-radius: 6px;
    box-shadow: 0 2px 0 #ccc;
    color: #fff;
    border:1px solid #eee;
    border-bottom: none;
    outline: none;
}

.postbtn{
    position: relative;
    top:52px;
}
</style>