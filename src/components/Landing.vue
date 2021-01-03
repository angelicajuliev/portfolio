<template>
  <div class="landing">
    <Particles id="tsparticles" :options="config" />
    <div class="content">
      <div class="text">
        <h1>
          Hola, soy <b>{{ name }}</b>
        </h1>
        <h2>Soy desarrolladora frontend</h2>
      </div>
      <a
        href="https://github.com/angelicajuliev/avatar-css/tree/master"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Avatar />
      </a>
    </div>
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
@import "../assets/scss/mixins/breakpoint";
.landing {
  padding: 4rem 1rem 0;
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

  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    max-width: 1024px;
  }

  h1 {
    margin-bottom: 0rem;
  }
  h2 {
    margin-top: 0.3rem;
    color: #11054e;
    font-weight: normal;
    text-align: left;
  }
  .avatar {
    margin: 0 auto;
  }

  @include to(tablet-l) {
   .content {
     padding: 4rem 2.5rem 5rem;
     flex-direction: column;

   } 
  }
}
</style>