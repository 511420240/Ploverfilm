<template>
  <div class="hot">
    <div class="panel">
      <div class="panel-hearder">
        <span class="red-play">正在热播</span>
      </div>

      <!-- 热播电影内容 -->
      <div class="panel-content">
        <el-row :gutter="20">
          <!-- 循环列表 -->
          <el-col :md="4" :sm="6" :xs="6">
            <div class="movie-items">
              <a href class="movie-link" target="_blank">
                <img
                  src="https://r1.ykimg.com/050E00005DA04E8BADA7B2FD36020EC9?x-oss-process=image/resize,w_290/interlace,1/quality,Q_80/sharpen,100"
                  alt
                  class="hot-index"
                />
                <span class="score">9.1</span>
              </a>
              <div class="meta">
                <div style="width:100%;overflow:hidden;height:20px;">
                  <a href class="movie-name">哪吒之魔童降世</a>
                </div>
                <div class="subtitle">魔童哪吒逆天改命</div>
              </div>
            </div>
          </el-col>
        
        </el-row>
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
.panel {
  width: 100%;
  margin: 20px auto;
}
.panel-hearder {
  overflow: hidden;
  height: 26px;
  line-height: 26px;
  text-align: left;
}
.panel-hearder .red-play {
  font-size: 26px;
  color: #ef4238 !important;
  border-left: 8px solid #e94b43;
  padding-left: 10px;
}
.panel-content {
  overflow: hidden;
  width: 100%;
  margin-top: 23px;
}
.el-row {
  padding: 0 7px;
}
.el-col {
  padding: 0 8px;
  float: left;
}

.movie-items {
  border-radius: 3px;
  background: #fff;
  padding: 10px 10px;
  margin-bottom: 15px;
}
.movie-link {
  display: block;
  position: relative;
  border: 1px solid #ccc;
}
.movie-link .score {
  position: absolute;
  right: 8px;
  bottom: 8px;
  font-size: 15px;
  color: #ff5711;
  font-weight: 700;
}

.hot-index {
  height: 200px;
  width: 120%;
  background: pink;
  vertical-align: middle;
}

.meta {
  margin-top: 5px;
  text-align: left;
}
.movie-name {
  display: block;
  height: 18px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: 700;
  line-height: 18px;
  padding-left: 5px;
  font-size: 14px;
  color: #333;
}
.subtitle {
  height: 18px;
  font-size: 12px;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding-left: 5px;
}
</style>