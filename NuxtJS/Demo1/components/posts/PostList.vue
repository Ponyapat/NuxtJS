<template>
     <b-row class="py-2">
            <PostContent 
                id="1"
                title="ตัวอย่าง 1"
                content="I forgot about you I forgot about what you said I forgot about what you did I forgot about you" 
                image="https://cdn.pixabay.com/photo/2021/07/21/07/09/cygnet-6482420__340.jpg" 
                :isAdmin=isAdmin
            />
            <PostContent
               id="2"
               title="ตัวอย่าง 2"
                content="Oh, I know that there'll be better days Oh, that sunshine 'bout to come my way May we never ever shed another tear for today 'Cause oh, I know that there'll be better days"
                image="https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455__340.jpg"
                :isAdmin=isAdmin
            />
            <PostContent 
                id="3"
                title="ตัวอย่าง 3"
                content="Babayaga"
                image="https://cdn.pixabay.com/photo/2021/09/01/11/34/animal-6591125__340.jpg"
                :isAdmin=isAdmin
            />
            <PostContent
                id="4"
                title="ตัวอย่าง 4"
                content="New World"
                image="https://cdn.pixabay.com/photo/2021/09/07/08/30/ocean-6603265__340.jpg" 
                :isAdmin=isAdmin
            />
            <PostContent />
            <PostContent />
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
        }
    }

}
</script>