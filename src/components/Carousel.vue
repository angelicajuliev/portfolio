<template>
  <section class="carousel-mobile">
    <img
      :src="resolve_img_url('arrow-left.png')"
      alt="anterior"
      class="btn-arrow"
      @click="onPrev"
    />

    <div :class="'items step' + (currentSlide + 1)">
      <slot></slot>
    </div>

    <img
      :src="resolve_img_url('arrow-right.png')"
      alt="siguiente"
      class="btn-arrow btn-next"
      @click="onNext"
    />
    <ul class="dotstyle dotstyle-scaleup">
      <li
        v-for="(item, index) in slides"
        :key="index"
        :class="{ selected: currentSlide === index }"
      >
        <a :tabindex="index" @click="onClickSlide(i)"> - </a>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "carousel",
  props: { slides: Number },
  data: () => ({ currentSlide: 1 }),
  methods: {
    resolve_img_url: function (path) {
      let images = require.context("../assets/img/", false, /\.png$|\.jpg$|\.svg$/);
      return images("./" + path);
    },
    onPrev: function () {
      this.currentSlide -= 1;
    },
    onNext: () => {
      this.currentSlide += 1;
    },
    onClickSlide: () => {
      this.currentSlide = 1;
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin translate-steps($width-step: 33rem) {
  $first-step: 0;
  $second-step: -1 * $width-step;
  $third-step: -2 * $width-step;
  $fourth-step: -3 * $width-step;
  $fifth-step: -4 * $width-step;

  &.step1 {
    transform: translateX($first-step);
  }
  &.step2 {
    transform: translateX($second-step);
  }
  &.step3 {
    transform: translateX($third-step);
  }
  &.step4 {
    transform: translateX($fourth-step);
  }
  &.step5 {
    transform: translateX($fifth-step);
  }
}

.items {
  transition: transform 500ms ease-out;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @include translate-steps(22rem);

    & + ul {
      position: absolute;
      top: 30rem;
      left: 50%;
      transform: translateX(-50%);
    }
}

.overflow-hidden {
  overflow: hidden;
}

.btn-arrow {
  width: 3rem;
  height: auto;
  // position: absolute;
  z-index: 3;
  top: 15rem;

  &.btn-next {
    right: 0.5rem;
  }
}

.btn-extra {
  position: relative;
  bottom: 7rem;
}

.buttons.right {
  text-align: right;
  .btn {
    left: auto;
    right: 8%;
  }
}

.carousel-mobile,
.carousel-web {
  position: relative;
  z-index: 3;
  max-width: 100vw;
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

.carousel-mobile.absolute .dotstyle {
  position: absolute;
  top: 35.5rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}

ul.dotstyle {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 0;
  margin-bottom: 2rem;
  padding: 0;
  list-style: none;
  cursor: default;
  user-select: none;
}

.dotstyle li {
  position: relative;
  display: block;
  float: left;
  margin: 0 0.2rem;
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
}

.dotstyle li a {
  top: 0;
  left: 0;
  width: 1.5rem;
  height: 0.5rem;
  outline: none;
  border-radius: 50%;
  background-color: #c7c6c6;
  color: transparent;
  display: block;
  cursor: pointer;
  position: absolute;
  line-height: 0;
  transform: scale(0.5);
}

.dotstyle li a:focus {
  outline: none;
}

.dotstyle-scaleup li a {
  -webkit-transition: -webkit-transform 0.3s ease, background-color 0.3s ease;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.dotstyle-scaleup li a:hover,
.dotstyle-scaleup li a:focus {
  background-color: #d8d8d8;
}

.dotstyle-scaleup li.selected a {
  background-color: #919191;
  transform: scale(0.6);
}
</style>