import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

// 安装插件
Vue.use(Vuex)

const state = {
    productList:[]
}
// 创建store对象
const store = new Vuex.Store({
    state,
    getters,
    mutations,
    actions,

})

export default store
