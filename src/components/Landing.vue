<template>
  <div class="landing">
    <Particles id="tsparticles" :options="config" />
    <Avatar />
    <vue-particles color="#f90"></vue-particles>
    <h1>
      Hola, soy <b>{{ name }}</b>
    </h1>
    <h2>I am frontend developer</h2>
  </div>
</template>

<script>
import Avatar from "./Avatar";
import particlesConfig from "../assets/config/particles.json";
export default {
  name: "Landing",
  data: () => ({
    config: particlesConfig,
  }),
  components: {
    Avatar,
  },
  props: {
    name: String,
  },
};
</script>

<style scoped lang="scss">
.landing {
  padding: 4rem 1rem 5rem;
  text-align: center;
  background-size: cover;
  background-position: bottom center;
  background-image: url("../assets/img/landing-bg.png");
  position: relative;

  #tsparticles {
    position: absolute;
    height: 90%;
    width: 100%;
    clip-path: polygon(100% 0, 100% 80%, 50% 100%, 0 80%, 0 0);
  }

  h1 {
    margin-bottom: 0rem;
  }
  h2 {
    margin-top: 0.3rem;
    color: #11054e;
    font-weight: normal;
  }
  .avatar {
    margin: 0 auto;
  }
}
</style>