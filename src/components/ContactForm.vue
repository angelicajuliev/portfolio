<template>
  <section class="contact-form">
    <div class="card">
      <h2>Contáctame</h2>
      <article class="contact">
        <img
          :src="resolve_img_url('contact-girl2.png')"
          alt="decoration"
          class="decoration"
        />
        <div class="items">
          <a
            class="item"
            href="https://www.linkedin.com/in/angelicajulieth/?locale=en_US"
          >
            <img :src="resolve_img_url('logo-linkedin.png')" alt="in" />
            <p>@angelicajulieth</p>
          </a>
          <a class="item" href="https://github.com/angelicajuliev">
            <img :src="resolve_img_url('logo-github.png')" alt="@" />
            <p>@angelicajuliev</p>
          </a>
          <a class="item">
            <img :src="resolve_img_url('icon-mail.png')" alt="@" />
            <p>angelica.julieth@hotmail.com</p>
          </a>
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

    min-height: 30rem;
    position: relative;

    .contact {
      width: 100%;
      position: relative;
      top: -3rem;
      right: -2rem;

      .decoration {
        position: relative;
        width: 70%;
        height: auto;
        max-height: 31rem;
        max-width: 42rem;
        margin-left: 3rem;
      }
      .items {
        height: fit-content;
        position: absolute;
        bottom: 0rem;
        z-index: 99;
        left: 25%;
      }
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
    padding: 2rem 4rem 1rem;
    .decoration {
      display: none;
    }
    .card {
      min-height: 21rem;
      padding: 0 2rem;
      .contact {
        width: 100%;
      }
    }
    .items {
      position: relative;
      left: 0 !important;
      top: 4rem;
    }
  }
}
</style>