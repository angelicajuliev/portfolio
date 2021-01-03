<template>
  <transition name="front">
    <div class="card" v-if="!showDetails" @click="showDetails = !showDetails">
      <div class="front">
        <Progress radius="60" :progress="progress" stroke="4" />
        <img class="logo" :src="resolve_img_url(icon)" :alt="title" />
        <div class="progress" :style="{ width: knowledge }">
          <small>{{ knowledge }} </small>
        </div>
      </div>
    </div>
  </transition>

  <transition name="front">
    <div
      class="card back"
      v-if="showDetails"
      @click="showDetails = !showDetails"
    >
      <ul>
        <slot></slot>
      </ul>
    </div>
  </transition>
</template>

<script>
import Progress from "./Progress";
export default {
  name: "SkillCard",
  components: {
    Progress
  },
  data: () => {
    return {
      showDetails: false,
      progress: 20
    };
  },
  props: {
    title: String,
    icon: String,
    knowledge: Number,
    show: Boolean,
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
@import "../assets/scss/mixins/breakpoint";
.card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 33%;
  height: 13rem;
  max-width: 13rem;

  background: #ffffff;
  box-shadow: 0px 6px 4px 0 rgba(17, 5, 78, 0.3);
  border-radius: 1.8rem;
  padding: 1.5rem 2rem;
  margin-bottom: 2rem;

  &.back {
    justify-content: flex-start;
  }

  .front {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 8rem;
    .logo {
      height: 5rem;
      width: auto;
    }
  }

  .progress {
    border: 1px solid rgba(17, 5, 78, 0.7);
    border-radius: 1px;
    font-size: 10px;
    text-align: center;
    width: 80%;
    position: relative;
    height: 1rem;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 50%;
      background-image: linear-gradient(
        90deg,
        #ffffff 0%,
        rgba(107, 61, 255, 0.12) 100%
      );
    }
  }

  li {
    margin-bottom: 1.5rem;
  }
}

.front-enter-active,
.front-leave-active {
  transition: transform 500ms ease;
}

.front-enter-from,
.front-leave-to {
  transform: rotateY(90deg);
}

.front-leave-to {
  display: none;
}
.front-leave-from {
  display: flex;
}

.from-enter-to {
  transition-delay: 501ms;
}

@include to(tablet-l) {
  .card {
    width: 100%;
    flex: 1;
    max-height: 14rem;
    min-height: 13rem;
    padding: 1rem 2rem 1rem;
  }
}
</style>