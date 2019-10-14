<template>
  <div class="myform">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="账号" prop="account">
        <el-input v-model="ruleForm.account"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="ruleForm.password" type="password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm()">登录</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <div class="toreg">
      还没有账号，
      <router-link to="/reg">去注册</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      ruleForm: {
        account: "",
        password: ""
      },
      rules: {
        account: [{ required: true, message: "请输入账号", trigger: "blur" }],
        password: [
          { required: true, message: "请输入用户密码", trigger: "blur" },
          { min: 6, max: 16, message: "长度在 6到 16 个字符", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    submitForm() {
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          this.axios
            .post("/user/login", this.ruleForm)
            .then(response => {
              console.log(response);
              if (!response.data.status) {
                this.$message.error(response.data.msg);
              } else {  
                let uid = response.data.uid;
                localStorage.setItem("uid", response.data.uid);
                console.log("uid为", localStorage.getItem("uid"));
                this.$message(`登录成功,欢迎${response.data.account}回来!`);
                this.$router.push({ path: "/home" });
              }
            })
            .catch(function(error) {
              console.log(error);
            });
        }
      });
    },
    resetForm() {
      this.$refs.ruleForm.resetFields();
    }
  }
};
</script>

<style>
.myform {
  margin: 20px 30px 40px 50px;
  height: 500px;
  width: 500px;
}
.toreg{
    margin-left:40px ;
    font-size: 20px;
}
</style>
