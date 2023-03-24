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
        <button v-on:click="goBack" action="submit">Back</button>
</template>

<style scoped>
    button {
        align-self: baseline;
        font-size: 1.2em;
        background-color: unset;
        width: 100px;
        color: #41b883;
        height: 30px;
        border-radius: 30px;
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