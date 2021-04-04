<template>
  <div class="content-container">
    <div class="header" ref="header">我是header</div>
    <div class="content" :style="{minHeight:minHeight}">
      <div class="inner">
        <div class="inner-content" @click="contentLists.push('点击我添加内容')" v-for="(item,index) in contentLists"
             :key="index">
          {{ item }}
        </div>
      </div>
      <div class="footer">@copyRight</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ElementHeight",
  data() {
    return {
      minHeight: "0",
      contentLists: ['点击我添加内容']
    }
  },

  mounted() {
    this.computeContentHeight()
  },
  methods: {
    computeContentHeight() {
      let headerHeight = this.$refs.header.offsetHeight
      this.minHeight = document.documentElement.clientHeight - headerHeight + 'px'
      console.log(this.minHeight);
    }
  }
}
</script>

<style lang="scss" scoped>
.content-container {
  padding: 0;
}

.header {
  font-size: 22px;
  font-weight: bold;
  line-height: 1.2;
  padding: 20px;
  text-align: center;
  background: tan;
}

.content {
  box-sizing: border-box;
  border: solid 1px;
  position: relative;

  .inner-content {
    width: 100%;
    text-align: center;
    height: 100px;
    cursor: pointer;
  }
}

.footer {
  @include position(absolute, bottom 10px);
  font-size: 14px !important;
  text-align: center;
  width: 100%;
  color: #aaa;
}
</style>
