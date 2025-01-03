<template>
    <div class="container">
      
      <!-- Usar el componente GameOpinion -->
      <GameOpinion :name="gameName" />
  
      <div class="mb-3">
        <label for="nombre" class="form-label">Nombre:</label>
        <input type="text" class="form-control" id="nombre" placeholder="nombre" v-model="nombre" required>
      </div>
      <div class="mb-3">
        <label for="opinion" class="form-label">Opinión</label>
        <textarea class="form-control" id="opinion" rows="3" placeholder="Tu opinión debe ir aquí..." v-model="opinion" required></textarea>
      </div>
      <div class="d-flex justify-content-start"> <!-- Alinear el botón a la izquierda -->
      <button type="submit" class="btn btn-info" @click="submitF">{{ (indice !== -1) ? 'Actualizar' : 'Agregar' }}</button>
      </div>

  
      <h2 class="titulo">A continuación podrás ver tu opinión</h2>
      <div>
        <div v-if="opiniones.length === 0" class="alert alert-danger" role="alert" style="text-align: left">No existen opiniones para mostrar.</div>
        <div v-else class="accordion" id="accordionExample" style="padding-bottom:50px">
          <div v-for="(op, index) in opiniones" :key="index" class="accordion-item">
            <h2 class="accordion-header" :id="'heading' + index">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="'#collapse' + index" aria-expanded="true" :aria-controls="'collapse' + index">
                Opinión creada por: {{ op.nombre }}
              </button>
            </h2>
            <div :id="'collapse' + index" class="accordion-collapse collapse" aria-labelledby="'heading' + index" data-bs-parent="#accordionExample">
              <div class="accordion-body">
                <strong>Opinión:</strong> {{ op.opinion }}<br> <!-- Salto de línea -->
                <div style="margin-top: 10px;"> <!-- Contenedor adicional para el espaciado -->
                  <button type="button" class="btn btn-danger" style="margin-right:20px" @click="eliminar(index)">Eliminar</button>
                  <button type="button" class="btn btn-warning" style="margin-left:20px" @click="editar(index)">Editar</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  //import axios from 'axios';
  import GameOpinion from "@/components/GameOpinion.vue";
  
  export default {
    name: 'OpinionesGames',
    components: {
      GameOpinion 
    },
  
    data() {
    return {
      gameName: this.$route.params.id, // Obtiene el id del juego desde la ruta
      opiniones: [],
      nombre: "",
      opinion: "",
      indice: -1,
    };
  },
  
    methods: {
    
    agregarOpinion() {
  if (this.nombre && this.opinion) { // Verifica que los campos no estén vacíos
    this.opiniones.push({
      nombre: this.nombre,
      opinion: this.opinion,
    });
    this.limpiar(); // Limpia los campos después de agregar
  } else {
    alert("Por favor, completa todos los campos."); // Mensaje de error si los campos están vacíos
  }
},
  
      eliminar(index) {
        this.opiniones.splice(index, 1);
      },
  
      editar(index) {
        var opi = this.opiniones[index];
        this.indice = index;
        this.nombre = opi.nombre;
        this.opinion = opi.opinion;
      },
  
      submitF() {
        if (this.indice === -1) {
          this.agregarOpinion();
        } else {
          this.guardarActualizacion();
        }
      },
  
      guardarActualizacion() {
        this.opiniones[this.indice] = {
          nombre: this.nombre,
          opinion: this.opinion,
        };
        this.limpiar();
      },
  
      limpiar() {
        this.indice = -1;
        this.nombre = '';
        this.opinion = '';
      }
    },
  };
  </script>
  
  <style scoped>
  .titulo {
    text-align: center;/* Alinear el título a la izquierda */
    margin: 30px 0; /* Espaciado superior e inferior */
  }
  
  .container {
    width: 100%; /* Hacer que el contenedor ocupe todo el ancho */
    max-width: none; /* Eliminar el límite de ancho máximo */
  }
  .accordion-body  {
  text-align: left; /* Alinear todo el contenido a la izquierda */
}
.form-label {
  text-align: left; /* Alinear etiquetas a la izquierda */
}

.form-control {
  text-align: left; /* Alinear texto dentro de los inputs a la izquierda */
}

  </style>

