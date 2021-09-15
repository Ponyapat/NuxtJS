<template>
    <div>
        
        <h1>Hello admin page</h1>
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
    method:{
        postsAll(){
            axios.get("https://nuxt-demo-7a77c-default-rtdb.firebaseio.com/posts.json")
            .then(res=>{
                console.log(res);
            })
        }
    }
}
</script>