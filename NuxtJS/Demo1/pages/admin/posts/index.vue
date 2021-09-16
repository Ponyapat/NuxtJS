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
            console.log("Start Load Data");
            await axios.get("https://nuxt-demo-7a77c-default-rtdb.firebaseio.com/post.json")
            .then(res=>{
                console.log(res);
            })
            console.log("Load Data Success");
        }
    }
}
</script>