<template>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
  <Landing name="Angélica Julieth Gómez S." />
  <div class="content">
    <About />
    <Knowledge />
    <Experience />
  </div>
  <ContactForm />
</template>

<script>
import Landing from "./components/Landing";
import About from "./components/About";
// import Skill from "./components/Skill";
import Experience from "./components/Experience";
import ContactForm from "./components/ContactForm";
import Knowledge from "./components/Knowledge";

export default {
  name: "App",
  components: {
    Landing,
    About,
    Experience,
    ContactForm,
    Knowledge
  },
};
</script>

<style lang="scss">
@import "./assets/scss/index.scss";
.content {
  max-width: 1024px;
  margin: 1rem auto;
}
</style>
