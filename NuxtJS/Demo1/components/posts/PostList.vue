<template>
        <!--สร้างการ์ดcontent แบบ for loop-->
     <b-row class="py-2">
            <PostContent  v-for="post in posts" v-bind:key="post.id"
            :id="post.id"
            :title="post.title"
            :content="post.content"
            :image="post.image"
            :isAdmin="isAdmin"
             />
            
        </b-row>
</template>

<script>
import PostContent from "@/components/posts/PostContent"
export default {
    components:{
        PostContent
    },
    props:{
        isAdmin:{
            type:Boolean,
            default:false
        },
        posts:{
        type:Array, //เก็บข้อมูลแบบ Array
        required:true
    }
    }
    

}
</script>