import {debounce} from 'common/utils'

export const itemLisenerMixin = {
    data(){
        return{
            itemLisener:null
        }
    },
    mounted(){

        const refresh = debounce(this.$refs.scroll.refresh,100)
  
        this.itemLisener = ()=>{refresh()}
        //监听item图片加载完成
        this.$bus.$on('itemLoadImg',this.itemLisener)
  
      }
}