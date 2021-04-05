<template>
  <div class="svg-wrapper content-container" :class="{visible:show}" @click="show = !show">
    <svg viewBox="0 0 1400 800">
      <title>Animated clip-path SVG</title>
      <defs>
        <clipPath id="cd-image-1">
          <circle id="cd-circle-1" cx="110" cy="400" r="60"></circle>
        </clipPath>
      </defs>
      <image  clip-path="url(#cd-image-1)" class="svg-img"
             xlink:href="../../assets/images/galaxy1.jpg"></image>
    </svg>
  </div>
</template>

<script>
export default {
  name: "ClipPath1",
  data(){
    return{
      show:false
    }
  }
}
</script>

<style scoped>
.svg-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  padding: 0;
}

.visible #cd-image-1 circle {
  animation: visible-clippath 1s linear forwards;
}

.svg-img{
  width: 100%;
  display: block;
}
@keyframes visible-clippath {
  to {
    r: 1364;
  }
}
</style>