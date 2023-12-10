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
    <!-- Material Reciente -->
    <a>
      <img src="./assets/home.png" alt="" class="move-right-home">
      <h2 class="move-left-material-reciente">Material reciente</h2>
    </a>

    <!-- Operativos -->
    <a>
      <img src="./assets/operativos.png" alt="">
      <h2 class="move-left-operativos">Operativos</h2>
    </a>

    <!-- Buscar Material -->
    <a>
      <img src="./assets/buscar.png" alt="">
      <h2 class="move-left-buscar-material">Buscar material</h2>
    </a>

    <!-- Promedio -->
    <a>
      <img src="./assets/promedio.png" alt="">
      <h2 class="move-right-promedio">Promedio</h2>
    </a>

    
    <!-- Ajustes (movido a la derecha) -->
    <a>
      <img src="./assets/ajustes.png" alt="" class="move-right-ajustes">
      <h2 class="move-left-ajustes">Ajustes</h2>
    </a>
  </footer>
</template>

<style scoped>
  /* Estilo común para todos los textos */
  h2 {
    text-align: center;
    margin-top: 3px;
    font-size: 14px;
  }
/* Clase para mover el icono de ajustes a la derecha */
.move-right-ajustes {
    margin-left: 0px; /* Ajusta el margen izquierdo según tus preferencias */
  }
  /* Clase para mover el icono de home a la derecha */
  .move-right-home {
    margin-left: 15px; /* Ajusta el margen izquierdo según tus preferencias */
  }

  /* Clases para mover a la izquierda */
  .move-left-material-reciente {
    margin-left: -10px;
  }

  .move-left-operativos {
    margin-left: -15px;
  }

  .move-left-buscar-material {
    margin-left: -30px;
  }

  .move-left-ajustes {
    margin-left: 0px;
  }

  /* Clases para mover a la derecha */
  .move-right-promedio {
    margin-left: -10px;
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
  flex-direction: row; /* Asegura que los elementos estén en fila */
  align-items: flex-end;
  position: fixed;
  bottom: 0;
  left: 0; /* Asegura que la barra comience desde el borde izquierdo */
  right: 0; /* Asegura que la barra llegue hasta el borde derecho */
  background-color: #f0f0f0;
  padding: 10px;
  width: 100%;
  box-sizing: border-box; /* Asegura que el padding no aumente el tamaño total */
}


  a {
    text-align: center;
  }
</style>
