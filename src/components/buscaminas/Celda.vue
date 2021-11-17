<template>
  <div class="celda" :style= "estilos" @click= "consolelog"  > 
    <!-- TODO: Incluir celdas -->
      <!-- {{x}} | {{y}} | {{mina}} -->

      <img v-if="mina" src="https://is5-ssl.mzstatic.com/image/thumb/Purple124/v4/d0/87/f6/d087f6eb-c54e-5af2-fc92-3c4b656af7e0/source/256x256bb.jpg" >
      <span v-if= "!mina"> {{numeroMinas}} </span>
      
  </div>
</template>

<script>
export default {
  name: 'Celda',
  data() {
    return {
      celdasVecinas: [],
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
    },
  },
  
  
  computed:{
    estilos: function(){
      const self = this;
      let cadena = "top: " + (self.x * 50) + "px; left: " + (self.y * 50) + "px";
      return cadena;
    },
    numeroMinas: function(){
      const self = this;
      return self.celdasVecinas.filter(c => c.mina).length;
    },
 
 
 },

  methods:{
    esVecina(celda){
      const self = this;
      if(self.x === celda.x && self.y === celda.y) return false;
      
      if(Math.abs(self.x -celda.x) <= 1 && Math.abs(self.y -celda.y) <= 1 ) return true;
      return false;
    },
    
    addVecinas(celdas){
     const self = this;
     self.celdasVecinas = celdas;
    },
    
    consolelog(){
      const self = this;
      console.log(self.celdasVecinas);
    }
  

}
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.celda {
  background: rgb(236, 193, 193);
  border: 1px solid black;
  width: 50px;
  height: 50px;
  position: absolute;
}
.celda img {
  width: 50px;
  height: 50px;
}
</style>
