<template>
  <div class="about">
    <h1>Bucaminas</h1>
    <Tablero/>
  </div>
</template>

<script>
import Tablero from '../components/buscaminas/Tablero.vue'

export default {
  components: { Tablero },
  name: 'Buscaminas',
}
</script>

