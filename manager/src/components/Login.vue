<template>
  <div class="box">
    <el-form :model="loginData" :rules="rules" ref="loginData" label-width="100px" label-position="left">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginData.username" required></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginData.password" required></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login('loginData')">登录</el-button>
        <el-button @click="resetForm('loginData')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import axios from 'axios'
import configs from '../configs'
export default {
  data() {
    return{
      loginData:{
        username:'',
        password:''
      },
      rules:{
        username:[{required: true, message:'请输入用户名', triggler:'blur'}],
        password:[{required: true, message:'请输入密码', triggler:'blur'}]
      }
    }
  },
  methods: {
    login(formName) {
      var vm = this;
      vm.$refs[formName].validate((valid) => {
        if (valid) {
          axios.post(configs.baseURL + '/admin/authorization', vm.loginData).then(function(res){
            window.sessionStorage.setItem('token', res.data.token);
            window.location.href = '/admin';
          }).catch(function(){
            vm.$message.error('密码错误，请重新输入！');
            vm.resetForm(formName);
          });
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
<style>
  body{
    margin: 0;
    padding: 0;
  }
  .box{
    width: 400px;
    margin: 100px auto;
    border: 2px solid #eee;
    padding: 55px;  
  }
</style>