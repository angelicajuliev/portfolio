<template>
  <svg :height="radius * 2" :width="radius * 2">
    <circle
      stroke="blue"
      fill="transparent"
      :stroke-dasharray="circumference + ' ' + circumference"
      :style="{ strokeDashoffset }"
      :stroke-width="stroke"
      :r="normalizedRadius"
      :cx="radius"
      :cy="radius"
    />
  </svg>
</template>

<script>
export default {
  name: "Progress",

  props: {
    radius: Number,
    progress: Number,
    stroke: Number,
  },
  data() {
    const normalizedRadius = this.radius - this.stroke * 2;
    const circumference = normalizedRadius * 2 * Math.PI;

    return {
      normalizedRadius,
      circumference,
    };
  },
  computed: {
    strokeDashoffset() {
      return this.circumference - this.progress / 100 * this.circumference;
    },
  },
};
</script>

<style lang="scss" scoped>
html,
body {
  background-color: #2962ff;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  position: relative;
}

circle {
  transition: stroke-dashoffset 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
}
</style>