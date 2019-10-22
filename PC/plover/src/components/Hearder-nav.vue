<template>
<el-container>
  <el-header style="height:70px">
    <div class="nav-top clearfix">
      <div class="logo" >
          <a href="" class="link-logo">
             
          </a>
      </div>
      <div class="search hidden-xs-only">
        <el-input v-model="input" placeholder="请输入搜索内容" class="my-search" ></el-input>
        <el-button type="primary" plain>电影搜索</el-button>
      </div>
      <ul class="usercenter hidden-sm-and-down">
        <li class="vip">
          <a href="">
            <span class="el-icon-s-custom"></span>
          </a>
        </li>
            
        <li class="record">
          <a href="">
            <span class="el-icon-time"></span>
          </a>
          <div class="rec">

          </div>
        </li>
        <li class="upload">
          <a href="">
            <span class="el-icon-upload"></span>
          </a>
        </li>
        <li class="ava" @mouseover="mouseOver" @mouseleave="mouseLeave">
            
          <a href="">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </a>
            <div class="userlogin" v-show="seen">
           <div class="content">
             <span>登录显示更多功能哦</span>
           </div>
           <div class="login-bt" >
              
             <a href="" class="log-link" target="_blank">登录/注册</a>

           </div>

         </div>
        </li>
       
      </ul>

      <div class="line"></div>
    </div>
  </el-header>
  </el-container>
</template>


<script >
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      input: "",
      seen:false,
      searchlist:[]

    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    
  sousuo(){

   console.log(111)
   console.log(this.input)
    this.axios.get('/search/search',{
      params:{inp:this.input}})
      .then(response => {
            let datas=response.data.results;
            this.searchlist = datas
            console.log(response)
              console.log(datas);

            }).catch(function(error) {
              console.log(error);
            });


  
  },

  
    mouseOver() {
    this.seen=true;
    console.log(111)
   
    },
      mouseLeave() {
     this.seen=false;
     
    }
  }
};
</script>
 
<style>
.el-header {
  position: absolute;
  width: 100%;
  background:rgba(224, 196, 144,.3);
  z-index: 10;
  display: flex;
}

.nav-top {
  position: relative;
  margin: 0 auto;
  width: 100%;
  background: rgba(248, 241, 241, 0.14);
}
@media(max-width: 1549px){
  .nav-top{
    width: 1200px;
  }
}
@media(max-width: 1280px){
  .nav-top{
    width: 990px;
  }
}



.logo {
  float: left;
  width: 135px;
  height: 70px;

}

.link-logo{
    display: block;
    width: 100px;
    margin-top: 5px;
    height: 60px;
    border-radius: 10px;
    margin-left: 30px;
    background: url('http://e3f49eaa46b57.cdn.sohucs.com/c_cut,x_0,y_0,w_512,h_512/group3/M04/DA/5C/MTAuMTAuODguODQ=/MTAwMTE0XzE0OTEwNjI5NDM2MDA=.jpg') 20% no-repeat;
    background-size: 100px auto;
    }

.search {
  display: inline-block;
  width: 330px;
  height: 40px;
  margin: 16px auto;
  position: relative;
  text-align: left;
}
.search input {
  display: inline-block;
  width: 100%;
  height: 40px;
  padding: 8px 12px 8px 18px;
  outline: 0 none;
  color:#666;
  font-size: 14px;
  line-height: 24px;
  border: 0;
  border-radius: 20px;
  box-sizing: border-box;
}
.search button {
  position: absolute;
  width: 80px;
  height: 40px;
  line-height: 40px;
  top: 0;
  right: -1px;
  padding: 0;
  color: #fff;
  text-align: center;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  border: 0;
  border-top-right-radius: 20px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 20px;
  background: #24a5ff;
}
.usercenter {
  float: right;
  height: 70px;
  margin-right: 10px;
  padding: 10px 0;
  box-sizing: border-box;
  z-index: 10;
}
.usercenter li {
  float: left;
  width: 40px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  margin: 0 6px;
}
.usercenter .ava {
  position: relative;
}
.usercenter .record{
  position: relative;
}



 .userlogin {
  position: absolute;
  right: -16px;
  top: 62px;
  width: 188px;
  background:#fff;
  border-radius: 5px;
}


.userlogin .content{
  padding:10px 0;
  text-align: center;
}
.userlogin .content>span{
  font-size: 15px;
  line-height: 15px;
  color: #999;
  letter-spacing: 0;
  display: inline-block;
}
.login-bt{
  margin-bottom: 10px;
}
.ava .login-bt a{
    background: #00b606;
    border-radius: 100px;
    width: 150px;
    height: 36px;
    display: inline-block;
    font-size: 14px;
    color: #fff;
    line-height: 36px;
    margin-bottom: 20px;
}



.usercenter li a {
  display: block;
  width: 100%;
  height: 100%;
  padding: 5px 0;
}




/* 导航图标样式 */
.el-icon-s-custom,
.el-icon-time,
.el-icon-upload {
  font-size: 30px;
  font-weight: 800;
  color: #999;
}

.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>