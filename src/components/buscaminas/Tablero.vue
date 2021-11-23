<template>
  <div class="tablero">
    <div class="controles">
      <input v-model="celdasAbiertas" />
    </div>
    <div class="contenedor-celdas">
      <Celda
        v-for="(celda, i) in celdas"
        :key="'celda' + i"
        ref="celdas"
        @explosion="terminaJuego"
        @celdaMostrada="nuevaCeldaMostrada"
        :x="celda.x"
        :y="celda.y"
        :mina="celda.mina"
        :habilitado="!finJuego"
      >
      </Celda>
    </div>
  </div>
</template>

<script>
import Celda from "./Celda.vue";

export default {
  name: "Tablero",

  components: { Celda },

  data() {
    return {
      celdas: [],
      celdasAbiertas: 0,
      finJuego: false,
      tableroVisible: false,
    };
  },
  props: {
    tamano: {
      type: Number,
      default: 10,
    },
  },
  methods: {
    inicializarTablero() {
      // Crear celdas. El tablero es cuadrado con tantas celdas como diga el props tamano
      const self = this;
      for (let i = 0; i < self.tamano; i++) {
        for (let j = 0; j < self.tamano; j++) {
          self.celdas.push({
            x: i,
            y: j,
          });
        }
      }
      let numeroMinas = 10;
      do {
        let celdaElegida = Math.floor(Math.random() * self.celdas.length);
        if (!self.celdas[celdaElegida].mina) {
          self.celdas[celdaElegida].mina = true;
          numeroMinas--;
        }
      } while (numeroMinas > 0);
    },

    celdasVecinas(celda) {
      const self = this;
      if (self.$refs.celdas) {
        let tvariable = self.$refs.celdas.filter((c) => c.esVecina(celda));
        return tvariable;
      }
      return [];
    },

    nuevaCeldaMostrada() {
      const self = this;
      self.celdasAbiertas++;
    },

    terminaJuego() {
      const self = this;
      self.$refs.celdas
        .filter((c) => c.mina)
        .forEach((c) => {
          c.mostrarCelda();
        });
      if (!self.finJuego) {
        self.finJuego = true;
        setTimeout(function () {
          self.$router.push(`/gameover/${self.celdasAbiertas}/`);
        }, 3000);
      }
    },
  },

  created: function () {
    const self = this;
    self.inicializarTablero();
  },
  mounted: function () {
    const self = this;
    if (self.$refs.celdas) {
      self.$refs.celdas.forEach((c) => {
        c.addVecinas(self.celdasVecinas(c));
      });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tablero {
  margin: 0 auto;
  background: lightgray;
  width: 500px;
  height: 500px;
  position: relative;
}
.contenedor-celdas {
  position: relative;
}
</style>
