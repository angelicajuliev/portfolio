<template>
    <h2>Sobre mí</h2>
  <section class="about">
    <AboutCard icon="icon-work.png" title="Trabajo">
      <li>Desarrolladora de software con más de 5 años de experiencia.</li>
      <li>
        Mi pasión, el desarrollo frontend que asegure una experiencia de usuario
        fenomenal.
      </li>
    </AboutCard>
    <AboutCard icon="icon-graduate.png" title="Educación">
      <li>Ingeniera de sistemas de la Universidad ECCI.</li>
      <li>Aprendiendo todos los días.</li>
    </AboutCard>
    <AboutCard icon="icon-happy.png" title="Pasatiempo">
      <li>Estar en contacto con la naturaleza.</li>
      <li>Compartir tiempo con mi familia</li>
      <li>Leer, bailar y disfrutar cada momento como si fuera el último.</li>
    </AboutCard>
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
.about {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;


  li {
      margin-bottom: 1.5rem;
  }
}
</style>