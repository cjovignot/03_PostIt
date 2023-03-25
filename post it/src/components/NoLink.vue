<script setup>
import {ref} from 'vue';
import NotesButtons from "./NotesButtons.vue"
import BackButton from "./BackButton.vue"
defineProps({
  title: {
    type: String,
    required: true
  },
  content: {
    type: Array,
    required: true
  },
  id: {
    type: String,
    required: true
  }
})






let id = window.location.pathname.split('/')[2];
let url = "http://mattmcm.fr:7754/note/" + id;
let posts = ref([])
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
    posts.value = data.note;
})

function editPost() {
    let array_content = posts.value.content.split('\n');
    fetch('http://mattmcm.fr:7754/note/' + id, {
        method: 'PUT',
        body: JSON.stringify({
            title: posts.value.title,
            content: array_content,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(function (response) {
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








let title = "";
let content = "";

function deletePost() {
    if (confirm("Are you sure to delete ?") == true) {
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
}
</script>

<template>
  <div class="page">
    <BackButton />
    <div class="details_solo">
      <!-- <h3>{{ title }}</h3> -->

        <input id="title" name="title" type="text" v-model="posts.title">

        <textarea id="content" name="content" type="text" v-model="posts.content"></textarea>

        <!-- <li v-for="(element, index) in content" :key="index">{{ element }}</li> -->
        <div class="div_buttons">
          <button id="delete_btn" v-on:click="deletePost" action="submit" class="delete_btn"></button>
          <button id="edit_btn" v-on:click="editPost" action="submit"></button>
        </div>
    </div>
  </div>
  <!-- <NotesButtons /> -->
</template>



<style scoped>
.page {
  display: flex;
  flex-direction: column;
}
#title {
  background-color: transparent;
  rotate: -3deg;
  text-align: center;
  width: 285px;
  margin-top: -40px;
  border-radius: 7px;
  margin-bottom: 10px;
  margin-left: -20px;
  height: 50px;
  border: 0;
  font-size: 2em;
  font-weight: bold;
  font-family: Indie flower;
}
textarea {
  background-color: transparent;
  rotate: -3deg;
  border: 0;
  font-family: Indie flower;
  font-size: 1.4em;
  border-radius: 7px;
  height: 207px;
  width: 275px;
  min-width: 285px;
  max-width: 285px;
  margin-left: -20px;
}

.div_buttons {
  display: flex;
  margin-top: 20px;
  margin-bottom: -10px;
  width: 265px;
  justify-content: space-between;
  rotate: -3deg;
}
#edit_btn {
    background-image: url(../public/check-mark.png);
    border: none;
    height: 40px;
    width: 40px;
    background-size: 100%;
    background-color: transparent;
    transition: 0.3s;
}
#edit_btn:hover {
  transform: scale(1.15);
  transition: 0.3s;

}
#edit_btn:active {
  transform: scale(1);
  transition: 0.3s;

}
#delete_btn {
  background-image: url(../public/garbage.png);
  border: none;
  height: 40px;
  width: 40px;
  background-size: 100%;
  background-color: transparent;
  transition: 0.3s;
}
#delete_btn:hover {
  transform: scale(1.15);
  transition: 0.3s;

}
#delete_btn:active {
  transform: scale(1);
  transition: 0.3s;

}



.details_solo {
  display: flex;
  flex-direction: column;
  min-height: 280px;
  padding: 80px 50px;
  margin-top: 40px;
  margin-left: 25px;
  background-image: url(../public/notes/green_note.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  max-width: 600px;
  min-width: 400px;
  text-align: center;
  height: fit-content;
}
.details_solo li {
  text-align: justify;
  font-family: Indie Flower;
  font-weight: 400;
  max-width: 83%;
  font-size: 1.3em;
  rotate: -2.6deg;
  color: black;
}

h3 {
  font-size: 1.8rem;
  rotate: -2.6deg;
  width: 83%;
  text-align: center;
  font-family: indie flower;
  font-weight: bold;
  margin-bottom: 0.4rem;
  color: #3f4347;
  margin-bottom: 20px;
  margin-top: -40px;
}

@media all and (max-device-width: 480px) {
  .item {
    max-width: 400px;
  }
}
</style>
