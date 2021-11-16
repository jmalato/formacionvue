<template>
  <div class="tablero">
    <!-- TODO: Incluir celdas -->
  </div>
</template>

<script>
export default {
  name: 'Tablero',
  data() {
    return {
      celdas: [],
    }
  },
  props:{
    tamano: {
      type: Number,
      default: 10
    }
  },
  methods:{
    inicializarTablero(){
      // Crear celdas. El tablero es cuadrado con tantas celdas como diga el props tamano
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tablero {
  margin:0 auto;
  padding: 10px;
  background: lightgray;
  width: 500px;
  height: 500px;
  position: relative;
}
</style>
