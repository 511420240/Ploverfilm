<template>

     <!--在视频外面加一个容器-->
    <div class="input_video">
    <video-player  class="video-player vjs-custom-skin"
                   ref="videoPlayer"
                   :playsinline="true"
                   :options="playerOptions"
    ></video-player>
    <div class="iframe-wrap">
      <div class="l-left">
          <ul class="play-fn">
            <li class="share">
                <span class="fn-title">
                <i class="el-icon-share"></i>
                </span>
                <span class="text">分享</span>
            </li>
            <li class="collect">
                <span class="fn-title">
                <i class="el-icon-star-on"></i>
                </span>
                <span class="text">收藏</span>
            </li>
                <li class="download">
                <span class="fn-title">
                <i class="el-icon-download"></i>
                </span>
                <span class="text">下载</span>
            </li>

          </ul>

      </div>
      <div class="dmbox">
        <el-input v-model="input" placeholder="来一条弹幕吧～
        
        "></el-input>
        <button class="dm-button" @click="senddm">发送</button>
      </div>


    </div>
    </div>


</template>

<script>
export default {
   data(){
    return {
                // 视频播放
                playerOptions : {
                    playbackRates : [ 0.5, 1.0, 1.5, 2.0 ], //可选择的播放速度
                    autoplay : false, //如果true,浏览器准备好时开始回放。
                    muted : false, // 默认情况下将会消除任何音频。
                    loop : false, // 视频一结束就重新开始。
                    preload : 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
                    language : 'zh-CN',
                    aspectRatio : '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
                    fluid : true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
                    sources : [ {
                        type : "",
                        src : 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'//url地址
                    } ],
                    poster : "", //你的封面地址
                    // width: document.documentElement.clientWidth,
                    notSupportedMessage : '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
                    controlBar : {
                        timeDivider : true,//当前时间和持续时间的分隔符
                        durationDisplay : true,//显示持续时间
                        remainingTimeDisplay : false,//是否显示剩余时间功能
                        fullscreenToggle : true  //全屏按钮
                    }
                },
                input:""

            
            }
         
   },

    methods:{
        senddm(){
            console.log(666)
        }


    }
}
</script>


<style >

 .input_video{
        width: 600px;
        height:466px;
        margin: 0 auto;

    }

  .iframe-wrap{
    height: 30px;
    padding: 15px 17px 15px;
    background: #1f1f1f;
  }
  .l-left{
      float: left;
  }
  .play-fn li{
    float: left;
    position: relative;
    margin-right: 20px;
    height: 40px;
    line-height: 30px;
    font-size: 16px;
    color: rgba(255,255,255,0.6);
  }
  .play-fn li :first-child{
      margin-right: 3px;
  }

 .el-icon-share,.el-icon-star-on,.el-icon-download{
    font-size: 17px !important;
    font-weight: 600 !important;
    margin-right: 6px;
    display: inline-block;
    vertical-align: middle;
    width: 14px;
    height: 14px;
 }
 .dmbox{
    width: 264px;
    float: left;
    position: relative;
 }
 .dmbox .el-input__inner{
    width: 220px;
    padding-left: 15px;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
    height: 32px;
    color: #909096;
    background: #333;
    border: 0 none
 }
 .dm-button{
    width: 60px;
    height: 32px;
    line-height: 32px;
    border: 0 none;
    outline: none;
    background: #505056;
    color: #D0D0D6;
    cursor: pointer;
    font-size: 14px;
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    position: absolute;
    right: 0;
    top: 0;
 }
 .dm-button:hover{
    background: #2692ff;
    color: #fff;
 }
          



</style>