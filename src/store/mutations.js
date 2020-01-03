export default {
            //mutations里的事情尽量单一
        //mutations唯一目的就是更太state中的状态
        addCounter(state,payload){
            payload.count ++ ;  
            console.log(state.productList.length);
            
        },
        addToCart(state,payload){
            payload.checked=false;
            payload.count = 1 ; 
            state.productList.push(payload)
        }
}