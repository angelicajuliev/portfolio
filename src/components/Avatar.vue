<template>
  <div class="avatar">
    <div class="head">
      <div class="hairstyle">
        <img src="@assets/img/avatar-hair.png" alt="pigtail" />
      </div>
      <div class="hair">
        <div class="bow"></div>
        <div class="bang-left"></div>
        <div class="bang-right"></div>
      </div>
      <div class="face">
        <div class="eyebrow-left"></div>
        <div class="eyebrow-right"></div>
        <div class="glass-left"></div>
        <div class="glass-right"></div>
        <div class="eye-left">
          <div class="ilumation"></div>
          <div class="close"><span></span></div>
        </div>
        <div class="eye-right">
          <div class="ilumation"></div>
          <div class="close"><span></span></div>
        </div>
        <div class="cheek-left"></div>
        <div class="cheek-right"></div>
        <div class="nose"></div>
        <div class="mouth">
          <div class="teeth">
            <div class="brackets">
              <div class="bracket"></div>
              <div class="bracket"></div>
              <div class="bracket"></div>
              <div class="bracket"></div>
            </div>
          </div>
          <div class="tongue"></div>
        </div>
      </div>
      <div class="ear-left"></div>
      <div class="ear-right">
        <div class="earring"></div>
        <div class="earring-1"></div>
      </div>
    </div>
    <div class="body">
      <div class="neck"></div>
      <div class="chest">
        <div class="necklace"></div>
      </div>
      <div class="clothes">
        <div class="neck-skirt">
          <div class="neck-left"></div>
          <div class="neck-right"></div>
        </div>
        <div class="shoulder-left"></div>
        <div class="shoulder-right"></div>
        <div class="arm-left">
          <div class="hand-left">
            <div class="palm"></div>
            <div class="finger-1"></div>
            <div class="finger-2"></div>
            <div class="finger-3"></div>
            <div class="finger-4"></div>
            <div class="finger-5"></div>
          </div>
        </div>
        <div class="arm-right">
          <div class="hand-right">
            <div class="palm"></div>
            <div class="finger-1"></div>
            <div class="finger-2"></div>
            <div class="finger-3"></div>
            <div class="finger-4"></div>
            <div class="finger-5"></div>
          </div>
        </div>
        <div class="boob-left"></div>
        <div class="boob-right">
          <!-- <div class="shield"></div> -->
        </div>
        <div class="trunk"></div>
        <div class="trunk-2"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Avatar",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$bg-color: #fff;
$color-skin: #ffc192;
$color-skin-dark: #f5b889;
$color-hair: #0a0707;
$color-glasses: #000;
$color-eyes: #693731;
$color-clothes: #11054e;
$color-shirt: #11054e;
$color-nails: #2a00d7;
/*
$color-clothes: #0F084B;
$color-shirt: #0F084B; 
$color-nails: #0D0221;
*/

/* Color Theme Swatches in Hex */
.Alexandrite-Purple-Shades-1-hex {
  color: #3803fa;
}
.Alexandrite-Purple-Shades-2-hex {
  color: #2a00d7;
}
.Alexandrite-Purple-Shades-3-hex {
  color: #7345ff;
}
.Alexandrite-Purple-Shades-4-hex {
  color: #11054e;
}
.Alexandrite-Purple-Shades-5-hex {
  color: #6b3dff;
}

.avatar {
  font-size: 7px;
  padding: 2em 1em 0em;
  background: white;
  width: 41em;
  clip-path: circle(50%);
  position: relative;
  // background-color: rgba($color: $bg-color, $alpha: 0.3);
}

.head {
  position: relative;
  padding: 3em;
  padding-bottom: 0;
  width: 15em;
  margin: 2em auto 0;
  left: -1em;
  z-index: 1;
  animation: head-move 6s ease-in 0s infinite;
  // animation: head-dance 1s linear infinite;

  .hair {
    position: absolute;
    top: 0.5em;
    left: 1.2em;
    border-radius: 50% / 60% 60% 40% 40%;
    width: 18.5em;
    height: 17em;
    background-color: $color-hair;

    .waves {
      width: 26em;
      transform: rotate(94deg);
      z-index: 99999;
      position: absolute;
      top: 8em;
      left: 7.85em;
      z-index: 2;
    }
    .waves-2 {
      width: 18em;
      transform: rotate(89deg);
      z-index: 0;
      position: absolute;
      top: 10em;
      left: 7em;
    }

    @mixin bang {
      background-color: $color-hair;
      position: absolute;
      z-index: 3;
      //border-radius: 100% 0 / 140px 0px;
      border-radius: 0 100%;
      width: 8.5em;
      height: 8em;
      top: 0.6em;
    }

    .bang-left {
      @include bang;
      top: 0.7em;
      left: 1.9em;
      width: 6.5em;
      height: 8em;
      transform: rotate(90deg);
    }
    .bang-right {
      @include bang;
      right: 0.7em;
      top: 0.9em;
      transform: rotate(-10deg);
    }

    .bow {
      position: absolute;
      top: 1.2em;
      left: 79%;
      width: 6em;
      height: 3em;
      background-color: transparent;
      transform: translateX(-50%) rotate(42deg);
      border-radius: 50% / 50%;
      border-bottom: 3px solid $color-clothes;
      z-index: 4;

      &:before {
        content: "\2764";
        text-decoration: none;
        font-size: 2em;
        color: inherit;
        -webkit-text-fill-color: $color-clothes;
        outline-color: $color-clothes;
        position: absolute;

        bottom: -0.3em;
        left: -0.3em;
        transform: rotate(23deg);
      }
    }
  }

  .hairstyle {
    background-color: #000;
    position: absolute;
    top: -0.5em;
    right: -1.5em;
    width: 9em;
    height: 6em;
    border-radius: 50%;
    z-index: 0;

    img {
      width: 8.5em;
      position: relative;
      top: 4em;
      left: 0.6em;
      z-index: -1;
    }
  }

  .face {
    position: relative;
    background-color: $color-skin;
    width: 15em;
    height: 16em;
    border-radius: 50% / 20% 24% 60% 60%;
    padding-top: 2em;

    @mixin eyebrow {
      position: absolute;
      top: 30%;
      border-bottom: 0.3em solid transparent;
      width: 0;
      height: 0.5em;
      &:after {
        content: "";
        position: absolute;
        top: 2px;
        width: 0;
        height: 0;
        border-bottom: 0.6em solid black;
      }
    }
    .eyebrow-left {
      @include eyebrow;
      left: 3em;
      transform: rotate(5deg);
      border-right: 3.5em solid #150d0e;
      border-bottom-right-radius: 0.4em;
      border-top-right-radius: 0.3em;

      &:after {
        left: -1.6em;
        transform: rotate(-16deg);
        border-left: 1.7em solid transparent;
        border-right: 0.5em solid transparent;
      }
    }
    .eyebrow-right {
      @include eyebrow;
      right: 3em;
      transform: rotate(-5deg);
      border-left: 3.5em solid #150d0e;
      border-bottom-left-radius: 0.4em;
      border-top-left-radius: 0.3em;
      &:after {
        right: -1.6em;
        transform: rotate(16deg);
        border-right: 1.7em solid transparent;
        border-left: 0.5em solid transparent;
      }
    }

    @mixin eye {
      position: absolute;
      top: 37%;
      width: 3em;
      height: 3em;
      background-color: #fff;
      //      box-shadow: -2px -2px #888787, 1px 1px #888787;
      overflow: hidden;
      border-top: 0.4em solid #000;
      border-left: 0.4em solid #000;
      border-bottom: 1px solid #000;
      border-right: 1px solid #000;

      .close {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 5em;
        height: 100%;
        transform: translate(-50%, -50%) rotate(-45deg);
        z-index: 9;

        span {
          display: block;
          width: 100%;
          height: 0;
          background: $color-skin;
          border-radius: 0 0 60% 60%;
          border-bottom: 0.1em solid #000;
          animation: blink 4s ease-in infinite;
        }
      }

      .ilumation {
        content: "";
        background-color: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        width: 0.5em;
        height: 0.5em;
        position: absolute;
        top: 50%;
        left: 1em;
        transform: translate(-50%, -50%);
      }

      &::before {
        content: "";
        background-color: #693731;
        border: 1px solid #000;
        border-radius: 50%;
        width: 2em;
        height: 2em;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
      &::after {
        content: "";
        background-color: #221823;
        border-radius: 50%;
        width: 1em;
        height: 1em;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .eye-left {
      @include eye;
      left: 2.2em;
      border-top: 2px solid #000;
      border-radius: 75% 0 70% 30%;
      transform: rotate(47deg);
      animation: blink-makeup-left 4s ease-in infinite;
    }
    .eye-right {
      @include eye;
      top: 36.2%;
      border-radius: 75% 30% 70% 0;
      transform: rotate(40deg);
      right: 2.2em;
      border-left: 2px solid #000;
      animation: blink-makeup-right 4s ease-in infinite;
    }

    @mixin glass {
      border: 2px solid $color-glasses;

      width: 5.5em;
      height: 3.5em;
      position: absolute;
      top: 36%;
      background-color: transparent;
      z-index: 10;
    }

    .glass-left {
      @include glass;
      left: 1em;
      border-radius: 0% 30% 40% 50% / 0% 20% 40% 50%;

      &:after {
        content: "";
        position: absolute;
        top: 52%;
        right: -1.7em;
        width: 1.7em;
        border-bottom: 3px solid $color-glasses;
      }
    }

    .glass-right {
      @include glass;
      right: 1em;
      border-radius: 30% 0 50% 40% / 20% 0% 50% 40%;
    }

    .nose {
      position: absolute;
      top: 62%;
      left: 50%;
      transform: translateX(-50%);
      border-top: 2px solid #bb6d4a;
      width: 1.2em;
      height: 1em;
      border-radius: 50%;
      z-index: 3;
    }

    @mixin cheek {
      position: absolute;
      top: 61%;
      background-color: #d49a99;
      opacity: 0.3;
      border-radius: 50%;
      width: 3em;
      height: 1.3em;
    }
    .cheek-left {
      @include cheek;
      left: 1.5em;
    }
    .cheek-right {
      @include cheek;
      right: 1.5em;
    }

    .mouth {
      position: relative;
      width: 5em;
      height: 5em;
      top: 57%;
      left: 50%;
      transform: translateX(-50%);
      background-color: $color-skin;
      /*border-radius: 50% / 0 0 100% 100%;*/
      border-radius: 50%;
      clip-path: circle(50% at 50% 50%);
      z-index: 2;

      .brackets {
        position: absolute;
        width: 86%;
        height: 0.4em;
        background-color: transparent;
        top: 0.2em;
        left: 7%;
        display: flex;
        justify-content: space-between;

        &:before {
          content: "";
          position: absolute;
          top: 50%;
          width: 100%;
          left: 0;
          border-bottom: 1px solid #c5c5c5;
        }

        .bracket {
          width: 0.4em;
          height: 0.4em;
          background-color: #1a41e2;
          position: relative;

          &:before {
            content: "x";
            position: absolute;
            color: #c5c5c5;
            top: -3px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 0.6em;
            font-weight: bold;
          }
        }
      }

      &:before {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        //background-color: red;
        background-color: #000;
        width: 100%;
        height: 50%;
      }
      .teeth {
        position: relative;
        background-color: #fff;
        top: 50%;
        left: 0;
        width: 100%;
        height: 0.8em;
        z-index: 1;
      }

      .tongue {
        position: absolute;
        background-color: #ec4351;
        bottom: 0;
        left: 52%;
        width: 3em;
        height: 2em;
        transform: translate(-50%, 50%);
        border-radius: 50%;
        z-index: 1;
      }
    }
  }

  @mixin ear {
    position: absolute;
    top: calc(50% + 0.2em);
    background-color: $color-skin;
    width: 2em;
    height: 3.5em;
    border-radius: 50%;
    z-index: 4;

    &::after {
      content: "";
      position: absolute;
      bottom: 0.2em;
      left: 50%;
      transform: translateX(-50%);

      width: 0.5em;
      height: 0.5em;
      background-color: #000;
      border-radius: 50%;
      box-shadow: inset -2px 0px 0 0px #999;
    }
  }

  @mixin earring {
    position: absolute;
    width: 0.3em;
    height: 0.3em;
    background-color: #000;
    border-radius: 50%;
    right: 0.2em;
    top: 1.3em;
  }

  .ear-left {
    @include ear;
    left: 1.6em;
    transform: rotate(-10deg);
  }

  .ear-right {
    @include ear;
    right: 1.6em;
    transform: rotate(10deg);

    .earring {
      @include earring;

      &:before {
        content: "";
        @include earring();
        right: 0em;
        top: 0.5em;
      }
      &:after {
        content: "";
        @include earring();
        right: 0.2em;
        top: 1em;
      }
    }
    .earring-1 {
      @include earring;
      right: 0.3em;
      top: 0.7em;
    }
  }
}

.body {
  position: relative;
  width: 21em;
  height: 18em;
  margin: 0 auto;
  left: -1em;
  .neck {
    height: 0;
    width: 1em;
    background-color: tranparent;
    position: absolute;
    top: -2.1em;
    left: 7.8em;
    border-left: 2em solid transparent;
    border-right: 2em solid transparent;
    border-bottom: 4em solid $color-skin;
    z-index: 0;
  }

  .chest {
    height: 6em;
    width: 6em;
    margin-left: 7.5em;
    border-radius: 0% 0% 52% 50% / 0% 0% 65% 64%;
    background-color: $color-skin;
    position: absolute;
    top: 1.1em;
    z-index: 3;

    .necklace {
      height: 3.1em;
      width: 4.4em;
      border-radius: 0% 0% 50% 49%/0% 0% 100% 100%;
      position: absolute;
      top: 0;
      left: 0.6em;
      border: 1px solid #000;
      border-top: 0;

      &:after {
        content: "";
        position: absolute;
        bottom: -0.5em;
        left: calc(50% - 0.5em);
        width: 1em;
        height: 1em;
        border-radius: 50%;
        background-color: #000;
        box-shadow: inset -4px 0px 0 0px #999;
      }
    }
  }

  .clothes {
    position: absolute;
    top: 1.1em;
    right: 0;
    left: 0;

    .neck-skirt {
      height: 8em;
      width: 8.5em;
      background-color: transparent;
      position: absolute;
      top: 0;
      left: 6.2em;
      overflow: hidden;
      z-index: 5;

      @mixin neck {
        width: 3em;
        height: 10em;
        background-color: $color-shirt;
        position: absolute;
        top: -1em;
      }
      .neck-left {
        @include neck;
        left: 0;
        transform: rotate(-19deg);
      }
      .neck-right {
        @include neck;
        right: 0;
        transform: rotate(19deg);
      }
    }

    @mixin shoulder {
      width: 7em;
      height: 3em;
      border-radius: 50%;
      background-color: $color-shirt;
      position: absolute;
      top: 0;
      z-index: 2;

      //      animation: shoulder-dance 1s lin
    }

    .shoulder-left {
      @include shoulder;
      left: 3em;
      animation-delay: 500ms;
    }
    .shoulder-right {
      @include shoulder;
      right: 3em;
    }

    @mixin arm {
      width: 4em;
      height: 11.5em;
      background-color: $color-shirt;
      position: absolute;
      top: 0.5em;
      z-index: 5;
      // animation: arm-dance 1s linear infinite;

      &::before {
        content: "";
        width: 3em;
        height: 3em;
        border-radius: 50%;
        background-color: $color-shirt;
        position: absolute;
        top: 9.2em;
      }
      &::after {
        content: "";
        width: 3.2em;
        height: 11em;
        background-color: $color-shirt;
        position: absolute;
        border-radius: 50%;
        transform: rotate(140deg);
        top: 2.4em;
      }
    }

    .arm-left {
      @include arm;
      left: 0.1em;
      top: -1.2em;
      transform: rotate(42deg);
      border-radius: 50% 0;
      animation-delay: 500ms;

      &:before {
        left: 0em;
      }
      &:after {
        left: 3.8em;
        top: 5em;
        transform: rotate(78deg);
      }
    }
    .arm-right {
      @include arm;
      right: 0.5em;
      transform: rotate(-18deg);
      border-radius: 0 50%;
      &:before {
        right: -0.1em;
      }
      &:after {
        right: -3.9em;
        animation: arm-right-move 6s ease-in 0s infinite;
        transform: rotate(-135deg);
      }
    }

    @mixin finger {
      width: 1em;
      height: 3em;
      position: absolute;
      background-color: #ffc192;
      border-radius: 50%;
      top: -0.4em;
    }

    @mixin nail {
      content: "";
      position: absolute;
      right: 0.22em;
      background-color: $color-nails;
      width: 0.6em;
      height: 0.6em;
      border-radius: 70% 70% 0 0;
      transform: rotate(6deg);
    }

    @mixin hand {
      position: absolute;
      top: 2em;
      transform: rotate(-29deg);
      z-index: 3;

      .palm {
        width: 3.3em;
        height: 4em;
        position: absolute;
        top: -0.1em;
        background-color: #ffc192;
        border-radius: 50%;
        left: 0.1em;
        transform: rotate(-19deg);
      }

      .finger-1 {
        @include finger;
        left: -0.7em;
        transform: rotate(-31deg);
      }
      .finger-2 {
        @include finger;

        top: -1.3em;
        left: 0;
        transform: rotate(-25deg);
      }
      .finger-3 {
        @include finger;
        height: 3.2em;
        top: -2em;
        left: 1em;
        transform: rotate(-13deg);
      }
      .finger-4 {
        @include finger;
        top: -1.6em;
        left: 2.2em;
        transform: rotate(-2deg);
      }
      .finger-5 {
        @include finger;
        width: 1.2em;
        height: 2.5em;
        top: 0em;
        left: 3em;
        transform: rotate(29deg);
      }
    }
    .hand-left {
      @include hand;
      top: auto;
      bottom: 4em;
      left: 11.8em;
      z-index: 1;
      transform: rotate(94deg);

      .finger-1 {
        &::before {
          @include nail;
          top: 0.05em;
          right: 0.2em;
        }
      }
      .finger-2 {
        &::before {
          @include nail;
          top: 0.05em;
          right: 0.2em;
        }
      }
      .finger-3 {
        &::before {
          @include nail;
          top: 0.05em;
          right: 0.2em;
        }
      }
      .finger-4 {
        &::before {
          @include nail;
          top: 0.05em;
          right: 0.2em;
          transform: rotate(-5deg);
        }
      }

      .finger-5 {
        background-color: transparent;
      }
    }
    .hand-right {
      @include hand;
      animation: hand-right-move 6s ease-in 0s infinite;
      top: 1.8em;
      right: -8em;
      transform: rotate(75deg);

      .palm {
        width: 3.1em;
        height: 3.7em;
        left: -0.1em;
      }

      .finger-1 {
        top: -0.6em;
        left: -0.9em;
        transform: rotate(-44deg);
      }

      .finger-3 {
        background-color: $color-skin-dark;
        height: 2.5em;
        top: -0.1em;
        left: 1em;
        transform: rotate(-13deg);
      }

      .finger-4 {
        background-color: $color-skin-dark;
        height: 2.5em;
        top: 0.1em;
        left: 2em;
        transform: rotate(-15deg);

        &:before {
          content: "";
          @include nail;
          bottom: 0.2em;
          border-radius: 0 0 70% 70%;
        }
      }

      .finger-5 {
        background-color: $color-skin-dark;
        top: 1em;
        left: 0.9em;
        transform: rotate(50deg);

        &:before {
          content: "";
          @include nail;
          top: 0.2em;
        }
      }
    }

    @mixin boob {
      background-color: $color-shirt;
      width: 5.5em;
      height: 5.5em;
      border-radius: 50%;
      position: absolute;
      top: 3.6em;
    }

    .boob-left {
      @include boob;
      left: 4.1em;
    }
    .boob-right {
      @include boob;
      right: 3.8em;

      .shield {
        position: absolute;
        top: 2em;
        left: 0.8em;
        width: 2em;
        height: 2em;
        background-image: url(https://upload.wikimedia.org/wikipedia/commons/c/c1/Escudo_de_Millonarios_temporada_2000-2002.png);
        z-index: 999;
        background-size: cover;
        transform: translate(-50%);
      }
    }
    .trunk {
      width: 7.5em;
      height: 0;
      position: relative;
      left: 4.3em;
      top: 2.5em;
      border-top: 13em solid $color-shirt;
      border-left: 2.5em solid transparent;
      border-right: 2.5em solid transparent;
      z-index: 0;
    }
    .trunk-2 {
      width: 3.6em;
      height: 0;
      position: relative;
      left: 4.3em;
      bottom: 9em;
      border-bottom: 13em solid $color-shirt;
      border-left: 4.5em solid transparent;
      border-right: 4.5em solid transparent;
      z-index: 0;
    }
  }
}

@keyframes blink {
  0% {
    height: 100%;
  }

  5%,
  100% {
    height: 0;
  }
}

@keyframes blink-makeup-left {
  0% {
    border-top-width: 0;
    border-left-width: 0;
  }

  5%,
  100% {
    border-top-width: 0.14em;
    border-left-width: 0.4em;
  }
}

@keyframes blink-makeup-right {
  0% {
    border-top-width: 0;
    border-left-width: 0;
  }

  5%,
  100% {
    border-top-width: 0.4em;
    border-left-width: 0.14em;
  }
}

@keyframes shoulder-dance {
  0% {
    top: -0.3em;
  }
  100% {
    top: 0;
  }
}

@keyframes arm-dance {
  0% {
    top: 0.2em;
  }
  100% {
    top: 0.7em;
  }
}
@keyframes head-dance {
  0% {
    transform: rotateZ(2deg);
  }
  100%,
  40% {
    transform: rotateZ(0);
  }
}

@keyframes head-move {
  0% {
    transform: rotate(0);
  }
  20% {
    transform: rotate(2deg);
  }
  30%,
  100% {
    transform: rotate(0deg);
  }
}
@keyframes arm-right-move {
  0% {
    transform: rotate(-135deg);
  }
  20% {
    transform: rotate(-139deg);
  }
  30%,
  100% {
    transform: rotate(-135deg);
  }
}

@keyframes hand-right-move {
  0% {
    top: 1.8em;
    right: -8em;
    transform: rotate(75deg);
  }
  20% {
    top: 1.5em;
    right: -7.5em;
    transform: rotate(58deg);
  }
  30%,
  100% {
    top: 1.8em;
    right: -8em;
    transform: rotate(75deg);
  }
}
</style>