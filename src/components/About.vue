<template>
  <section class="about-content">
    <h2>Sobre mí</h2>
    <article class="about">
      <AboutCard icon="icon-work.png" title="Trabajo">
        <p>Desarrolladora de software con más de 5 años de experiencia.</p>
        <p>
          Mi pasión, el desarrollo frontend que asegure una experiencia de
          usuario fenomenal.
        </p>
      </AboutCard>
      <AboutCard icon="icon-graduate.png" title="Educación">
        <p>Ingeniera de sistemas de la Universidad ECCI.</p>
        <p>Aprendiendo todos los días.</p>
      </AboutCard>
      <AboutCard icon="icon-happy.png" title="Pasatiempo">
        <p>Estar en contacto con la naturaleza.</p>
        <p>Compartir tiempo con mi familia</p>
        <p>Leer, bailar y disfrutar cada momento como si fuera el último.</p>
      </AboutCard>
    </article>
  </section>
</template>

<script>
import AboutCard from "./AboutCard";
export default {
  name: "About",
  components: {
    AboutCard,
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/mixins/breakpoint";
.about-content {
  margin-top: 4rem;
  margin-bottom: 2rem;
}
.about {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  margin: 3.5rem 3rem 1rem 1rem;
}
@include to(tablet-l) {
  .about {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
}
</style>