<template>
  <div>
    <header v-if="activeMenu !== 'ajustes'">
      <nav class="flex justify-between" >
        <img id="profile-img" src="./assets/profile.png" alt="Foto de perfil">
        <img id="logo-img" src="./assets/logo.png" alt="Logo">
        <img id="inbox-img" src="./assets/inbox.png" alt="Inbox">
      </nav>
      <hr>
    </header>

    <router-view/>

    <div id="boton_mas" v-if="activeMenu !== 'ajustes'">
      <img id="masconfondo" src="./assets/mas.png" alt="Publicar">
    </div>

    <footer class="flex justify-between sticky bottom-0">
      <router-link to="/" :class="{ 'menu-active': activeMenu === '' }" @click="setActiveMenu('')">
        <img src="./assets/home.png" alt="" class="move-right-home">
        <h2 class="move-left">Material reciente</h2>
      </router-link>

      <router-link to="/operativos" :class="{ 'menu-active': activeMenu === 'operativos' }" @click="setActiveMenu('operativos')">
        <img src="./assets/operativos.png" alt="" class="move-left">
        <h2 class="move-left">Operativos</h2>
      </router-link>
      
      <router-link to="/buscar-material" :class="{ 'menu-active': activeMenu === 'buscar-material' }" @click="setActiveMenu('buscar-material')">
        <img src="./assets/buscar.png" alt="" class="move-left">
        <h2 class="move-left">Buscar material</h2>
      </router-link>

      <router-link to="/calculadora" :class="{ 'menu-active': activeMenu === 'promedio' }" @click="setActiveMenu('promedio')">
        <img src="./assets/promedio.png" alt="" class="move-right">
        <h2 class="move-right">Promedio</h2>
      </router-link>

      <router-link to="/ajustes" :class="{ 'menu-active': activeMenu === 'ajustes' }" @click="setActiveMenu('ajustes')">
        <img src="./assets/ajustes.png" alt="" class="move-right">
        <h2 class="move-left">Ajustes</h2>
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeMenu: '', // Estado del menú activo
    };
  },
  methods: {
    setActiveMenu(menu) {
      this.activeMenu = menu; // Método para cambiar el estado del menú
    },
  },
};
</script>

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

  div img {
    width: 55px;
    height: 55px;
    margin-top: 10px;
    margin-left: 10px;
   

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
#masconfondo{  background-color: white;
 border-radius: 50%;}
  #boton_mas {
    
    flex-direction: row;
    align-items: flex-end;
    position: fixed;
    bottom: 12%;
    right: -71%;
    padding: 4%;
    width: 96%;
  
    box-sizing: border-box;
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
    color: #000; /* Asegura que el color del texto sea visible */
    text-decoration: none; /* Elimina el subrayado predeterminado */
  }

  .menu-active {
    color: #E3A811; /* Cambia el color del texto cuando está activo */
  }
</style>
