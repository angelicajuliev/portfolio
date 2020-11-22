<template>
  <div class="card">
    <img :src="resolve_img_url(icon)" alt="icon card" class="icon" />
    <p class="title">
      <b>{{ title }}</b>
    </p>
    <div class="text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutCard",
  props: {
    title: String,
    icon: String,
  },
  methods: {
    resolve_img_url: function (path) {
      let images = require.context("../assets/img/", false, /\.png$|\.jpg$/);
      return images("./" + path);
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  max-width: 18rem;
  justify-content: flex-start;
  align-items: center;

  background: #ffffff;
  box-shadow: -1px 6px 4px 0 rgba(17, 5, 78, 0.5);
  border-radius: 1.8rem;
  position: relative;
  margin-bottom: 5rem;
  padding-top: 1rem;
  transition: scale 1s ease-in-out;

  &:hover {
    transform: scale(1.08);
  }

  .icon {
    position: absolute;
    top: 0;
    right: -2rem;
    transform: translateY(-50%);
    width: 5rem;
    height: 3.5rem;
  }

  p.title {
    font-size: 1.1rem;
  }

  .text {
    margin: 0 2rem 1rem;

    p {
      margin-bottom: 1.5rem;
    }
  }
}
</style>