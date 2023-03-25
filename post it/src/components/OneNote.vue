<script setup>
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
  },
  color: {
    type: String,
    required: false
  }
})
</script>

<template>
  <a :href="'http://localhost:5173/onepost/'+id" class="item">
      <h3>{{ title }}</h3>
      <div class="content" v-for="(element, index) in content" :key="index">
        <li>{{ element }}</li>
      </div>
  </a>
</template>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  min-height: 324px;
  padding-top: 30px;
  min-width: 310px;
  margin: 10px;
  max-height: 300px;
  background-repeat: no-repeat;
  transform: rotate(-4deg);
  background-image: url(../public/notes/green_note.png);
  background-size: 95% 95%;
  transition: 0.3s;
}
.item:nth-child(even) {
  transform: rotate(2deg);
  background-image: url(../public/notes/blue_note.png);
} 
.item:nth-child(3n) {
  transform: rotate(10deg);
  background-image: url(../public/notes/rose_note.png);
}
.item:nth-child(4n) {
  transform: rotate(-8deg);
  background-image: url(../public/notes/pink_note.png);
}
.item:nth-child(5n) {
  transform: rotate(9deg);
  background-image: url(../public/notes/yellow_note.png);
}
.item:nth-child(11n) {
  transform: rotate(9deg);
  background-image: url(../public/notes/purple_note.png);
}
.item:hover {
  transform: scale(1.05);
  transition: 0.3s;
}
.item:active {
  transform: scale(0.95);
}
.content {
  max-width: 270px;
}

li {
  -webkit-box-orient: vertical;
  max-width: 244px;
  padding: 10px 10px 0px 30px;
  font-family: indie Flower;
  rotate: -2.6deg;
  font-size: 1.3em;
  text-align: justify;
  max-height: 160px;
  -webkit-line-clamp: 4;
  color: black;
  text-overflow: ellipsis;
  display: -webkit-box;
  overflow: hidden;
}

h3 {
  font-size: 1.1rem;
  text-align: center;
  rotate: -2.6deg;
  font-family: 'Indie Flower';
  max-width: 262px;
  margin-bottom: 0.4rem;
  color: #3f4347;
  max-height: 42px;
  text-overflow: ellipsis;
  overflow: hidden;
  -webkit-line-clamp: 1;
  font-weight: bold;
}
  
@media all and (max-device-width: 480px) {
  .item {
    margin-left: 40px;
  }
}
</style>
