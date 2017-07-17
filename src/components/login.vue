<template>
  <div id="Login">
    <el-form ref="loginForm" :rules="loginRules" :model="loginForm" label-position="left" label-width="0" class="loginForm">
      <h3 class="title">VUE</h3>
      <el-form-item prop="userName">
        <el-input type="text" v-model="loginForm.userName" auto-complete="off" placeholder="账号" ></el-input>
      </el-form-item>

      <el-form-item prop="userPass">
        <el-input type="password" v-model="loginForm.userPass" auto-complete="off" placeholder="密码" ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button class="login-max-button" type="primary" @click.native.prevent="login">登录</el-button>
      </el-form-item>

    </el-form>
  </div>
</template>

<script>
  export default {
    components: {},
    created () {},
    data () {
      return {
        loginForm: {
          userName: '000000',
          userPass: '000000'
        },
        loginRules: {
          userName: [
            {required: true, message: '请输入账号', trigger: 'blur'},
            {min: 6, message: '账号最少是6位', trigger: 'blur'}
          ],
          userPass: [
            {required: true, message: '请输入密码', trigger: 'blur'},
            {min: 6, message: '密码最少是6位', trigger: 'blur'}
          ]
        }
      }
    },

    methods: {
      login (event) {
        let vue = this
        vue.$refs.loginForm.validate((valid) => {
          if (valid) {
            if (vue.loginForm.userName === '000000' && vue.loginForm.userPass === '000000') {
              vue.$message({msg: '登录成功!'}, function () {
                vue.$router.push({name: 'home', params: {}})
                vue.$cookieSet({name: 'loginInfo', value: {userName: vue.loginForm.userName}, day: 1})
              })
            } else {
              vue.$message({msg: '用户名和密码错误!(6个0)', tp: 'error'}, function () {
                vue.loginForm.userName = ''
                vue.loginForm.userPass = ''
              })
            }
//            vue.$post({
//              url: '/admin',
//              data: {
//                userName: vue.loginForm.userName,
//                userPass: vue.loginForm.userPass
//              },
//              success: function (data) {
//                console.log(data)
//              }
//            })
          } else {
            return false
          }
        })
      }
    }
  }
</script>

<style>
#Login .loginForm{border:1px solid #EAEAEA;width:400px;margin:200px auto;border-radius: 5px;padding: 35px;box-shadow: 0 0 40px #CAC6C6}
#Login .loginForm .title{height: 30px;border-bottom:1px solid #EAEAEA;margin-bottom:20px;text-align: center}
#Login .loginForm .login-max-button{width: 100%}
</style>
