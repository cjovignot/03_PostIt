<script setup>
import {ref} from 'vue';

let url = "http://mattmcm.fr:7754/notes";
let posts = ref([])
let array = ref([]) 
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    posts.value = data.notes;
    let length = (posts.value).length;
    let nb_page = Math.ceil(length/9, 10);
    
    for (let i = 0; i < nb_page; i++) {
        array.value.push(i+1)
    }
    return array.value;
    
})
</script>

<template>
    <div class="pages">
        <div v-for="(element, index) in array" :key="index" class="one_page">
            <button v-bind:value=element action="submit">{{ element }}</button>
        </div>
    </div>
</template>

<style scoped>
.pages {
    display: flex;
    position: absolute;
    top: 515px;
}
.one_page {
    margin: 5px;
}
button {
    margin: 0 5px;
    font-size: 1.8em;
    font-family: Indie Flower;
    font-weight: bold;
    background-color: unset;
    width: 40px;
    color: black;
    height: 40px;
    border-radius: 40px;
    transition: 0.3s;
    cursor: pointer;
}
button:hover {
    border: 2px #41b883 solid;
    background-color: unset;
    transition: 0.3s;
    color: #41b883;
    }
</style>