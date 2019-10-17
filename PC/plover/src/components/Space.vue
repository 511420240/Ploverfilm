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
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;"></el-radio-group>
        <el-menu
          default-active="1-4-1"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :collapse="isCollapse"
        >
          <el-menu-item index="2">
            <span slot="title">
              <router-link to="/history">历史记录</router-link>
            </span>
          </el-menu-item>
          <el-menu-item index="3">
            <span slot="title">
              <router-link to="/subscrib">我的订阅</router-link>
            </span>
          </el-menu-item>
          <el-menu-item index="4">
            <span slot="title">
              <router-link to="/history">我的消息</router-link>
            </span>
          </el-menu-item>
          <el-menu-item index="5">
            <span slot="title">
              <router-link to="/history">个人资料</router-link>
            </span>
          </el-menu-item>
        </el-menu>
      </div>
    <div class="management_right">
      <div>

      </div>


    </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isCollapse: false
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
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
  flex-direction: column;
}
.top_inof .Headportrait {
  border-radius: 50%;
  background-color: hotpink;
  width: 80px;
  height: 80px;
}

.management{
  display: flex;
}

.management_left {
  width: 300px;
}
.management_left > ul > li {
  text-align: center;
}
.management_left > ul > li a {
  text-decoration: none;
  color: black;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 300px;
  min-height: 400px;
}

.el-menu-item span {
  text-align: center;
}


.management_right{
  width: 100%;
  height: 500px;
  background-color: cyan;
}
</style>
