<template>
    <div>
         
        <!--เรียกข้อมูลจากloadDataมาแสดง-->
        <PostList isAdmin :posts="loadData"/>
        <b-button @click="postsAll">Load...</b-button>

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
    methods:{
        
        async postsAll(){
            console.log("click");
            await this.getData().then((result)=>{
                console.log(result);
            })
            console.log("load complete")
        },
        getData(){
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    const data = axios.get("https://nuxt-demo-7a77c-default-rtdb.firebaseio.com/post.json")
                    .then(res=>{
                        return res
                    })
                    resolve(data)
                },4000)
            })
        }
    }
}
</script>