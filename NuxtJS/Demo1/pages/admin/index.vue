<template>
    <div>
        <h1>Hello admin page</h1>
        <PostList/>
    </div>
</template>

<script>
import PostList from "@/components/posts/PostList"
export default {
    components:{
        PostList
    }
}
</script>