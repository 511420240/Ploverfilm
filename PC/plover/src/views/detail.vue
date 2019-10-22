<template>
  <div class="detailcontainer">
    <div class="banner">
      <div class="wraper clearfix">
        <div class="img-left">
          <div class="avater-shadow">
            <img
              class="avater"
              src="https://p0.meituan.net/movie/cddf92d0ac6a0db837a1bc488b241c42267927.jpg@464w_644h_1e_1c"
              alt
            />
          </div>
        </div>

        <div class="info-right clearfix">
          <div class="movie-brif-container">
            <h3 class="movie-name">电影名称</h3>
            <div class="ename">English name</div>
            <ul>
              <li class="ellipsis">上映地点/时长</li>
              <li class="ellipsis">上映时间 2019-9-30</li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="main-content">
        <div class="story">
          <h3 class="title">剧情简介</h3>
          <div class="story-content">
             <span class="dra">
                 根据2018年5月14日四川航空3U8633航班机组成功处置特情真实事件改编。
                 机组执行航班任务时，在万米高空突遇驾驶舱风挡玻璃爆裂脱落、座舱释压的极端罕见险情，生死关头，
                 他们临危不乱、果断应对、正确处置，确保了机上全部人员的生命安全，创造了世界民航史上的奇迹。
             </span>
          </div>

        </div>




      <div class="header">
        <h1 class="header-title">评论</h1>
        <p class="comment-num">(999)</p>
        <p class="protocal">文明上网理性发言，请遵守新闻评论服务协议</p>
      </div>

      <div class="comment-box clearfix">
        <div class="comment-avater">
          <img src="" alt="" />
        </div>

        <div class="box-content">
          <el-input type="textarea" :rows="5" placeholder="请输入内容" v-model="textarea" style=""></el-input>
          <div class="box-info">
             <div class="fbbutton">
                 发布评论
             </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {}
};
</script>


<style scoped>

.banner {
  margin-top: 70px;
  width: 100%;
  /* min-width: 1200px; */
  background: #392f59
  url(https://s3plus.meituan.net/v1/mss_e2821d7f0cfe4ac1bf9202ecf9590e67/cdn-prod/file:5788b470/banner_bg.f7fd103e3b8c16b6f449cce43fc57f45.png)
    no-repeat 50%;
  margin-bottom: 50px;
}
.wraper {
  width: 1200px;
  margin: 0 auto;
  height: 376px;
  position: relative;
}
.img-left {
  width: 300px;
  float: left;
  position: relative;
  top: 70px;
  overflow: hidden;
  z-index: 9;
}
.avater-shadow {
  position: relative;
  margin: 0 30px;
  width: 240px;
  height: 330px;
  padding-bottom: 40px;
}
.avater {
  border: 4px solid #fff;
  height: 322px;
  width: 232px;
}
.info-right {
  position: relative;
  margin-right: 30px;
  margin-left: 300px;
  margin-top: 70px;
  padding-top: 70px;
  text-align: left;
}

.movie-brif-container {
  position: absolute;
  color: #fff;
  font-size: 14px;
  z-index: 1;
}
.movie-name {
  width: 900px;
  margin-top: 0;
  font-size: 26px;
  line-height: 32px;
  font-weight: 700;
  margin-bottom: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  max-height: 64px;
  text-align: left;
}
.ename {
  width: 340px;
  font-size: 18px;
  line-height: 1.3;
  margin-bottom: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.movie-brif-container ul {
  width: 250px;
  list-style: none;
  padding-left: 0;
  margin-bottom: 20px;
  line-height: 1;
}
.ellipsis {
  margin: 12px 0;
  line-height: 100%;
}
.main-content {
  width: 730px;
  /* padding: 0 50px; */
  margin: 30px;
  text-align: left;
}
.header {
  padding: 22px 0;
  overflow: hidden;
}
.header h1 {
  font-size: 26px;
  color: #2a2a2a;
  width: 68px;
  float: left;
  height: 100%;
}
.comment-num {
  float: left;
  height: 100%;
  color: #adadad;
  line-height: 32px;
  font-size: 14px;
}
.protocal {
  float: right;
  color: #adadad;
  font-size: 14px;
  line-height: 34px;
}
.comment-box {
  position: relative;
  padding-left: 68px;
  margin-bottom: 30px;
  /* height: 188px; */
}
.comment-avater {
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: 50px;
  height: 50px;
  font-size: 0;
  border-radius: 50%;
  overflow: hidden;
  background: url(https://mat1.gtimg.com/v/comment/images/avatar_default.9d95c455.jpg);
}
.comment-avater img {
  width: 100%;
  height: 100%;
}
.box-content {
  border: 2px solid #f0f0f0;
  position: relative;
}
.box-content>>>.el-textarea__inner{
    outline: none;
    border: 0;
}
.box-content .box-info{
    height: 34px;
    line-height: 34px;
    overflow: hidden;
    padding: 10px 14px;
    border-top: 2px solid #f0f0f0;
}
.fbbutton{
    float: right;
    width: 100px;
    color: #fff;
    text-align: center;
    font-size: 14px;
    border-radius: 17px;
    cursor: pointer;
    background-color: #ff7900;
}
.fbbutton:hover{
background-color: #ee7d1b;
}
h3.title{
    display: inline-block;
    margin: 0;
    padding: 0;
    font-weight: 400;
    font-size: 18px;
    color: #333;
    line-height: 18px;
}
h3.title::before{
    content: "";
    display: inline-block;
    width: 4px;
    height: 18px;
    margin-right: 6px;
    background-color: #ef4238;
}
.story{
    margin-bottom: 60px;
}
.story-content{
    margin-top: 20px;
    color: #333;
}
.story-content .dra{
    font-size: 14px;
    line-height: 26px;
}


</style>

