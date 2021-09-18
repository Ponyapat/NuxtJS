<template>
    <div>
         
        <!--เรียกข้อมูลจากloadDataมาแสดง-->
        <PostList isAdmin :posts="loadData"/>
        

    </div>
</template>

<script>
import PostList from "@/components/posts/PostList"
import axios from 'axios'
export default {
    components:{
        PostList
    },
    data() { //ข้อมูลที่ต้องการแสดง
        return {
            loadData:[]
        }
    },
    asyncData(context){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                const data = axios.get("https://nuxt-demo-7a77c-default-rtdb.firebaseio.com/posts.json")
                .then(res=>{
                    const postData=[];
                    for(const key in res.data){
                        postData.push({...res.data[key],id:key})
                }
                 return {
                 loadData:postData
                 }
             })
             resolve(data)
                })
            },4000);
        
        // return axios.get("https://nuxt-demo-7a77c-default-rtdb.firebaseio.com/posts.json")
        // .then(res=>{
        //     //ดึงข้อมูลจาก firebaseมาใส่ใน array ตาม key ที่ต่างกัน
        //     const data = [];
        //     for(const key in res.data){
        //         data.push({...res.data[key],id:key})
        //     }
        //     return {
        //         loadData:data
        //     }
        // });
    }
    
}
</script>


// methods:{
        
    //     async postsAll(){
    //         console.log("click");
    //         await this.getData().then((result)=>{
    //             console.log(result);
    //         })
    //         console.log("load complete")
    //     },
    //     getData(){
    //         return new Promise((resolve,reject)=>{
    //             setTimeout(()=>{
    //                 const data = axios.get("https://nuxt-demo-7a77c-default-rtdb.firebaseio.com/post.json")
    //                 .then(res=>{
    //                     return res
    //                 })
    //                 resolve(data)
    //             },4000)
    //         })
    //     }
    // }