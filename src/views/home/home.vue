<template>
  <div id="home">
    <nav-bar class="homeNav"><div slot="center"><span>购物街</span></div></nav-bar>

      <tab-control :titles="['流行','新款','精选']" id="tabstickycopy" @tabClick="tabClick" v-show="tabShow" ref="topTabControl"/>

    <scroll 
    class="wrapper-scroll" 
    ref="scroll" 
    :probe-type="3" 
    @scroll="probeScroll" 
    :pull-up-load="true"
    @pullingUp="loadMore"
   >
        <home-swiper :kidbanners="banners" @swiperImgLoad="swiperImgLoad"></home-swiper>
        <home-recommend :kidrecommend="recommend"></home-recommend>
        <home-future></home-future>

        <tab-control :titles="['流行','新款','精选']" id="tabsticky" @tabClick="tabClick" ref="tabcontrol"/>

        <goods-list :goods="goods[currentType].list"/>
    </scroll>
    
    <back-top @click.native="backClick" v-show="backShow" />
  </div>
</template>

<script>
import {itemLisenerMixin} from 'common/mixin'

import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/common/tabControl/TabControl'

import GoodsList from 'components/content/goods/GoodsList'
import BackTop from 'components/content/backtop/BackTop'

import {getHomeMultidata,getHomeGoods} from 'network/home'

import HomeSwiper from './childrenComps/HomeSwiper'
import HomeRecommend from './childrenComps/HomeRecommend'
import HomeFuture from './childrenComps/HomeFuture'

import Scroll from 'components/common/scroll/Scroll'

export default {
    name:'home',
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommend,
      HomeFuture,
      TabControl,
      GoodsList,
      Scroll,
      BackTop
    },
    data(){
      return {
        banners:[],
        recommend:[],
        goods:{
          'pop':{page:0,list:[]},
          'new':{page:0,list:[]},
          'sell':{page:0,list:[]}
        },
        currentType:'pop',
        backShow:false,
        saveY:0,
        saveMarT:null,
        tabOffsetTop:600,
        curPosition:0
      }
    },
    mixins:[itemLisenerMixin],
    created(){
      // 1.请求多个数据
      this.getHomeMultiData(),
      // 2.请求商品数据
      this.getHomeGoodsData('pop')
      this.getHomeGoodsData('new')
      this.getHomeGoodsData('sell')

    },
    computed: {
      tabShow() {
        return this.curPosition <= -this.tabOffsetTop
      }
    },
    activated(){
      const refresh = this.debounce(this.$refs.scroll.refresh,100)
      this.$bus.$on('itemLoadImg',this.itemLisener)
      this.$refs.scroll.scrollTo(0,this.saveY,0)
      this.$refs.scroll.refresh()
    },
    deactivated(){
      this.saveY=this.$refs.scroll.getScrollY();
      
      // 将监听item图片的方法移除
      this.$bus.$off('itemLoadImg',this.itemLisener)
    },
    mounted(){
      
    },
    methods:{
      // 网络请求相关
      getHomeMultiData(){
        getHomeMultidata().then(res=>{
          this.banners=res.data.data.banner.list;
          this.recommend=res.data.data.recommend.list;
          console.log(this.recommend);
          
       })
      },
      getHomeGoodsData(type){
         const page = this.goods[type].page+1;
         getHomeGoods(type,page).then(res=>{
         this.goods[type].list.push(...res.data.data.list);
         this.goods[type].page+=1;

        console.log(this.goods['pop'].list);
        
        // 完成一页的加载后，实现继续加载
        this.$refs.scroll.finishPullUp()
       })
      },
      
      //  事件监听相关
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType='pop'
            break;
          case 1:
            this.currentType='new'
            break;
          case 2:
            this.currentType='sell'
            break;
        }

        this.$refs.topTabControl.currentIndex=index
      },
      backClick(){
        this.$refs.scroll.scrollTo(0,0);
      },
      probeScroll(position){
        this.curPosition = position? position.y : 0 

        this.backShow = position.y < -1000;
    
      },
      loadMore(){
        this.getHomeGoodsData(this.currentType);
      },
      debounce(func,delay){
        let timer = null;
        
        return function(...args){
          if(timer){
            clearTimeout(timer)
          }
          
          timer = setTimeout(()=>{
            func.apply(this,args)
          },delay)
        }
      },
      swiperImgLoad(){
        // 获取tabbar的距离父级高度
        // 所有的组件都有一个属性$el：用于获取组件中的元素
        this.tabOffsetTop = this.$refs.tabcontrol.$el.offsetTop        
      }
    }
}
</script>

<style scoped>
.homeNav{
  background-color: var(--color-tint);
  color:white;
/*   position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 100; */
}

.wrapper-scroll{
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
/*   height: calc(100vh - 93px);
  overflow: hidden; */
}
#tabstickycopy{
  position: relative; 
  z-index: 50;
}
  #home {
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }
</style>