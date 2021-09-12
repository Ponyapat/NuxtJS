<template>
    <b-col md="2">
    <b-card
      :title=title
      :img-src=image
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
  >
    <b-card-text>
      {{content}}
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>
</b-col>
</template>

<script>
export default {
  props:{
    id:{
      type:String,
      required:false
    },
    title:{
      type:String,
      required:false
    },
    content:{
        type:String,
        required:false
    },
    image:{
      type:String,
      required:false
    }
  }
}
</script>