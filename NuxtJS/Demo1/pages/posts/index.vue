<template>
   <div>
       <h1>Hello post page</h1>
    <b-container fluid>
        <Header/>
        <b-row class="py-3">
            <PostContent/>
            <PostContent/>
            <PostContent/>
        </b-row>
    
    
    </b-container>
    
    
    
        
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