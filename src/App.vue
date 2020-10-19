<template>
  <Landing name="Angélica Julieth Gómez Sarmiento" />
  <About />
</template>

<script>
import Landing from "./components/Landing";
import About from "./components/About";

export default {
  name: 'App',
  components: {
    Landing,
    About
  }
}
</script>

<style lang="scss">
@import './assets/scss/index.scss';
</style>
