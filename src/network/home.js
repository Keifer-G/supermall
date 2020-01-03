import {request} from './request'

export function getHomeMultidata(){
    return request({
        url:'./home/multidata'
    })
}

export function getHomeGoods(type,page){
    return request({
        url:'./home/data',
        params:{
            type,
            page
        }
    })
}

 // 函数调用 -> 压入函数栈（保留函数调用过程种所有的变量）
 // 函数调用结束 -> 弹出函数栈（释放函数所有的变量）