
<template>
  <div class="experience">
    <h2>Experiencia</h2>
    <p class="details">
      Me siento muy afortunada de haber trabajado de la mano de profesionales en
      cada una de las compañías, donde he tenido la oportunidad de contribuir
      para alcanzar los objetivos de cada empresa.
    </p>

    <div class="companies">
      <img :src="resolve_img_url('logo-mo.png')" alt="MO Technologies" />
      <img :src="resolve_img_url('logo-axity.png')" alt="Axity" />
      <img :src="resolve_img_url('logo-appfuture.png')" alt="AppFuture" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Experience",
  methods: {
    resolve_img_url: function (path) {
      let images = require.context("../assets/img/", false, /\.png$|\.jpg$/);
      return images("./" + path);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixins/breakpoint";
.experience {
  margin: 7rem 2rem;
  .details {
    text-align: center;
    width: 45rem;
    max-width: 90%;
    margin: 0 auto;
  }
  .companies {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 3rem auto 2rem;

    img {
      height: 5rem;
      width: auto;
    }
  }
}

@include to(tablet-l) {
  .experience .companies {
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 25rem;
  }
}

</style>