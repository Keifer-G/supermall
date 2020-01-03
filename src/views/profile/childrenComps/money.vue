<template>
    <div class="money">
        <div class="surplus public-sur">
            <div class="public-block"><span class="public-num">0.00</span><span>元</span></div>
            <p>我的余额</p>
        </div>
        <div class="discount public-sur">
            <div class="public-block"><span class="public-num">0</span><span>个</span></div>
            <p>我的优惠</p>
        </div>
        <div class="integral public-sur">
            <div class="public-block"><span class="public-num">0</span><span>分</span></div>
            <p>我的积分</p>
        </div>                
    </div>
</template>

<script>
export default {
    name:"money"
}
</script>

<style>
.money{
    display: flex;
    border-bottom: 10px solid #eee;
}
.public-sur{
    flex: 1;
    width: 100px;
    height: 80px;
    font-size: 12px;
    text-align: center;
    border-left: 1px solid #eee;
    justify-content: center;
    flex-direction: column;
    display: flex;
    margin-top:-3px;
}
.surplus{
    border-left: none
}
.public-num{
    font-size: 22px;
    font-weight: 800;
    color:#ff5f3e;
    font-family:Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    padding-right: 5px
}
.public-block{
    
}
</style>