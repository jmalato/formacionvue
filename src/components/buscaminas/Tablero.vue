<template>
  <div class="tablero" >
    <!-- TODO: Incluir celdas -->
    <Celda v-for="(celda, i) in celdas" :key="'celda' + i"
      ref="celdas"
      :x="celda.x" :y="celda.y" :mina="celda.mina" :celdasVecinas="celdasVecinas(celda)" @explosion="terminarJuego">
    </Celda>
  </div>
</template>

<script>
import Celda from './Celda.vue'

export default {
  name: 'Tablero',

  components: { Celda },

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
      const self = this;
      for (let i = 0; i < self.tamano; i++){
        for (let j = 0; j < self.tamano; j++){
          self.celdas.push({
            mina: Math.random() < 0.10,
            x: i,
            y: j
          })
        }
      }
    },
  
     terminajuego(){
     const self = this;
     if(self.mina){
       consolelog "termina juego";
     }
    },
   celdasVecinas(celda){
     const self = this;
     if(self.$refs.celdas){
     let tvariable = self.$refs.celdas.filter(c => c.esVecina(celda));
     console.log(tvariable);
     return tvariable;
     }
    },
  },
  
  created: function() {
      const self = this;
      self. inicializarTablero();
    },
   mounted: function() {
      const self = this;
      if(self.$refs.celdas){
      self.$refs.celdas.forEach(c => {
        c.addVecinas(self.celdasVecinas(c));
      });
      }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tablero {
  margin:0 auto;
  background: lightgray;
  width: 500px;
  height: 500px;
  position: relative;
}
</style>
