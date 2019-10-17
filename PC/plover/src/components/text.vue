<template>
  <div class="myCenter">
    <!--上面的信息-->
    <div class="top_inof">
      <div class="top_inof_U">
        <div class="Headportrait"></div>
        <div>
          <h3>name</h3>
          <h3>vip</h3>
        </div>
      </div>
    </div>
    <div class="management">
      <el-tabs class :tab-position="tabPosition" style="height: 700px;">
        <el-tab-pane label="历史记录">历史记录
          
        </el-tab-pane>
        <el-tab-pane label="我的关注">我的关注</el-tab-pane>
        <el-tab-pane label="我的信息">我的信息</el-tab-pane>
        <el-tab-pane label="vip">vip</el-tab-pane>
        <el-tab-pane label="个人设置">个人设置</el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabPosition: "left"
    };
  }
};
</script>


<style>
.myCenter {
  margin: 0 auto;
  width: 1200px;
  height: 700px;
  background-color: chocolate;
}
.top_inof {
  background-image: url("../img/timg(1).jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
  margin: 0 auto;
  height: 200px;
  background-color: #000000;
}
.top_inof_U {
  display: flex;
  height: 200px;
  width: 300px;
  border: 1px solid red;
  align-items: center;
  /* justify-content: center; */
  flex-direction: column;
}
.top_inof .Headportrait {
  margin: 0px;
  padding: 0px;
  border-radius: 50%;
  background-color: hotpink;
  width: 80px;
  height: 80px;
}

.el-tabs__nav {
  width: 300px;
}
.el-tabs__nav div {
  width: 300px;
  height: 50px;
  text-align: center !important;
  padding: 0;
  margin: 0px;
  background-color: bisque;
  
}
.el-tabs--left .el-tabs__header.is-left{
    margin-right: 0!important; 
}
.el-tabs__item:hover {
  /* background-color: blue; */
  color: floralwhite ;
}

.el-tabs__content {
  height: 400px;
  background-color: darkgreen;
  width: 100%px;
}

</style>
