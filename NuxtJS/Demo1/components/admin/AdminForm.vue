<template>
 <!-- Form กรอกข้อมูล -->
    <b-container fluid="md" class="py-2">
        <h2 align="center">เขียนบทความ</h2>
        <b-form @submit="onSumbit" @reset="onReset">
            <b-form-group label="ชื่อบทความ">
                <b-form-input type="text" placeholder="ระบุชื่อบทความ" v-model="form.name">
                </b-form-input>
            </b-form-group>

            <b-form-group label="รายละเอียดบทความ">
                <b-form-textarea 
                placeholder="รายละเอียดบทความ"
                row=8
                v-model="form.content"></b-form-textarea>
            </b-form-group>

            <b-form-group label="รูปภาาพ(url)">
                <b-form-input type="text" placeholder="ระบุชื่อรูปภาพบทความ" v-model="form.image">
                </b-form-input>
             </b-form-group>
            
            <b-form-group label="ผู้เขียน">
                <b-form-input type="text" placeholder="ระบุนามปากกา" v-model="form.author"></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">บันทึก</b-button>
            <b-button type="reset" variant="danger">ล้าง</b-button>
        </b-form>
        <!--แสดงผลลัพธ์การกรอก-->
        <b-card header="result">
            {{form}}
        </b-card>
    </b-container>
</template>

<script>
export default {
    data() { //รับค่า
       return {
           form:{
               title:"",
               content:"",
               image:"",
               author:""
           }
       }
    },
    methods:{ //การทำงาน
        onSumbit(event){
            event.preventDefault(); 
            this.$emit('sendData',this.form)
            //console.log(this.form);
        },
        onReset(event){
            event.preventDefault();
            this.form.title="",
            this.form.content="",
            this.form.image="",
            this.form.author=""
        }
    }
}
</script>