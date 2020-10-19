<template>
  <div class="landing">
    <Avatar />
    <h1>
      Hola, <b>{{ name }}</b>
    </h1>
    <h2>I am frontend developer</h2>
  </div>
</template>

<script>
import Avatar from "./Avatar";
export default {
  name: "Landing",
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
  padding: 1rem 1rem 5rem;
  text-align: center;
  background-size: cover;
  background-position: bottom center;
  background-image: url("../assets/img/landing-bg.png");

  h1 {
    margin-bottom: 0rem;
  }
  h2 {
    margin-top: 0.3rem;
    color: #11054E;
    font-weight: normal;
  }
  .avatar {
    margin: 0 auto;
  }
}
</style>