<template>
  <div class="Modifythe">
    <div class="ziliao">编辑个人资料</div>
    <!-- 添加个人添加 -->
    <h3>头像</h3>
    <div class="myhead">
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />

        <i v-else class="el-icon-plus avatar-uploader-icon" id="he"></i>
      </el-upload>
      <span class="imgn">上传文件格式仅限：jpg,png</span>
    </div>
    <div class="input-ss">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="inputson">
        <el-form-item label="用户名">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="电话">
          <el-input v-model="form.tel"></el-input>
        </el-form-item>
        <el-form-item label="城市">
          <el-input v-model="form.city"></el-input>
        </el-form-item>
        <el-form-item label="性别">
          <el-radio-group v-model="form.sex">
            <el-radio label="男"></el-radio>
            <el-radio label="女"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="简介">
          <el-input id="texts" type="textarea" v-model="form.Signature"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit('form')">立即修改</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>


<script>
export default {
  data:function() {
    // var validatePass =(rule,value,allbak)=>{

    // }
    return {
      imageUrl: "",
      form: {
        username: "",
        city: "",
        Signature: "",
        type: "",
        sex: "",
        tel:"",
      },
      rules: {
        name: [
          {
            min: 3,
            max: 10,
            message: "长度在 6 到 16 个字符",
            trigger: "blur"
          },
          // { validator: validatePass, trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    onSubmit(formname) {
      this.$refs[formname].validate(valid => {
        if (valid) {
          this.axios
            .post("/user/compile", this.form)
            .then(response => {
              console.log(response);
            })
            .catch(function(error) {
              console.log(error);
            });
        }
        else{
          console.log('提交失败')
        }
      });
    }
  },
  // mounted (){
  //   console.log(localStorage.getItem('uid'))
  //   this.axios.get('/userInfo?uid=',localStorage.getItem('uid')).then(res =>{
  //     if(res.data.code != 1){
  //       return this.$message.error(res.data.msg)
  //     }
  //     let data = res.data.data
  //     console.log(data)
  //     this.form = data
  //   }) 
  // }

};
</script>










<style>
body {
  background-color: #fff;
}
.ziliao {
  font-size: 18px;
  margin-bottom: 20px;
  font-weight: 800;
  margin-bottom: 20px;
  color: #333;
}
#texts {
  line-height: 3;
}
.myinformation {
  width: 600px;
  background-color: #fff;
}
.myhead {
  padding-left: 81px;
  width: 200px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.imgn {
  font-size: 10px;
  color: rgb(37, 224, 12);
}
/* .inputson {

} */
/* .xingzuo{
} */
#he {
  font-family: element-icons !important;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 6;
  vertical-align: baseline;
  display: inline-block;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
.Modifythe {
  margin-left: 100px;
  margin-top: 40px;

}
.input-ss {
  width: 500px;
}
</style>
