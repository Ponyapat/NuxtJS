<template>
    <div>
      <!--สร้างรูปภาพแบบเลื่อน-->
        <b-carousel id="slider" controls indicators>
            <div v-for="item in items" v-bind:key="item.id">
                <b-carousel-slide
                :caption=item.caption
                :text=item.text
                :img-src=item.image
              ></b-carousel-slide> 
            </div>
        </b-carousel>

    </div>
</template>

<script>
export default {
  data() {
    return {
      items : [
        {caption:"A",image:require("@/asset/images/p1.jpg"),text:"Nulla vitae elit libero, a pharetra augue mollis interdum."},
        {caption:"B",image:require("@/asset/images/p2.jpg"),text:"Nulla vitae elit libero, a pharetra augue mollis interdum."},
        {caption:"C",image:require("@/asset/images/p3.jpg"),text:"Nulla vitae elit libero, a pharetra augue mollis interdum."}

      ]
    }
  },
}
</script>