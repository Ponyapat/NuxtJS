<template>
    <b-container fluid="md" class="py-2">
        <h2 align="center">เขียนบทความ</h2>
        <b-form>
            <b-form-group label="ชื่อบทความ">
                <b-form-input type="text" placeholder="ระบุชื่อบทความ">
                </b-form-input>
            </b-form-group>

            <b-form-group label="รายละเอียดบทความ">
                <b-form-textarea 
                placehoder="รายละเอียดบทความ"
                row=8></b-form-textarea>
            </b-form-group>

            <b-form-group label="รูปภาาพ(url)">
                <b-form-input type="text" placeholder="ระบุชื่อรูปภาพบทความ">
                </b-form-input>
             </b-form-group>
            
            <b-form-group label="ผู้เขียน">
                <b-form-input type="text" placeholder="ระบุนามปากกา"></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary">บันทึก</b-button>
            <b-button type="reset" variant="danger">ล้าง</b-button>
        </b-form>
    </b-container>
</template>