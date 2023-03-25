<script setup>
function goBack() {
    let id = window.location.pathname.split('/')[2];
    let path = window.location.pathname.split('/')[1];
    if (path == "edit" && id == window.location.pathname.split('/')[2]) {
        window.location.href = "/onepost/" + id;
    }
    if (path == "onepost" && id == window.location.pathname.split('/')[2]) {
        window.location.href = "../";
    }
}
</script>

<template>
        <button v-on:click="goBack" action="submit"></button>
</template>

<style scoped>
    button {
        font-size: 1.2em;
        background-color: unset;
        width: 40px;
        margin: auto;
        height: 40px;
        color: #41b883;
        background-size: 100%;
        border: 0;
        transition: 0.3s;
        cursor: pointer;
        background-image: url(../public/home.png);
    }
    button:hover {
        transition: 0.3s;
        transform: scale(1.15);
    }
</style>