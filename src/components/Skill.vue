<template>
  <div class="skill-container">
    <h2>Habilidades</h2>

    <h4 class="subtitle">Frameworks/librerías usados en frontend:</h4>
    <section class="skills">
      <SkillCard
        icon="logo-angular.png"
        title="Angular"
        knowledge="90"
        showDetails="false"
      >
        <li>Angular 2.x - 10</li>
        <li>
          Usado en proyectos empresariales, que requieren arquitecturas
          complejas.
        </li>
        <li>Cypress para pruebas e2e</li>
      </SkillCard>
      <SkillCard
        icon="logo-react.png"
        title="React"
        knowledge="60"
        showDetails="true"
      >
        <li>React v16.x</li>
        <li>React native 0.6</li>
        <li>Usado para mis proyectos personales</li>
        <li>Redux para gestión de datos</li>
      </SkillCard>
      <SkillCard
        icon="logo-vue.png"
        title="Vue"
        knowledge="10"
        showDetails="false"
      >
        <li>Vue v3</li>
        <li>Usado en mi portafolio</li>
      </SkillCard>
    </section>

    <h4 class="subtitle">Lenguajes usados en backend:</h4>
    <section class="skills">
      <SkillCard
        icon="logo-node.png"
        title="Node.js"
        knowledge="40"
        showDetails="false"
      >
        <li>Node.js v10</li>
        <li>Usado para hacer funciones en Google Cloud Platform</li>
        <li>Express para infraestructura web</li>
      </SkillCard>
      <SkillCard
        icon="logo-python.png"
        title="Python"
        knowledge="40"
        showDetails="false"
      >
        <li>Python 3.8</li>
        <li>
          Usado para proyectos empresariales desplegados en Amazon Web Services
        </li>
        <li>Django como framework web</li>
      </SkillCard>
      <SkillCard
        icon="logo-java.png"
        title="Java"
        knowledge="40"
        showDetails="false"
      >
        <li>Java 7</li>
        <li>Android</li>
        <li>Usado para proyectos empresariales</li>
      </SkillCard>
    </section>
  </div>
</template>

<script>
import SkillCard from "./SkillCard";
export default {
  name: "Skills",

  components: {
    SkillCard,
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/mixins/breakpoint";

.skill-container {
  margin: 1rem 2rem;

  .subtitle {
    margin-top: 2.5rem;
  }
}
.skills {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  padding-bottom: 2rem;

  li {
    margin-bottom: 1.5rem;
  }
}

@include to(tablet-l) {
  .subtitle {
    margin-bottom: 2rem;
  }
  .skills {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
}
</style>