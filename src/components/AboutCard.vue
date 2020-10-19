<template>
  <div class="card">
    <img :src="resolve_img_url(icon)" alt="icon card" />
    <p>
      <b>{{ title }}</b>
    </p>
    <ul>
      <slot></slot>
    </ul>
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
      let images = require.context('../assets/img/', false, /\.png$|\.jpg$/)
      return images("./"+path)
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  max-width: 18rem;
  justify-content: center;
  align-items: center;

  li {
      margin-bottom: 1.5rem;
  }
  
}
</style>