<script setup>
import { RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <a href="/" class="logo"></a>

    <div class="wrapper">
      <HelloWorld msg="Wankers by Epitech presents" />
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  margin: 0;
  margin-bottom: 30px;
  padding: 0 20px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  place-items: center;
  justify-content: center;
}

.logo {
  height: 160px;
  width: 160px;
  display: block;
  background-image: url(../favicon.ico);
  background-size: 100%;
  transition: 0.2s;
}
.logo:hover {
  transition: 0.2s;
  animation: rotation 1.5s;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.logo:active {
  transform: scale(0.95);
  transition: 0.2s;
}
  
@media all and (max-device-width: 480px) {

  header {
    display: flex;
    place-items: center;
    justify-content: center;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
