<script setup>
import {ref} from 'vue';
import OneNote from "../components/OneNote.vue"
import CreateForm from "../components/CreateForm.vue"
import CountPage from "../components/CountPage.vue"

let url = "http://mattmcm.fr:7754/notes";

let posts = ref([])
 fetch(url)
 .then((resp) => resp.json())
.then(function(data) {
  posts.value = data.notes;
})
</script>


<template>
  <CreateForm />

  <OneNote v-for="(post, index) in posts.slice(i, n).reverse()" :key="index"
  :title="post.title"
  :content="post.content"
  :id="post._id"
  :color="post.color"/>

  <CountPage/>
</template>
