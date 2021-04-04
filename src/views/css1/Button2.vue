<template>
  <div class="content-container">
    <h3>button 样式</h3>
    <div class="btn-group">
      <button>浏览器默认样式</button>
      <button class="button"
              @mouseenter="handleButtonIn"
              @mouseleave="handleButtonOut"
              ref="button"
              :class="{in:inButton,out:outButton}">
        <div>
          <template>
            <span v-for="(item,index) in spanLists" :style="{'--move':item.move,'--rotate':item.rotate,'--part':item.part}" :key="index">{{ item.letter }}</span>
          </template>
        </div>

      </button>
      <div class="test"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Button2',
  props: {},
  data() {
    return {
      inButton: false,
      outButton: true,
      spanLists: []
    }
  },
  methods: {
    handleButtonOut() {
      this.outButton = true
      setTimeout(() => {
        this.outButton = false
        this.inButton = false
      }, 950)
    },
    handleButtonIn() {
      this.outButton = false
      this.inButton = true
    },
    createElements(letter, index, array) {
      let part = (index >= array.length / 2) ? -1 : 1
      let position = (index >= array.length / 2) ? array.length / 2 - index + (array.length / 2 - 1) : index
      let move = position / (array.length / 2)
      let rotate = 1 - move
      this.spanLists.push({letter, rotate,move,part})
      // element.style.setProperty('--move', move);
    }
  },
  mounted() {
    "button".split('').forEach(this.createElements);
  }
}
</script>
<style>

</style>
<style lang="scss" scoped>
.btn-group {
  @include flexbox();
  flex-wrap: wrap;
  min-height: 150px;
}


.button {
  &.alternative {
    --color-hover: #2B3044;
    --background: #362A89;
    --hover-back: #6D58FF;
    --hover-front: #F6F8FF;
  }

  &.simple {
    --background: #275EFE;
    --background-hover: #1749DB;
  }
}

.button {
  --color: #fff;
  --color-hover: var(--color);
  --background: #2B3044;
  --background-hover: var(--background);
  --hover-back: #6D58FF;
  --hover-front: #5C86FF;
  padding: 8px 28px;
  border-radius: 20px;
  line-height: 24px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: .02em;
  border: none;
  outline: none;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  -webkit-mask-image: -webkit-radial-gradient(white, black);
  color: var(--c, var(--color));
  background: var(--b, var(--background));
  transition: color .2s linear var(--c-d, .2s), background .3s linear var(--b-d, .2s);

  &:not(.simple) {
    &:before,
    &:after {
      content: '';
      position: absolute;
      background: var(--pb, var(--hover-back));
      top: 0;
      left: 0;
      right: 0;
      height: 200%;
      border-radius: var(--br, 40%);
      transform: translateY(var(--y, 50%));
      transition: transform var(--d, .4s) ease-in var(--d-d, 0s), border-radius .5s ease var(--br-d, .08s);

    }

    &:after {
      --pb: var(--hover-front);
      --d: .44s;
    }
  }

  div {
    z-index: 1;
    position: relative;
    display: flex;

    span {
      display: block;
      backface-visibility: hidden;
      transform: translateZ(0);
      animation: var(--name, none) .7s linear forwards 18s;
    }
  }

  &.in {
    --name: move;

    &:not(.out) {
      --c: var(--color-hover);
      --b: var(--background-hover);

      &:before,
      &:after {
        --y: 0;
        --br: 5%;
      }

      &:after {
        --br: 10%;
        --d-d: .02s;
      }
    }

    &.out {
      --name: move-out;

      &:before {
        --d-d: .06s;
      }
    }
  }
}

@keyframes move {
  30%,
  36% {
    transform: translateY(calc(-12px * var(--move))) translateZ(0) rotate(calc(-13deg * var(--rotate) * var(--part)));
  }
  50% {
    transform: translateY(calc(6px * var(--move))) translateZ(0) rotate(calc(6deg * var(--rotate) * var(--part)));
  }
  70% {
    transform: translateY(calc(-4px * var(--move))) translateZ(0) rotate(calc(-3deg * var(--rotate) * var(--part)));
  }
}

@keyframes move-out {
  30%,
  36% {
    transform: translateY(calc(12px * var(--move))) translateZ(0) rotate(calc(13deg * var(--rotate) * var(--part)));
  }
  50% {
    transform: translateY(calc(-6px * var(--move))) translateZ(0) rotate(calc(-6deg * var(--rotate) * var(--part)));
  }
  70% {
    transform: translateY(calc(4px * var(--move))) translateZ(0) rotate(calc(3deg * var(--rotate) * var(--part)));
  }
}

html {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
}

* {
  box-sizing: inherit;

  &:before,
  &:after {
    box-sizing: inherit;
  }
}

// Center & dribbble
body {
  min-height: 100vh;
  display: flex;
  font-family: 'Inter UI', 'Inter', Arial;
  justify-content: center;
  align-items: center;
  background: #E1E6F9;
  @media(max-width: 440px) {
    flex-direction: column;
  }

  .button {
    display: block;
    margin: 0 8px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    @media(max-width: 440px) {
      margin: 8px 0;
    }
  }

  .dribbble {
    position: fixed;
    display: block;
    right: 20px;
    bottom: 20px;

    img {
      display: block;
      height: 28px;
    }
  }

  .twitter {
    position: fixed;
    display: block;
    right: 64px;
    bottom: 14px;

    svg {
      width: 32px;
      height: 32px;
      fill: #1da1f2;
    }
  }
}
.test {
  width: 40px;
  height: 40px;
  margin: 10px auto;
  background: darkviolet;
  border: 3px solid orangered;
  animation: test1 3s infinite;
}

@keyframes test1 {
  50%{
    background: #1da1f2;
    border: 2px teal solid;
    width: 20px;
    height: 20px;
  }
  to {
    background: #1da1f2;
    border: 2px yellow solid;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    transform: rotate(360deg);
  }
}
</style>
