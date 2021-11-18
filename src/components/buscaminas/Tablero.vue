<template>
  <div class="tablero" @explosion="terminaJuego">
    <!-- TODO: Incluir celdas -->
    <Celda v-for="(celda, i) in celdas" :key="'celda' + i"
      ref="celdas"
      :x="celda.x" :y="celda.y" :mina="celda.mina" :habilitado="!finJuego" :celdasVecinas="celdasVecinas(celda)">
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
      finJuego: false
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

      forEach(let i = 0; i < self.celdas.length; i++){
        let nuevaMina = (Math.random() < .5) ? 1 : 0;

        if(self.celda.mina && numeroMina){
          self.celda.mina = treu;
          minasRestantes --;
        }
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

    terminaJuego(){
      const self = this;
      self.$refs.celdas.filter(c => c.mina).forEach(c => {
        c.mostrarCelda()
      });
      //console.log('FIN')
      self.finJuego = true;
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
