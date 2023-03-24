<script setup>
import {ref} from 'vue';
import NoLink from "../components/NoLink.vue"

let id = window.location.pathname.split('/')[2];
let url = "http://mattmcm.fr:7754/note/" + id;
let posts = ref([])
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    posts.value = data.note;
})
</script>

<template>
    <NoLink
    :title="posts.title"
    :content="posts.content"
    />
</template>