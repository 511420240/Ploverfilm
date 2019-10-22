<template>
  <div class="home">
    <my-hearder></my-hearder>
    <div class="site-slide">
      <template>
        <el-carousel indicator-position="outside" class="slide-wrap">
          <el-carousel-item v-for="item in 4" :key="item" style="height:500px;">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </template>
    </div>

    <div class="container">
      <div class="main">
       <hot-play></hot-play>
      </div>
    </div>

  </div>
</template>

<script>
import Heardnav from "../components/Hearder-nav";
import Footer from "../components/Footer";
import Hotplay from "../components/Hot-play";

export default {
  data(){
  return{
    
    bannerlist:[]



  }


  },
  methods:{
    getBanner(){
      console.log(111)
    this.axios.get('/search/getbanner'
    ) .then(response => {
            let datas=response.data.results;
            this.bannerlist = datas

            }).catch(function(error) {
              console.log(error);
            });
        


    }


  },
   created(){
    

   },



  components: {
    "my-hearder": Heardnav,
    "my-footer": Footer,
    "hot-play":Hotplay
  }
};
</script>



<style scoped>
.site-slide {
  z-index: 1;
  position: relative;
  height: 500px;
  margin-bottom: 30px;
  overflow: hidden;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.slide-wrap {
  width: 100%;
  height: 100%;
}
/* 修改element ui 组件的默认的css样式，用一个自定义盒子包裹需要修改的组件属性，然后>>>在该盒子下去找要修改的属性 */
.site-slide >>> .el-carousel__container {
  height: 500px;
  overflow: hidden;
}
.site-slide >>> .el-carousel--horizontal {
  overflow: hidden;
}

.el-carousel__item:nth-child(2n) {
  background-color: rgba(240, 130, 130, 0.2);
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: rgb(232, 232, 232);
}

.container {
  width: 100%;
  
}
.main {
  width: 1200px;
  margin: 0 50px;

}
/* @media(max-width: 1549px){
  .main{
    width: 1200px;
  }
}
@media(max-width: 1280px){
  .main{
    width: 990px;
  }
} */





</style>