import axios from 'axios'

const url = "http://106.54.54.237:8000/api/w1" || "http://123.207.32.32:8000/api/v2";

export function request(config){
        const instance = axios.create({
            baseURL:url,
            timeout:5000
        })


/*         axios.interceptors.request.use(config => {

        },err=>{
            
        })
    
        axios.interceptors.responsse.use(res=>{
            
        })
 */

        return instance(config) 
} 



