<template>
  <carousel :slides="7">
    <div class="info"></div>
    <div class="info">
      <h3>Angular</h3>
      <p>Angular 2.x - 10</p>
      <p>
        Usado en proyectos empresariales, que requieren arquitecturas complejas.
      </p>
      <p>Cypress para pruebas e2e</p>
    </div>
    <div class="info">
      <h3>React v16.x</h3>
      <p>React native 0.6</p>
      <p>Usado para mis proyectos personales</p>
      <p>Redux para gestión de datos</p>
    </div>
    <div class="info">
      <h3>Vue v3</h3>
      <p>Usado en mi portafolio</p>
    </div>
    <div class="info">
      <h3>Node.js v19</h3>
      <p>Usado para hacer funciones en Google Cloud Platform</p>
      <p>Express para infraestructura web</p>
    </div>
    <div class="info">
      <h3>Python 3.8</h3>
      <p>
        Usado para proyectos empresariales desplegados en Amazon Web Services
      </p>
      <p>Django como framework web</p>
    </div>
    <div class="info">
      <h3>Java</h3>
      <p>Android</p>
      <p>Usado para proyectos empresariales</p>
    </div>
    <div class="info">
      <h3>Git</h3>
      <p>Flujo para versionamiento</p>
      <p>Gitlab CI/CD</p>
      <p>Travis CI</p>
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
  width: 16rem;
  margin: 1.5rem 4.5rem 1.5rem 1rem;
}
</style>