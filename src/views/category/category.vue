<template>
  <div class="category">
    <nav-bar class="category-bar">
      <div slot="center">商品分类</div>
    </nav-bar>

    <side-bar :side-list="SideList" class="sidebar" @cateItemClick="sideClick"/>

   <!--  <scroll  ref="rightscroll"> -->
     <iscroll class="subcate-scroll"  :options="{preventDefault: false}" ref="iscroll">  
      <cate-item :sub-list="subcategoryList"></cate-item>
      <tab-control :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
      <goods-list :goods="cataDetailList"></goods-list>
     </iscroll>

    <!-- </scroll> -->


  </div>
</template>

<script>
import {debounce} from 'common/utils'

import Iscroll from 'components/common/scroll/Iscroll'

import Scroll from 'components/common/scroll/Scroll'

import TabControl from 'components/common/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'

import SideBar from './childrenComps/SideBar'
import CateItem from './childrenComps/CateItem'

import {getCate , getSubcategory , getCategoryDetail} from 'network/category'

import NavBar from 'components/common/navbar/NavBar'

export default {
    name:'category',
    data(){
      return{
        SideList:[],
        dataList:[],
        subcategoryList:[],
        detailList:[],
        detailList1:[],
        currentType:'pop',
        currentIndex:0,
        cataDetailList:[],
        curMiniWallkey:"10062603",
        keyList:[],
        keyList2:[],
      }
    },
    components:{
      Scroll,      
      SideBar,
      NavBar,
      CateItem,
      TabControl,
      GoodsList,
      Iscroll
    },
    methods:{
      sideClick({ maitKey, miniWallkey, index }){
        // console.log(maitKey, miniWallkey);
        // 将miniWallkey动态添加到数组中,如果数据中包含当前的miniWallkey则证明数据请求过了
        this.curMiniWallkey = miniWallkey;
        this.currentIndex = index;
        if (
          this.keyList.includes(miniWallkey) &&
          this.keyList2.includes(maitKey)
        ) {
          this.subcategoryList = this.dataList[index];
          this.cataDetailList = this.detailList1[index][0].data;
        } else {
          this.keyList[index] = miniWallkey;
          this.keyList2[index] = maitKey;
          this.getCategoryDetail(miniWallkey, "pop", index);
          this.getCategoryDetail(miniWallkey, "new", index);
          this.getCategoryDetail(miniWallkey, "sell", index);
          this.getSubcategory(maitKey, index);
        }

      },
      getCate(){
        getCate().then(res=>{
          this.SideList = res.data.data.category.list;
          /* console.log(this.SideList); */
          if(this.SideList.length>0){
            this.getSubcategory(this.SideList[0].maitKey, 0);
            this.getCategoryDetail(this.SideList[0].miniWallkey, "pop", 0);
            this.getCategoryDetail(this.SideList[0].miniWallkey, "new", 0);
            this.getCategoryDetail(this.SideList[0].miniWallkey, "sell", 0);
            this.keyList.push(this.SideList[0].miniWallkey);
            this.keyList2.push(this.SideList[0].maitKey);
          }
        })
      },
      getSubcategory(key,index){
        getSubcategory(key).then(res=>{
          /* console.log(res.data.data.list);
          console.log(this.dataList); */
          
          this.dataList[index] = res.data.data.list;

          if (this.dataList.length > 1) {
            this.subcategoryList = this.dataList[index];
          } else {
            this.subcategoryList = this.dataList[0];
          }
          
          /* console.log(this.subcategoryList); */
          
        })
      },
      getCategoryDetail(key, type, index){
        this.detailList = [];
        getCategoryDetail(key,type).then(res=>{
          /* console.log(res); */
          this.detailList.push(res.data);
          this.detailList1[index] = this.detailList;
          if(this.detailList1.length>1){
            this.cataDetailList = this.detailList1[index][index]
          }else{
            this.cataDetailList = this.detailList1[0][0]
          }
         /*  console.log(this.cataDetailList); */
          
        })
      },
      tabClick(index){
       /*  console.log(this.currentIndex); */
        
        this.cataDetailList = this.detailList1[this.currentIndex][index];
        
      },


    },
    created(){
      this.getCate()
    },
    mounted(){
       setInterval(()=>{
         this.$refs.iscroll.refresh();
       },10000)
       
    }
}
</script>

<style>

.category-bar{
  color: white;
  background-color: var(--color-tint);
}

.subcate-scroll{
  overflow: hidden;
  position: fixed;
  left: 100px;
  right: 0px;
  top: 44px;
  bottom: 49px;
  touch-action: none; 
}
.category{
  height: 100%;
}
</style>