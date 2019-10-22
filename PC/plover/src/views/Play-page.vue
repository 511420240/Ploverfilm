<template>

<div class="player-container">
 
  <div class="play-wrap">
      <my-play></my-play>

           <div class="play-title">
             <div class="title-wrap">
                <h1>风云雄霸天下 杨恭如演绎甜美孔慈</h1>
             </div>
          
      </div>
     
    </div>
   
     
 

</div>
  



</template>

<script>
import Play from '../components/player'
export default {
data(){
 return {
   
 }

},

methods:{


},
components:{

"my-play":Play


}

}
</script>

<style scoped>
.player-container{
    padding-top: 70px;
    margin-bottom: 40px;
    background: #27272f;
    color: rgba(255,255,255,0.6);
    min-width: 621px;

}

.el-header{
position:relative !important;
}

.play-wrap{
 margin-top:10px;

 
}
.play-title{
    width: 1058px;
    height: 125px;
    position: relative;
    margin: 0 auto;
    zoom: 1;

}
.title-wrap{
    position: relative;
    color: #999;
    padding: 30px 0;
    font-size: 12px;
    height: 67px;
    width: 690px;
}
.title-wrap>h1{
    margin-bottom: 13px;
    font-size: 24px;
    line-height: 28px;
    color: #FFF;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
 




</style>