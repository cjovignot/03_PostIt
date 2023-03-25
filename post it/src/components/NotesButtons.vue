<script setup>
import BackButton from "../components/BackButton.vue"

let title = "";
let content = "";

function deletePost() {
    
    let id = window.location.pathname.split('/')[2];
    fetch('http://mattmcm.fr:7754/note/' + id, {
        method: 'DELETE',
        body: JSON.stringify({
            title: title,
            content: [content],
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(function (response) {
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    })
    .then(function (data) {
        console.log(data);
        window.location.href = '/';
    })
    .catch(function (error) {
        console.warn('Something went wrong.', error);
    })
}

let id = window.location.pathname.split('/')[2];
function goToEdit() {
    window.location.href = '/edit/'+id;
}
</script>

<template>
    <div class="button_div">
        <BackButton />
        <button v-on:click="goToEdit" action="submit">Edit</button>
        <button v-on:click="deletePost" action="submit" class="delete_btn">Delete</button>
    </div>
</template>

<style scoped>
    .button_div {
        display: flex;
        top: 190px;
        position: absolute;
        justify-content: space-between;
        flex-direction: row;
    }

    button {
        align-self: baseline;
        margin: 0 10px;
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
    .delete_btn {
        align-self: baseline;
        margin: 0 10px;
        font-size: 1.2em;
        background-color: unset;
        width: 100px;
        color: #41b883;
        height: 30px;
        border-radius: 30px;
        transition: 0.3s;
        cursor: pointer;
    }
    .delete_btn:hover {
        border: 2px #c24330 solid;
        background-color: unset;
        transition: 0.3s;
        color: #c24330;
    }

@media all and (max-device-width: 480px) {
    
}
</style>