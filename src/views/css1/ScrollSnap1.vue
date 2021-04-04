<template>
  <div class="content-container" style="padding: 0;margin-left: 0;overflow: hidden">
    <h3>以下domo需要再手机模拟样式下查看</h3>
    <h4>纯滚动,无scroll-snap效果</h4>
    <div class="list">
      <button class="button" data-type="danger">删除</button>
      <a href="javascript:" class="content">我是列表，试试左滑我</a>
      <s class="space"></s>
    </div>
    <h4>多个按钮定位视差滚动，开启scroll-snap效果</h4>
    <div class="list scroll-snap perspective">
      <button class="button" data-type="danger">删除</button>
      <button class="button" data-type="warning">不显示</button>
      <a href="javascript:" class="content">我是列表，试试左滑我</a>
      <s class="space"></s>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ScrollSnap1',
  props: {}
}
</script>

<style lang="scss" scoped>
.list::-webkit-scrollbar {
  display: none;
}
.list {
  display: flex;
  overflow-y: hidden;
}

.content {
  padding: .5rem 1rem;
  line-height: 1.5;
  flex: 0 0 calc(100vw - 2rem);
  font-size: 1rem;
  color: inherit;
  background-color: #fff;
  box-shadow: 0 1px #fff, 0 -1px #fff;
  position: relative;
}

.space {
  flex: 0 0 4rem;
}

.button {
  border: 0;
  padding: 0;
  font-size: 1rem;
  color: #fff;
  width: 4rem;
  height: 2.5rem;
  position: absolute;
  right: 0;
  outline: 0;
}

[data-type="danger"] {
  background-color: #eb4646;
}

[data-type="warning"] {
  background-color: #f59b00;
}

/* 自动右边缘定位 */
.scroll-snap {
  scroll-snap-type: x mandatory;
}

.scroll-snap .space {
  scroll-snap-align: end;
}

.scroll-snap .content {
  scroll-snap-align: start;
}

/* 多个按钮定位 */
.button:nth-of-type(2) {
  right: 4rem;
}

.button:nth-of-type(3) {
  right: 8rem;
}

.space:nth-child(4) {
  flex: 0 0 8rem;
}

.space:nth-child(5) {
  flex: 0 0 12rem;
}

/* 视差滚动 */
.perspective {
  perspective: 1px;
  transform-style: preserve-3d;
  perspective-origin: 100% 50%;
}

.perspective .button:last-of-type {
  transform: translate3D(2rem, 0, -1px) scale(2);
}

.perspective .button:first-of-type {
  transform: translate3D(2rem, 0, -3px) scale(4);
}
</style>
