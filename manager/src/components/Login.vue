<template>
  <div class="box">
    <el-form :model="loginDate" :rules="rules" ref="loginDate" label-width="100px" label-position="left">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginDate.username" required></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginDate.password" required></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="login('loginDate')">登录</el-button>
        <el-button @click="resetForm('login')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import authorization from '../axios/authorization'
export default {
  data() {
    return{
      loginDate:{
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
          authorization(vm.loginDate).then(function(res){
            window.sessionStorage.setItem('token', res.data.token);
            window.location.href = '/admin';
          });
        } else {
          alert('error submit!!');
          return false;
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