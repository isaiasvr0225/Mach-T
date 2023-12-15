<template>
  <div class="ventana-macht" :class="{ 'modo-oscuro': modoOscuro }">
    <div class="profile-container">
      <img id="profile-img" src="../assets/profile.png" alt="Foto de perfil" />
      <div class="editarr">
        <img id="editar" src="../assets/editar.png" alt="editar" />
      </div>
    </div>

    <label class="switch">
      <input type="checkbox" v-model="modoOscuro" />
      <span class="slider round"></span>
    </label>
    <div class="modo-oscuro-texto">Modo oscuro</div>
    <div class="Acerca_de">Acerca De ‎ ‎</div>
    <div class="mach-t">Mach-T</div>
    <div class="sesion">Cerrar sesión</div>
    <label class="acerca-de-container">
     <div class="info-symbol-container">
        <img id="info" src="../assets/info.png" alt="info" />
      </div>
    </label>
    <label class="logo_mover"> <div class="logo">
        <img id="logo" src="../assets/logo.png" alt="logo" />
      </div>
    </label>
    <label class="salir_mover"> <div class="cerrar">
        <img id="cerrar" src="../assets/cerrar.png" alt="cerrar" />
      </div>
    </label>
    
  </div>
</template>

<script>
export default {
  name: 'VentanaMachT',
  data() {
    return {
      modoOscuro: false,
    };
  },
};
</script>

<style scoped>
.ventana-macht {

  text-align: center;
  padding: 20px;
  transition: background-color 0.3s, color 0.3s;
}

.profile-container {
  position: relative;
  display: inline-block;
}

#profile-img {
  width: 70%;
  max-width: 60vh;
  display: block;
  margin: 0 auto;
}

.editarr {
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 10px;
}

#editar {
  width: 40px;
}

.switch {
  position: absolute;
  top: 52%;
  right: 41%;
  transform: translate(0, -50%);
 
  font-size: 1.5rem;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: -20%;
  right: -46PX;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;
}

.slider:before {
  position: absolute;
  content: '';
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  transition: 0.4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.modo-oscuro {
  background-color: #333;
  color: #fff;
}

.modo-oscuro-texto {
  position: absolute;
  top: 52%;
  right: 46%;
  transform: translate(0, -50%);
  color: #000000;
  font-size: 1.5rem;
  font-weight: bold; 
}

.acerca-de-container {
 position: absolute;
  top: 57%;
  right: 44%;
  transform: translate(0, -50%);
}
.Acerca_de {
  position: absolute;
  top: 57%;
  right: 52%;
  transform: translate(0, -50%);
  color: #000000;
  font-size: 1.5rem;
  font-weight: bold;
}

.info-symbol-container {
  margin-right: -90%;
}

.info-symbol-container img {
  width: 30px;
  margin-right: 5px;
}
.logo_mover { 
 position: absolute;
  top: 80%;
  right: 0%;
  transform: translate(0, -50%);
}
.logo {
  margin-right: 0%;
}
.logo img {
  width: 150px;
  margin-right: 5px;}
.mach-t{
  position: absolute;
  top: 80%;
  right: 46%;
  transform: translate(0, -50%);
  color: #3C2F80;
  font-size: 2.4rem;
  font-family: 'Inter', sans-serif;
  font-weight: bold;
}
.sesion{
  position: absolute;
  top: 63%;
  right: 48%;
  transform: translate(0, -50%);
  color: #000000;
  font-size: 1.5rem;
  font-weight: bold;
  

}
.salir_mover { 
 position: absolute;
  top: 63%;
  right: 38%;
  transform: translate(0, -50%);
}
.cerrar img {
  width: 25px;
  margin-right: 5px;}
  .cerrar {
  margin-right: 0%;
}
</style>
