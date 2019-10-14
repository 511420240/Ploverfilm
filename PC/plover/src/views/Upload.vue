<template>
  <div class="uploads">
    <div class="content">
      <!-- <div class="imss">
        <div class="gec">
          <span>歌曲封面</span>
        </div>
        <el-upload
          class="image"
          action="http://localhost:8881/upload/upload"
          ref="uploadIMG"
          accept=".jpg, .gif"
          :auto-upload="true"
          :multiple="false"
          :show-file-list="false"
          name="file"
          :data="{fileType: 'img'}"
          :on-success="handleImgsuccess"
        >
          <img v-if="form.img" :src="form.img" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div> -->

      <!-- <div class="mP3">
        <span>上传视频：</span>
        <el-upload
          ref="uploadMp3"
          class
          action="http://localhost:81/upload/upload"
          accept=".mp4"
          :auto-upload="true"
          :multiple="false"
          :show-file-list="false"
          :on-change="uploadChang"
          name="file"
          :data="{fileType: 'mp3'}"
          :on-success="handleMp3success"
        >
          <div class>
            <el-row>
              <el-button type="primary">选择文件</el-button>
            </el-row>
          </div>
        </el-upload>
        <div class="mp3Namess">
          <div class>
            {{mp3Name}}
            <audio :src="mp3Url" class="audio"></audio>
          </div>
        </div>
      </div> -->

      <div class="informations">
        <el-form ref="form" :model="form" :rules="rules" label-width="80px">
          <el-form-item label="电影名称">
            <el-input v-model="form.moviename" placeholder="电影名称"></el-input>
          </el-form-item>
          <el-form-item label="导演">
            <el-input v-model="form.director" placeholder="电影导演"></el-input>
          </el-form-item>
          <el-form-item label="演员">
            <el-input v-model="form.actor" placeholder="请填演员名称多个以空格分开"></el-input>
          </el-form-item>
          <el-form-item label="电影类型">
            <el-input v-model="form.classification" placeholder="请填类型多个以空格分开"></el-input>
          </el-form-item>
          <el-form-item label="地区">
            <el-input v-model="form.region" placeholder="地区"></el-input>
          </el-form-item>
          <el-form-item label="语言">
            <el-input v-model="form.language" placeholder="语言"></el-input>
          </el-form-item>

          <el-form-item label="简介">
            <el-input
              id="Thelyrics"
              style=" width: 400px; height: 100px;"
              type="textarea"
              v-model="form.introduction"
              placeholder="请填简介"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit('form')">立即上传</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      form: {
        moviename: "",
        director: "",
        actor: "",
        classification: "",
        region: "",
        Releasetime: "",
        vips: "",
        charge: "",
        language: "",
        plays: "",
        score: "",
        introduction: "",
        mimg: ""
      },
      mp3Url: "",
      mp3Name: "",
      fileData: [],
      rules: {
        hemename: [
          {
            min: 3,
            max: 10,
            message: "长度在 3 到 10 个字符",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    uploadChang(file) {
      this.mp3Url = URL.createObjectURL(file.raw);
      this.mp3Name = file.name;
    },
    handleRemove(file, fileList) {
      this.form.img = "";
    },
    handleMp3success(response, file, fileList) {
      this.form.MP3 = response.data;
      console.log(response.data);
    },
    handleImgsuccess(response, file, fileList) {
      this.form.img = response.data;
      console.log(response.data);
    },
    onSubmit(formname) {
      this.$refs[formname].validate(valid => {
        console.log(this.data);
        if (valid) {
          this.axios
            .post("/uploads/msave", this.form)
            .then(response => {
              console.log(response);
            })
            .catch(function(error) {
              console.log(error);
              console.log(form);
            });
        } else { 
          console.log("验证失败");
        }
      });
    }
  }
};
</script>







<style>
body {
  background-color: antiquewhite;
}
.uploads {
  width: 1000px;
  height: 1500px;

  margin: 20px auto;
  font-size: 19px;
  line-height: 1.5;
  font-family: "Microsoft Yahei";
}
.tops {
  height: 55px;
  line-height: 55px;
  border-radius: 4px;
  background: #fff;
  margin: 15px auto 10px;
  text-align: center;
  margin-bottom: 20px;
  color: #6ed56c;
}

.content {
  background-color: #fff;
}
.imss {
  display: flex;
  /* margin-left: 20px; */
  padding-top: 80px;
  margin-bottom: 50px;
}
.gec {
  margin: 25px;
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
.inputhed {
  widows: 500px;
  height: 150px;
}
.informations {
  width: 500px;
}

.audio {
  height: 100px;
  width: 100%;
}
.mP3 {
  height: 100px;
  display: flex;
}
.mp3Namess {
  width: 300px;
  height: 50px;
  border: 1px solid rgb(121, 121, 121);
  margin-left: 20px;
  margin-top: -4px;
  text-align: center;
  line-height: 50px;
  border-radius: 7px;
}
.spansize {
  font-size: 14px;
  color: #6ed56c;
  line-height: 50px;
}
#Thelyrics {
  padding: 0px;
  margin: 0px;
  height: 100px;
  min-height: 50px;
  margin: 0px;
  line-height: 2.5;
}
.image {
  border: 1px dotted rgb(203, 204, 209);
}
</style>
