<script setup>

let title = "";
let content = "";

function createPost() {
    let array_content = content.split('\n');
    fetch('http://mattmcm.fr:7754/notes/', {
        method: 'POST',
        body: JSON.stringify({
            title: title,
            content: array_content
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(function (response) {
        console.log(content);
        // console.log([content])
        if (response.ok) {
            return response.json();
        }
        return Promise.reject(response);
    }).then(function (data) {
        console.log(data);
    window.location.href = '/';
    }).catch(function (error) {
        console.warn('Something went wrong.', error);
    })
}

</script>

<template>
    <div class="form">
        <div class="inputs">
            <h3 for="" class="label">Post-it Creation</h3>
            <input name="title" type="text" v-model="title" placeholder="Post-it Title">
            <textarea class="content" name="content" type="text" v-model="content" placeholder="Post-it Content"></textarea>
        </div>
        <button v-on:click="createPost" action="submit">Create</button>
    </div>
</template>

<style scoped>

.form {
    display: flex;
    background-color: white;
    min-width: 85%;
    align-items: center;
    min-height: 300px;
    justify-content: space-between;
    flex-direction: column;
    box-shadow: 5px 5px 7px rgba(31, 31, 31, 0.7);
    border: 2.4px #41b883 ridge;
    border-radius: 20px;
    margin: 0 0 100px 0;
}
.inputs {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.form input {
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-weight: 100;
    margin: 10px;
    background-color: unset;
    font-size: 1.2em;
    border: 1.7px #41b88333 solid;
    color: black;
    border-radius: 6px;
    width: 90%;
}
.form textarea {
    margin: 10px;
    font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-weight: 100;
    background-color: unset;
    font-size: 1.2em;
    border: 1.7px #41b88333 solid;
    color: black;
    border-radius: 6px;
    width: 90%;
    max-width: 90%;
    max-height: 88px;
    height: 154px;
}
.content {
    height: 50px;
}
    .form button {
        margin: 30px 0px 30px 0px;
        font-size: 1.2em;
        background-color: unset;
        width: 100px;
        color: #41b883;
        height: 30px;
        border-radius: 30px;
        transition: 0.3s;
        cursor: pointer;
    }
    .form button:hover {
        border: 2px #41b883 solid;
        background-color: unset;
        transition: 0.3s;
        color: #41b883;
    }
    h3 {
        font-size: 1.2em;
        padding: 10px 0;
        text-align: center;
        font-weight: bold;
        color: #41b883;
    }
</style>