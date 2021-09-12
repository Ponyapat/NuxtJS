<template>
   <div>
       <h1>Hello post page</h1>
    <b-container fluid>
        <Header/>
        <PostList />
        
    
    
    </b-container>
    
    
    
        
   </div>
</template>

<script>
import Header from '@/components/posts/Header'
import PostList from '@/components/posts/PostList'
export default {
    layout: "coreLayout",
    components:{
        Header,PostList
    }
}
</script>