<template>
  <div id="app">
    <div class="css-demo" :class="{'top-menu':topMenu}">
      <router-link to="/scroll-snap1" class="link-item">
        <div class="test" @click="changeMenuPosition">仿微信列表滑动删除功能</div>
      </router-link>
      <router-link to="/flex1" class="link-item" @click.native="topMenu=false">flex布局测试</router-link>
      <router-link to="/button1" class="link-item" @click.native="topMenu=false">Button1样式</router-link>
      <router-link to="/button2" class="link-item" @click.native="topMenu=false">Button2样式</router-link>
      <router-link to="/element-height" class="link-item" @click.native="topMenu=false">Vue获取元素尺寸</router-link>
    </div>
      <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data(){
    return{
      topMenu:false
    }
  },
  methods:{
    changeMenuPosition(){
      this.topMenu = true
    }
  }
}
</script>

<style lang="scss" >
.css-demo{
  box-sizing: border-box;
  @include flexbox(flex-start,space-between,column);
  width: 180px;
  height: 100vh;
  font-size: 16px;
  font-weight: bold;
  @include position(absolute,left 0 top 0);
  background: #ccc;
  padding: 10px;
  overflow-y: auto;
}
.top-menu{
  @include flexbox();
  height: initial;
  width: 100%;
  position: static;
  flex-wrap: wrap;
  overflow: hidden;
  .link-item{
    max-width: 24%;
  }
}
</style>
