<template>
  <div class="detail">

      <detail-nav ref="nav"  @titlesClick="titlesClick"/>

      <scroll 
      :probe-type="3"
      class="detail-scroll"
      :pull-up-load="true"
      ref="scroll"
      @scroll="probeScroll"
      >
      <detail-swiper :top-imgs="topImages"></detail-swiper>
      <detail-base-info :goods="detailGoods"></detail-base-info>
      <detail-shop-info :shop="detailShop"></detail-shop-info>
      <detail-images-info :images-info="detailInfo" @imgLoad="imageLoad" ></detail-images-info>
      <detail-param-info :param-info="detailParam" ref="param" ></detail-param-info>
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>

      <goods-list :goods="recommend" ref="recommend"></goods-list>

      </scroll>

        
      <back-top @click.native="backClick" v-show="backShow"></back-top>

      <detail-bottom-bar @addToCart="addToCart"></detail-bottom-bar>

      <toast :message="toastMessage" :toast-show="toastShow" id="toast"/>
        
  </div>
</template>

<script>
import {debounce} from 'common/utils'
import {itemLisenerMixin} from 'common/mixin'

import BackTop from 'components/content/backtop/BackTop'

import Scroll from 'components/common/scroll/Scroll'
import Toast from 'components/common/toast/Toast'

import GoodsList from 'components/content/goods/GoodsList' 

import DetailNav from './childrenComps/DetailNav'
import {getDetail,Goods,Shop,GoodsParams,getRecommend} from 'network/detail'
import DetailSwiper from './childrenComps/DetailSwiper'
import DetailBaseInfo from './childrenComps/DetailBaseInfo'
import DetailShopInfo from './childrenComps/DetailShopInfo'
import DetailImagesInfo from './childrenComps/DetailImagesInfo'
import DetailParamInfo from './childrenComps/DetailParamInfo'
import DetailCommentInfo from './childrenComps/DetailCommentInfo'
import DetailBottomBar from './childrenComps/DetailBottomBar'


export default {
    name:"Detail",
    data(){
        return{
            iid:null,
            topImages:null,
            detailGoods:{},
            detailShop:{},
            detailInfo:{},
            detailParam:{},
            commentInfo:{},
            recommend:[],
            backShow:false,
            titlesY:[-0],
            getTitlesY:null,
            currentIndex:0,
            toastMessage:'',
            toastShow:false

        }    
    },
    components:{
        DetailNav,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scroll,
        DetailImagesInfo,
        DetailParamInfo,
        DetailCommentInfo,
        GoodsList,
        BackTop,
        DetailBottomBar,
        Toast
    },
    mixins:[itemLisenerMixin],
    created(){
        // 保存传入的iid
        this.iid = this.$route.params.iid

        // 根据iid请求详情数据
        getDetail(this.iid).then(res=>{          
            let data = res.data.result
            // 1.获取顶部轮播图          
            this.topImages = data.itemInfo.topImages
            // 2. 获取商品信息 
            this.detailGoods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
            // 3.创建店铺信息的对象
            this.detailShop = new Shop(data.shopInfo)
            // 4.保存商品的详情数据
            this.detailInfo = data.detailInfo            
            // 5.获取参数信息
            this.detailParam = new GoodsParams(data.itemParams.info,data.itemParams.rule)
            // 6.获取评论信息
            // 判断是否有评论
            if(data.rate.cRate!==0){
                this.commentInfo = data.rate.list[0]
            }


// 这里值不对的原因是$nextTick完成图片没有计算在内
/*         this.$nextTick(()=>{
        let paramT = -this.$refs.param.$el.offsetTop;
        let commentT = -this.$refs.comment.$el.offsetTop;
        let recommendT = -this.$refs.recommend.$el.offsetTop;

        this.titlesY.push(paramT,commentT,recommendT);
        console.log(this.titlesY);
        }) */


        })

        // 请求推荐数据
        getRecommend().then(res=>{
            this.recommend = res.data.data.list;            
        })


        // 给grtTitlesY赋值(对赋值的操作进行防抖)
        this.getTitlesY = debounce(()=>{
            let paramT = -this.$refs.param.$el.offsetTop;
            let commentT = -this.$refs.comment.$el.offsetTop;
            let recommendT = -this.$refs.recommend.$el.offsetTop;
            /* let maxT = -Number.MAX_VALUE; */

            this.titlesY.push(paramT,commentT,recommendT);
            
        },100)
    },
    mounted(){     

    },
    destroyed(){
        // 因为没有再keep-alive里没有缓存，所以不在deactiove中使用
        this.$bus.$off('itemLoadImg',this.itemLisener)
    },
    methods:{
        imageLoad(){
            this.$refs.scroll.refresh()

            this.getTitlesY()
            },
        backClick(){
                this.$refs.scroll.scrollTo(0,0)
        },
        probeScroll(position){
            if(position.y<=-2000){
                this.backShow=true
            }
            if(position.y>-2000){
                this.backShow=false
            }

            
            let length = this.titlesY.length;
            for(let i=0;i<length;i++){
                if(this.currentIndex!==i && ((i<length-1 && position.y<=this.titlesY[i] && position.y>this.titlesY[i+1]) || (i===length-1 && position.y<=this.titlesY[i]))){
                     this.currentIndex = i;
                     this.$refs.nav.currentIndex = this.currentIndex;                 
                }
            }

            // 另一种思路 利用Number.Max_Vue来创造一个最大值
            /* for(let i=0;i<length-1;i++){
                if(this.currentIndex!==i && (position.y<=this.titlesY[i] && position.y>this.titlesY[i+1])){
                     this.currentIndex = i;
                     this.$refs.nav.currentIndex = this.currentIndex;                 
                }
            }  */   
        },
        titlesClick(index){
            this.$refs.scroll.scrollTo(0,this.titlesY[index],100)
        },
        addToCart(){
            // 1.获取需要展示的信息
            const product = {}
            product.title = this.detailGoods.title
            product.image = this.topImages[0]
            product.desc = this.detailGoods.desc
            product.price = this.detailGoods.nowPrice
            product.iid = this.iid

            // 2.将信息传入vuex
            this.$store.dispatch('addCart',product).then(res=>{
              this.$toast.show(res)  
              
            })


        }

    }
}
</script>

<style>
.detail-scroll{
    overflow: hidden;

    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
}
</style>