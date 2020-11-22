<template>
  <section class="contact-form">
    <div class="card">
      <img
        :src="resolve_img_url('contact-girl.png')"
        alt="decoration"
        class="decoration"
      />
      <h2>Contáctame</h2>
      <article class="contact">
        <div class="item">
          <img :src="resolve_img_url('logo-linkedin.png')" alt="in" />
          <p>@angelicajulieth</p>
        </div>
        <div class="item">
          <img :src="resolve_img_url('logo-github.png')" alt="@" />
          <p>@angelicajuliev</p>
        </div>
        <div class="item">
          <img :src="resolve_img_url('icon-mail.png')" alt="@" />
          <p>angelica.julieth@hotmail.com</p>
        </div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactForm",
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
.contact-form {
  padding: 8rem 4rem 3rem;
  margin-top: 4rem;
  text-align: center;
  background-size: cover;
  background-position: top right;
  background-image: url("../assets/img/contact-form-bg.png");
  h2 {
    text-align: center;
  }

  .card {
    background: #ffffff;
    max-width: 1024px;
    margin: 4rem auto 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    min-height: 35rem;
    position: relative;

    .decoration {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 60%;
      height: auto;
      max-height: 31rem;
      max-width: 32rem;
    }

    .contact {
      align-self: flex-end;
      width: 45%;
      position: relative;
      margin-top: 4rem;
      .item {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 1.5rem;
        img {
          width: 2.5rem;
          height: auto;
          margin-right: 1rem;
        }
      }
    }
  }
  @include to(tablet-l) {
    min-height: none;
    .decoration {
      display: none;
    }
    .card {
      padding: 0 2rem;
      .contact {
        width: 100%;
      }
    }
  }
}
</style>