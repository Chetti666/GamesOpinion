<template>
  <NavBar :title="currentTitle" />
  <router-view /> <!-- Este es el lugar donde se renderizarán las vistas según la ruta -->
</template>

<script>
import NavBar from './components/NavBar.vue';


export default {
  name: 'App',
  components: {
    NavBar
  
},
computed: {
    currentTitle() {
      // Aquí puedes determinar el título basado en la ruta actual
      const route = this.$route.name;
      switch (route) {
        case 'Home':
          return 'Games Opinion';
        case 'OpinionesGames':
          return 'Opiniones'; // Cambia a "Opiniones"
        case 'GameOpinion':
          return 'Escribe tu Opinión';
        default:
          return 'Games Opinion';
          }
        }
      }
    }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>