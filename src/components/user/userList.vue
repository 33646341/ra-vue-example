<template>
  <div id="UserList">
    <el-breadcrumb separator="/" class="breadcrumb">
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <el-table :data="userList" border style="width: 100%" :default-sort = "{prop: 'userName', order: 'descending'}">
      <el-table-column prop="userName" label="用户名" sortable width="180"></el-table-column>
      <el-table-column prop="userSex" label="性别" sortable width="180"></el-table-column>
      <el-table-column prop="userTel" label="手机号" sortable width="180"></el-table-column>
      <el-table-column prop="userQQ" label="预留QQ" sortable></el-table-column>
      <el-table-column prop="userEmail" label="邮箱" sortable></el-table-column>
      <el-table-column prop="startTime" label="注册时间" sortable></el-table-column>
      <el-table-column prop="userAddress" label="联系地址" sortable></el-table-column>
    </el-table>


  </div>
</template>

<script>
  export default {
    created () {
      let vue = this
      let data = require('../../assets/data.json')
      for (let i in data.userList) {
        let item = data.userList[i]
        let obj = {
          userName: item.userName,
          userSex: item.userSex,
          userTel: item.userTel,
          userQQ: item.userQQ,
          userEmail: item.userEmail,
          startTime: item.startTime,
          userAddress: item.userAddress
        }
        vue.$data.userList.push(obj)
      }

      console.log(vue.$data.userList)
    },
    data () {
      return {
        userList: []
      }
    },
    methods: {
      formatter (row, column) {
        return row.address
      }
    }
  }
</script>

<style>
#UserList{height: 100%;overflow-y: auto}
</style>
