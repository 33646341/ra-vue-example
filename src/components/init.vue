<template>
  <div id="Content">
    <NavHeader></NavHeader>
    <el-row :gutter="1" type="flex" justify="start" style="height:95%;">
      <!--NavMenu-->
      <el-col :span="3" style="background: #E6E6E6">
        <div class="grid-content bg-purple">
          <NavMenu></NavMenu>
        </div>
      </el-col>
      <!--Content-->
      <el-col :span="21">
        <div class="grid-content bg-purple">
          <!--Content Template-->
          <transition name="bounce">
            <router-view></router-view>
          </transition>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import NavHeader from './layout/NavHeader.vue'
  import NavMenu from './layout/NavMenu.vue'
  export default {
    components: {
      NavHeader,
      NavMenu
    }
  }
</script>
<style scoped>
#Content{height: 100%}
</style>
