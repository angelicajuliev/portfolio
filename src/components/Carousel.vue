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
  </section>
  <ul class="dotstyle dotstyle-scaleup">
    <li
      v-for="(item, index) in slides"
      :key="index"
      :class="{ selected: currentSlide === index }"
    >
      <a :tabindex="index" @click="currentSlide = index"> - </a>
    </li>
  </ul>
</template>

<script>
export default {
  name: "carousel",
  props: { slides: Number },
  data: () => ({ currentSlide: 0 }),
  methods: {
    resolve_img_url: function (path) {
      let images = require.context(
        "../assets/img/",
        false,
        /\.png$|\.jpg$|\.svg$/
      );
      return images("./" + path);
    },
    onPrev: function () {
      this.currentSlide -= 1;
      if (this.currentSlide < 0) {
        this.currentSlide = this.slides - 1;
      }
    },
    onNext: function () {
      this.currentSlide += 1;
      if (this.currentSlide > this.slides - 1) {
        this.currentSlide = 0;
      }
    }
  },
};
</script>

<style lang="scss" scoped>
@mixin translate-steps($width-step: 21.5rem) {
  @for $i from 0 through 10 {
    &.step#{$i} {
      transform: translateX($i * -1 * $width-step);
    }
  }
}

@keyframes ripple {
  90% {
    transform: scale(4);
    opacity: 0;
  }
  100% {
    display: none;
  }
}

.items {
  transition: transform 500ms ease-out;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;

  @include translate-steps;

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
  position: relative;
  z-index: 3;
  top: 0;
  right: 0;

  &.btn-next {
    right: 1rem;
    position: absolute;
    top: 6rem;
  }

  span.ripple {
    position: absolute; /* The absolute position we mentioned earlier */
    border-radius: 50%;
    transform: scale(0) translate(-50%, -50%);
    animation: ripple 600ms linear;
    background-color: rgba(255, 255, 255, 0.7);
    width: 3rem;
    height: 3rem;
    top: 50%;
    left: 50%;
  }
}

.carousel-mobile,
.carousel-web {
  position: relative;
  z-index: 3;
  max-width: 100vw;
  width: 25rem;
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
  height: 1.5rem;
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