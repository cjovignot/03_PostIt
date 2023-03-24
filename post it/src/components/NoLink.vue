<script setup>
import NotesButtons from "./NotesButtons.vue"
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
</script>

<template>
    <div class="details_solo">
      <h3>{{ title }}</h3>
        <li v-for="(element, index) in content" :key="index">{{ element }}</li>
    </div>
  <NotesButtons />
</template>


<style scoped>
.details_solo {
  display: flex;
  flex-direction: column;
  min-height: 280px;
  padding: 80px 50px;
  margin-top: 70px;
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
