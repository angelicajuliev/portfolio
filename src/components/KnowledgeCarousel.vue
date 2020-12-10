<template>
  <carousel :slides="2">
    <div class="info">
      <h3>Angular</h3>
      <p>Angular 2.x - 10</p>
      <p>
        Usado en proyectos empresariales, que requieren arquitecturas complejas.
      </p>
      <p>Cypress para pruebas e2e</p>
    </div>
    <div class="info">
      <h3>React</h3>
      <p>Probando</p>
      <p>Cypress para pruebas e2e</p>
    </div>
  </carousel>
</template>

<script>
import Carousel from "./Carousel";
export default {
  name: "KnowledgeCarousel",
  components: {
    Carousel,
  },
};
</script>

<style>
.info {
  width: 20rem;
  margin: 1.5rem 2rem;
}
</style>