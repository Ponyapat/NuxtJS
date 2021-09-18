import Vuex from "vuex"
import axios from "axios"

const createStore=()=>{
    return new Vuex.Store({
        state:{
            // ข้อมูล
            loadData:[]
        },
        // จัดการข้อมูลใน state
        mutations:{
            setPostState(state,posts){
                state.loadData=posts
            }
        },
        // ทำงานกับ BackEnd
        actions:{
            nuxtServerInit(vuexContext,context){
                return axios.get("https://nuxt-demo-7a77c-default-rtdb.firebaseio.com/posts.json")
                    .then(res=>{
                    const data = [];
                    for(const key in res.data){
                        data.push({...res.data[key],id:key})
                  }
                  vuexContext.commit("setPostState",data)
              }).catch(e=>context.error(e)); //เช็ค error 
             }
        },
        // นำ state มาใช้
        getters:{
            getAllPosts(state){
                return state.loadData
            }
        }
    });
};

export default createStore