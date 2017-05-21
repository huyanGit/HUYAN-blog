<template>
  <div class="box">
    <el-form :model="login" :rules="rules" ref="login" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="login.username" required></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="login.password" required></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('login')">登录</el-button>
        <el-button @click="resetForm('login')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  export default {
    data() {
      return{
        login:{
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
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.login);
          } else {
            console.log('error submit!!');
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
  .box{
    width: 400px;
    margin: 50px auto;

  }
</style>