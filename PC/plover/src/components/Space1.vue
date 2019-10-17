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
      <div class="management_left">
        <div class="Pff">
          <router-link to="/">1111111</router-link>
        </div>
        <div class="ilike">
          <div class="ilike1">
            <router-link to="/">11111111111</router-link>
          </div>
          <div class="ilike1">
            <router-link to="/">111111111111</router-link>
          </div>
          <div class="ilike1">
            <router-link to="/">111111111111</router-link>
          </div>
        </div>
        <div class="management_right">

        </div>
      </div>
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

.el-tabs__nav div {
  width: 300px;
  height: 50px;
  text-align: center !important;
  padding: 0;
  margin: 0px;
  background-color: bisque;
}

.management {
  width: 300px;
  height: 700px;
}

.Pff {
  font-size: 19px;
  height: 50px;
  background-color: #ffffff;
  line-height: 50px;
  text-align: center;
}
.Pff a {
  text-decoration: none;
  color: #999;
}
.ilike {
  height: 183px;
  background-color: #fff;
  font-size: 19px;
  border-radius: 4px;
}
.ilike1 {
  text-align: center;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #f4f4f4;
}
.ilike1 a {
  text-decoration: none;
  color: #999;
}




.management_right{
  width: 500px;
  height: 500px;
  background-color: aqua;
  
}
</style>
