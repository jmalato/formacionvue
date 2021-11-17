<template>
  <div class="celda" :style= "estilos">
    <!-- TODO: Incluir celdas -->
      <!-- {{x}} | {{y}} | {{mina}} -->

      <img v-if="mina" src="https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/d0/87/f6/d087f6eb-c54e-5af2-fc92-3c4b656af7e0/source/256x256bb.jpg">

  </div>
</template>

<script>
export default {
  name: 'Celda',
  data() {
    return {
      celdas: [],
    }
  },
  props:{
    x: {
      type: Number
    },
    y: {
      type: Number
    },
    mina: {
      type: Boolean
    }
  },
  
  computed:{
    estilos: function(){
      const self = this;
      let cadena = "top: " + (self.x * 50) + "px; left: " + (self.y * 50) + "px";
      return cadena;
    }
  },

  methods:{
    
  },
  created: function() {
      const self = this;
      self. inicializarTablero();
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.celda {
  background: rgb(236, 193, 193);
  width: 50px;
  height: 50px;
  position: absolute;
}
.celda img {
  width: 50px;
  height: 50px;
}
</style>
