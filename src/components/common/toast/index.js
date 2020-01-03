import Toast from './Toast'

const obj = {}

obj.install  = function (Vue){
  // 1. 创建组件构造器
  const toastConstruct = Vue.extend(Toast)

  // 2.用new方式，根据组件构造器，创建实例
  const toast = new toastConstruct()

  // 3.将toast挂在到某个元素上
  toast.$mount(document.createElement('div'))
  
  // 4.添加元素
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast 


}


export default obj