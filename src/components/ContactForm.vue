<template>
  <section class="contact-form">
    <div class="card">
      <h2>Contáctame</h2>
      <article class="contact">
        <img
          :src="resolve_img_url('contact-girl.png')"
          alt="decoration"
          class="decoration"
        />
        <div class="items">
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

    .contact {
      align-self: flex-end;
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: row;

      .decoration {
        position: relative;
        width: 60%;
        height: auto;
        max-height: 31rem;
        max-width: 32rem;
        margin-left: 3rem;
      }
      .items {
        margin-left: -4rem;
        position: relative;
        margin-top: 3rem;
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