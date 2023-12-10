<template>
  <div class="ventana-macht">
    <h2>Mach-T</h2>
    <input type="text" v-model="busqueda" placeholder="Buscar por tags...">
    <!-- Otro contenido necesario -->
  </div>
</template>

<script>
export default {
  name: 'VentanaMachT',
  data() {
    return {
      busqueda: '' // Variable para almacenar la entrada del usuario en el buscador
    };
  },
  
  
};
</script>

<style scoped>
h2 {
  font-family: "Inter", sans-serif;
  text-align: center;
  font-size: 40px;
  color: #3C2F80;
}

.ventana-macht {
  font-family: 'Inter', sans-serif;
  font-weight: bold;
  background-color: transparent;
  color: #3C2F80;
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

input {
  margin-top: 10px;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 2px solid #FFA500; /* Borde naranja */
  background-color: #FAEDDA; /* Fondo FAEDDA */
}

/* Otros estilos si es necesario */
</style>
