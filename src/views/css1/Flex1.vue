<template>
  <div class="content-container">
    <h3>flex布局测试</h3>
    <div class="tips">flex:1表示：flex-grow:1;flex-shrink:1;flex-basis:0%;</div>
    <div class="a">参考：<a href="https://stackoverflow.com/questions/36247140/why-dont-flex-items-shrink-past-content-size">why-dont-flex-items-shrink-past-content-size</a></div>
    <p>A flex item cannot be smaller than the size of its content along the main axis.
      The defaults are,
      min-width: auto;
      min-height: auto;
      You can override these defaults by setting flex items to:
      min-width: 0;
      min-height: 0;
      overflow: hidden;
    </p>
    <div class="container">
      <div class="col col1">Lorem ipsum dolor</div>
      <div class="col col2">Lorem ipsum dolor</div>
      <div class="col col3">Lorem ipsum dolor</div>
      <div class="col col4">Lorem ipsum dolor</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Flex1',
  props: {}
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  width: 100%;

  .col {
    min-height: 100px;
    word-break: break-word
  }

  .col1 {
    flex: 1;
    background: orange;
    font-size: 80px;
    min-width: 0; // 这里默认是min-width:auto;
  }

  .col2 {
    flex: 3;
    background: yellow;
  }

  .col3 {
    flex: 4;
    background: skyblue;
  }

  .col4 {
    flex: 4;
    background: red;
  }
}

</style>
