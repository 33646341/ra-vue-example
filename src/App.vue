<template>
  <div id="app">
    <transition name="bounce">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import NavHeader from './components/layout/NavHeader'
  import NavMenu from './components/layout/NavMenu'
  export default {
    components: {
      NavHeader,
      NavMenu
    }
  }
</script>

<style>
*{margin: 0;padding:0;}
html, body{height:100%;overflow: hidden}
#app{
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
.breadcrumb{padding:20px;}
</style>
