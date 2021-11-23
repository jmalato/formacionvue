<template>
  <div class="home">
    Has perdido.<template v-if="celdasAbiertas">
      Has abierto {{ celdasAbiertas }}.</template
    >
  </div>
</template>

<script>
export default {
  name: "GameOver",
  data() {
    return {};
  },
  props: {
    celdasAbiertas: null,
  },
  components: {},
  created() {
    const self = this;
    console.log(self);
  },
};
</script>
