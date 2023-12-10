<template>
    <div class="ventana-macht">
      <img
        id="profile-img"
        src= "../assets/profile.png"
        alt="Foto de perfil"
      />
     
    </div> 
    <div class="editarr">
        <img
        id="editar"
        src= "../assets/editar.png"
        alt="editar"
        />
    </div>
  </template>
  
  <script>
  export default {
    name: 'VentanaMachT',
   
  };
  </script>
  
  <style scoped>
  .ventana-macht {
    text-align: center;
    padding: 20px;
    position: fixed;
    top: 10%;
    left: 50%;
    transform: translateX(-50%);
    width: 80%;
    max-width: 400px;
    box-sizing: border-box;
  }
  #profile-img{
    width: 90%;
    margin-left: 17%;
  }
 
  .editarr {
    text-align: center;
    padding: 20px;
    position: fixed;
    top: 30%;
    left: 60%;
    transform: translateX(-50%);
    width: 80%;
    max-width: 100px;
    box-sizing: border-box;
  }
  </style>
  