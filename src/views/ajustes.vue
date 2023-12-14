<template>
  <div class="ventana-macht" :class="{ 'modo-oscuro': modoOscuro }">
    <div class="profile-container">
      <img id="profile-img" src="../assets/profile.png" alt="Foto de perfil" />
      <div class="editarr">
        <img id="editar" src="../assets/editar.png" alt="editar" />
      </div>
    </div>

    <!-- Toggle para activar/desactivar modo oscuro -->
    <label class="switch">
      <input type="checkbox" v-model="modoOscuro" />
      <span class="slider round"></span>
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
  transition: background-color 0.3s, color 0.3s; /* Transición para el modo oscuro */
}

.profile-container {
  position: relative;
  display: inline-block;
}

#profile-img {
  width: 100%;
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
  top: 10%;
  right: 0%;
  display: inline-block;
  width: 16%;
  height: 4%;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
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
  -webkit-transition: 0.4s;
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
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

.modo-oscuro {
  background-color: #333;
  color: #fff;
}

</style>
