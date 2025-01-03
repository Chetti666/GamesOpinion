<template>
    <div class="home">
      <div class="container">
        <h1 style="margin:10px">Lista de Juegos Disponibles</h1>
  
        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col" v-for="game in games" :key="game.id">
            <div class="card">
              <img :src="game.background_image" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title text-start">{{ game.name }}</h5> <!-- Alineación a la izquierda -->
              <p class="text-start">{{ console.log(game) }}</p>
              </div>
              <ul class="list-group list-group-flush text-start">
                <li class="list-group-item">Rating: {{ game.rating }} </li>
                <li class="list-group-item">Released: {{ game.released }}</li>
                <li class="list-group-item">Update: {{ game.updated }} </li>
              </ul>
              <div class="card-body text-start"> <!-- Alineación a la izquierda -->
  
  
                <router-link :to="{ name: 'OpinionesGames', params: { id: game.name } }">
                  <button type="button" class="btn btn-primary">opinar</button>
                </router-link>
  
              
                <router-link :to="{ name: 'AdministracioN', params: { id: game.name } }">
                  <button class="btn btn-lg" style="color:red"><i class="fas fa-heart"></i></button>
                </router-link>
  
                     <!-- <button type="button" class="btn btn-primary" @click="rutaOpiniones()">opionar</button> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  // @ is an alias to /src
  // import HelloWorld from '@/components/HelloWorld.vue'
  
  export default {
    name: 'HomePage',
    
    data() {
      return {
        games: [],
        opiniones: [],
        nombre: "",
        opinion: ""
  
      }
    },
  
    methods: {
    obtenerDatos() {
      const apiUrl = `https://api.rawg.io/api/games?key=b110042bafb6426d8a932adb06f46ab7`;
      
      axios.get(apiUrl)
        .then(response => {
          this.games = response.data.results; // Asigna los resultados a la propiedad games
        })
        .catch(error => {
          console.error('Error al obtener los datos de los juegos:', error);
        });
    },
  
         rutaOpiniones() {
        this.$router.push('opiniones')
       },
  
      agregarOpinion() {
        this.opiniones.push({
          nombre: this.nombre,
          opinion: this.opinion,
        })
        this.$router.push('opiniones')
        this.nombre = '',
          this.opinion = ''
      }
    },
    created() {
      this.obtenerDatos()
    }
  
  }
  </script>
  
  <style scoped>
  .container {
    text-align: left;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .text-start {
  text-align: left; /* Alineación a la izquierda */
}
  </style>
  
  
  
  
  