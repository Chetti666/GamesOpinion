<template>
    <div class="container">
      <h3 style="margin:30px;text-align: center">Escribe tu opinión para el juego: {{ name }} </h3>
    </div>
</template>

<script>
import axios from 'axios'; // Importa Axios

export default {
  name: 'GameOpinion',// Cambia el nombre aquí
  props: {
    name: {
      type: String,
      required: true, 
    }
    },
  data() {
    return {
      nombreJuego: null, // Inicializa la variable
    };
  },
    
  created() {
    // Aquí deberías hacer la llamada a la API para obtener información del juego
    this.fetchGameDetails();
  },
  methods: {
    async fetchGameDetails() {
      try {
        
        const response = await axios.get(`https://api.rawg.io/api/games/${this.id}?key=b110042bafb6426d8a932adb06f46ab7`);
        this.nombreJuego = response.data.name; // Asigna el nombre del juego a la variable
        } 
        catch (error) {
        console.error('Error al obtener los detalles del juego:', error);
      }
    }
  }
}
</script>