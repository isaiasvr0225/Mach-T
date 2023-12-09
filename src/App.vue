<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <nav class="flex justify-between">
      <img id="profile-img" src="./assets/profile.png" alt="Foto de perfil">
      <img id="logo-img" src="./assets/logo.png" alt="Logo">
      <img id="inbox-img" src="./assets/inbox.png" alt="Inbox">
    </nav>
    <hr>
  </header>


  <footer class="flex justify-between sticky bottom-0">
    <a>
      <img src="./assets/home.png" alt="">
      <h2>Material reciente</h2>
    </a>
    <a>
      <img src="./assets/home.png" alt="">
      <h2>Material reciente</h2>
    </a>
    <a>
      <img src="./assets/home.png" alt="">
      <h2>Material reciente</h2>
    </a>
    <a>
      <img src="./assets/home.png" alt="">
      <h2>Material reciente</h2>
    </a>
    <a>
      <img src="./assets/home.png" alt="">
      <h2>Material reciente</h2>
    </a>
  </footer>
</template>

<style scoped>
  h2{
    text-align: center;
  }

  div{
    height: 5px;
    background-color: black;
    width: 100%;
  }

  #profile-img{
    width: 55px;
    height: 55px;
    margin-top: 10px;
    margin-left: 10px;
  }

  #logo-img{
    width: 70px;
    height: 70px;
  }

  #inbox-img{
    width: 40px;
    height: 40px;
    margin-top: 17px;
    margin-right: 10px;
  }

  a image{
    width: 40px;
    height: 40px;
  }
</style>
