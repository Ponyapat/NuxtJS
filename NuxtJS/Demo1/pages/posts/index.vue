<template>
   <div>
    <Header/>
    <PostContent/>
    <h1>Hello post page</h1>
    
        
   </div>
</template>

<script>
import Header from '@/components/posts/Header'
import PostContent from '@/components/posts/PostContent'
export default {
    layout: "coreLayout",
    components:{
        Header,PostContent
    }
}
</script>