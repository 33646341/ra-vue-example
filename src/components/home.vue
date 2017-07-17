<template>
  <div id="Home">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item></el-breadcrumb-item>
    </el-breadcrumb>
    <hr style="color: red">
    <h3 style="text-align: center">Home</h3>
  </div>
</template>

<script>
  export default {
    components: {},
    data () {
      return {}
    },
    created () {}
  }
</script>

<style>
#Home{height: 100%;overflow-y: auto}
</style>
