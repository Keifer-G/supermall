import { resolve, reject } from "q";

export default{
    addCart(context, payload){
        /* let oldProduct= null;
        for(let i of state.productList){
            if(i.iid === payload.iid){
                oldProduct = i
            }
        } */
        return new Promise((resolve,reject)=>{
        let oldProduct = context.state.productList.find(item => {return item.iid === payload.iid})
        
        if(oldProduct){
            /* oldProduct.count +=1 */
            context.commit('addCounter',oldProduct)
            resolve('当前商品数量+1')
            
        }else{
            /* context.state.productList.push(payload); */
            context.commit('addToCart',payload)
            resolve('添加商品成功')
        }
        })
        

    }
}