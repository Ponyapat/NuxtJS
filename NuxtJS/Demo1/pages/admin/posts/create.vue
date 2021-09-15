<template>
    <!--เรียนกใช้Form-->
    <AdminForm @sendData="onSubmitted"/> 
    
</template>

<script>
import AdminForm from '@/components/admin/AdminForm'
import axios from 'axios'
export default {
    components:{
        AdminForm
    },
    methods: {
        onSubmitted(postData) {
            //console.log("Result",postData)
            axios.post(
                "https://nuxt-demo-7a77c-default-rtdb.firebaseio.com/posts.json", 
                postData).then(
                    res=>{
                        console.log(res);
                    }
                )
        }
    }
}
</script>