<template>
  <div id="NavHeader">
    <el-row :gutter="1">
      <!--Logo/UserImg-->
      <el-col :span="4">
        <div class="grid-content logo">Element <b class="text">框架管理系统</b></div>
      </el-col>
      <!--Search-->
      <el-col :span="16"><div class="grid-content"></div></el-col>
      <!--QuitLogin and Msg-->
      <el-col :span="4">
        <div class="grid-content">
          <div class="userInfo">
            <div class="userImg"><img src="static/img/user.png" class="max-min-img"></div>
            <div class="userName">{{userName}}</div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
    export default {
      created () {
        let vue = this
        let userName = vue.$cookieGet({name: 'loginInfo'})
        if (userName) {
          vue.$data.userName = JSON.parse(userName).userName
        } else {
          vue.$message({msg: '请重新登录', tp: 'warning'}, function () {
            vue.$router.push({name: 'login'})
          })
        }
      },
      data () {
        return {
          userName: ''
        }
      }
    }
</script>

<style>
  #NavHeader{
    background: #20A0FF;
    height: 50px;
  }
  #NavHeader .logo{line-height: 50px;color: #FFF;font-size:30px;text-shadow:1px 1px 5px #666}
  #NavHeader .logo .text{font-size: 18px;}
  #NavHeader .grid-content{height: 50px;}
  #NavHeader .userInfo{height: 50px;margin-right:30px;}
  #NavHeader .userName{display: inline-block;height: 50px;line-height: 50px;padding: 0 10px;float: right;cursor: pointer;color: #FFF}
  #NavHeader .userImg{width:50px;height: 50px;display: inline-block;border-radius: 50%;float: right;}
  #NavHeader .userImg img{width:50px;height: 50px;border-radius: 50%}
  #NavHeader .max-min-img{max-width: 100%;max-height: 100%}
</style>
