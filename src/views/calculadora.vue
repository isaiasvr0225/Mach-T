<template>
    <div class="calculadora">
      <h2>Calculadora</h2>
      <input type="number" v-model.number="numeroMaterias" placeholder="Número de materias que diste...">
  
      <div class="scroll-container">
        <table v-if="numeroMaterias > 0 && numeroMaterias <= 20">
          <thead>
            <tr>
              <th>Materia</th>
              <th>Calificación</th>
              <th>Créditos</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(materia, index) in materias" :key="index">
              <td>{{ materia.nombre }}</td>
              <td><input type="number" v-model.number="materia.calificacion" placeholder="Calificación"></td>
              <td><input type="number" v-model.number="materia.creditos" placeholder="Créditos"></td>
            </tr>
            <tr>
              <td colspan="3">
                <div class="calcular">
                  <button @click="calcularPromedio">Calcular Promedio</button>
                  <p v-if="promedioCalculado">Promedio Ponderado: {{ promedioCalculado.toFixed(2) }}</p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VentanaMachT',
    data() {
      return {
        numeroMaterias: null,
        materias: [],
        promedioCalculado: null
      };
    },
    watch: {
      numeroMaterias() {
        this.materias = Array.from({ length: parseInt(this.numeroMaterias) || 0 }, (_, index) => ({
          nombre: `Materia ${index + 1}`,
          calificacion: 0,
          creditos: 0
        }));
      }
    },
    computed: {
      promedioCalculado() {
        const totalCreditos = this.materias.reduce((total, materia) => total + Number(materia.creditos), 0);
        const sumaPonderada = this.materias.reduce((suma, materia) => suma + (Number(materia.calificacion) * Number(materia.creditos)), 0);
        return totalCreditos > 0 ? sumaPonderada / totalCreditos : null;
      }
    },
    methods: {
      calcularPromedio() {
        // Mantén este método si hay alguna lógica adicional que deseas ejecutar al hacer clic en el botón.
      }
    }
  };
  </script>
  
  
  <style scoped>
  h2 {
    font-family: "Inter", sans-serif;
    text-align: center;
    font-size: 40px;
    color: #3C2F80;
  }
  
  .calculadora {
    font-family: 'Inter', sans-serif;
    font-weight: bold;
    background-color: transparent;
    color: #3C2F80;
    text-align: center;
    padding: 20px;
    width: 100%;
    box-sizing: border-box;
  }
  
  input {
    margin-top: 10px;
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 2px solid #FFA500;
    background-color: #FAEDDA;
  }
  
  .scroll-container {
    max-height: 60vh;
    overflow-y: auto;
  }
  
  table {
    width: 100%;
    margin-top: 20px;
    border-collapse: collapse;
  }
  
  th, td {
    border: 1px solid #ddd;
    padding: 10px;
    text-align: center;
  }
  
  .calcular {
    margin-top: 20px;
  }
  
  button {
    padding: 10px;
    background-color: #3C2F80;
    color: #fff;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #5E4C9B;
  }
  </style>
  