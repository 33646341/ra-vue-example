<template>
  <div id="NavMenu">
    <el-menu theme="light" :unique-opened="uniqueOpened" default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" @select="handSelect">
      <el-submenu index="user">
        <template slot="title"><i class="el-icon-menu"></i>用户管理</template>
        <el-menu-item-group>
          <el-menu-item index="userList"><i class="el-icon-menu"></i> 用户列表</el-menu-item>
          <el-menu-item index="addUser"><i class="el-icon-plus"></i> 新建用户</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="login"><i class="el-icon-setting"></i>退出登录</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        uniqueOpened: true
      }
    },
    methods: {
      handleOpen (key, keyPath) {
//        console.log(key, keyPath)
      },
      handleClose (key, keyPath) {
//        console.log(key, keyPath)
      },
      handSelect (key, keyPath) {
        let vue = this
        if (key) {
          vue.$router.push({name: key})
        } else {
          vue.$router.push({name: 404})
        }
      }
    }
  }
</script>

<style>
#NavMenu{background: #E6E6E6;height: 100%;}
#NavMenu .el-menu{background: #E6E6E6; text-align: l}
</style>
