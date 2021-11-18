<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
        {{texto}}
    <input v-model="texto"/>

  </div>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return{
      texto: 'asdasd'
    }
  },
  components: {
  }
}
</script>
