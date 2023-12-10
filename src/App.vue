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
      <img src="./assets/home.png" alt="" class="move-right-home">
      <h2 class="move-left">Material reciente</h2>
    </a>
    <a>
      <img src="./assets/operativos.png" alt="" class="move-left">
      <h2 class="move-left">Operativos</h2>
    </a>
    <a>
      <img src="./assets/buscar.png" alt="" class="move-left">
      <h2 class="move-left">Buscar material</h2>
    </a>
    <a>
      <img src="./assets/promedio.png" alt="" class="move-right">
      <h2 class="move-right">Promedio</h2>
    </a>
    <a>
      <img src="./assets/ajustes.png" alt="" class="move-right">
      <h2 class="move-left">Ajustes</h2>
    </a>
  </footer>
</template>

<style scoped>
  h2 {
    text-align: center;
    margin-top: 3px;
    font-size: 12px;
    letter-spacing: -1px;
  }

  .move-left {
    margin-left: -5px;
  }

  .move-right {
    margin-left: 2px;
  }

  .move-right-home {
    margin-left: 13px;
  }

  div {
    height: 5px;
    background-color: black;
    width: 100%;
  }

  #profile-img {
    width: 55px;
    height: 55px;
    margin-top: 10px;
    margin-left: 10px;
  }

  #logo-img {
    width: 70px;
    height: 70px;
  }

  #inbox-img {
    width: 40px;
    height: 40px;
    margin-top: 17px;
    margin-right: 10px;
  }

  a img {
    width: 38px;
    height: 38px;
  }

  footer {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #f0f0f0;
    padding: 10px;
    width: 100%;
    box-sizing: border-box;
  }

  a {
    text-align: center;
  }
</style>
