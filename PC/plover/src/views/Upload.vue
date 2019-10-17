<template>
  <div class="uploads">
    <div class="content">
      <div class="imss">
        <div class="gec">
          <span>封面</span>
        </div>
        <el-upload
          class="image"
          action="http://localhost:81/uploads/upload"
          ref="uploadIMG"
          accept=".jpg, .gif"
          :auto-upload="true"
          :multiple="false"
          :show-file-list="true"
          name="file"
          :data="{fileType: 'img'}"
          :on-success="handleImgsuccess"
        >
          <img v-if="form.mimg" :src="form.mimg" class="avatar" />
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
      </div>

      <div class="mp4">
        <span>上传视频：</span>
        <el-upload
          ref="uploadmp4"
          class
          action="http://localhost:81/uploads/upload"
          accept=".mp4"
          :auto-upload="true"
          :multiple="false"
          :show-file-list="false"
          :on-change="uploadChang"
          name="file"
          :data="{fileType: 'mp4'}"
          :on-success="handlemp4success"
        >
          <div class>
            <el-row>
              <el-button type="primary">选择文件</el-button>
            </el-row>
          </div>
        </el-upload>
        <div class="mp4Namess">
          <div class>
            {{mp4Name}}
            <audio :src="mp4Url" class="audio"></audio>
          </div>
        </div>
      </div>

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
          <!-- //////////////////// -->
          <el-form-item label="上映时间">
            <div class="block">
              <span class="demonstration"></span>
              <el-date-picker
                v-model="form.Releasetime"
                align="right"
                type="year"
                placeholder="选择年"
              ></el-date-picker>
            </div>
          </el-form-item>
          <!-- //////////////////// -->
          <div>
            <el-form-item label="电影类型">
              <el-checkbox-group v-model="form.classification" :min="0" :max="6">
                <el-checkbox v-for="city in cities" :label="city" :key="city">{{city}}</el-checkbox>
              </el-checkbox-group>
            </el-form-item>
          </div>

          <el-form-item label="地区">
            <el-checkbox-group v-model="form.region" :min="0" :max="1">
              <el-checkbox v-for="city in cities2" :label="city" :key="city">{{city}}</el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="VIP观看">
            <el-radio v-model="form.vips" label="1">是</el-radio>
            <el-radio v-model="form.vips" label="0">否</el-radio>
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
    const cityOptions = [
      "喜剧",
      "爱情",
      "动作",
      "枪战",
      "犯罪",
      "惊悚",
      "恐怖",
      "悬疑",
      "动画",
      "家庭",
      "奇幻",
      "科幻",
      "魔幻",
      "战争",
      "青春"
    ];
    const cityOptions2 = [
      "华语",
      "香港地区",
      "美国",
      "欧美",
      "韩国",
      "日本",
      "泰国",
      "印度",
      "其他"
    ];
    return {
      cities: cityOptions,
      cities2: cityOptions2,
      dialogImageUrl: "",
      dialogVisible: false,
      form: {
        moviename: "",
        director: "",
        actor: "",
        classification: [],
        region: ["华语"],
        Releasetime: "",
        vips: "0",
        charge: "",
        language: "",
        plays: "",
        score: "",
        introduction: "",
        mimg: "",
        MP4: "",
        mid: ""
      },
      mp4Url: "",
      mp4Name: "",
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
      this.mp4Url = URL.createObjectURL(file.raw);
      this.mp4Name = file.name;
    },
    handleRemove(file, fileList) {
      console.log(file);
      this.form.img = "";
    },
    handlemp4success(response, file, fileList) {
      this.form.MP4 = response.data;
      console.log(response.data);
    },
    handleImgsuccess(response, file, fileList) {
      console.log(this.form.img);
      this.form.mimg = response.data;
      console.log("++++++", response.data);
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
.mp4 {
  height: 100px;
  display: flex;
}
.mp4Namess {
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
