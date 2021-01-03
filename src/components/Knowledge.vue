
<template>
  <section class="skill-container">
    <h2>Conocimientos</h2>

    <div class="content">
      <img
        :src="resolve_img_url('skills.png')"
        alt="decoration"
        class="decoration"
      />

      <div class="content__carousel">
        <KnowledgeCarousel />
      </div>
    </div>
  </section>
</template>

<script>
import KnowledgeCarousel from "./KnowledgeCarousel";
export default {
  name: "Knowledge",
  components: {
    KnowledgeCarousel,
  },
  methods: {
    resolve_img_url: function (path) {
      let images = require.context("../assets/img/", false, /\.png$|\.jpg$/);
      return images("./" + path);
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/mixins/breakpoint";

.skill-container {
  margin: 1rem auto;

  .subtitle {
    margin-top: 2.5rem;
  }

  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 3rem auto 5rem;

    .decoration {
      max-width: 50%;
    }
    &__carousel {
      max-width: 40%;
    }
    .info {
      padding: 2rem 1rem 1rem 4rem;
    }
  }

  @include to(tablet-l) {
    .content {
      justify-content: center;
      .decoration {
        display: none;
      }
      &__carousel {
        max-width: 70%;
      }
    }
  }
}
</style>