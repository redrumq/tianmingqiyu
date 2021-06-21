<template>

  <div class="homepage3">


    <el-backtop></el-backtop>



    <router-link to="/">
      <el-image :src="home"></el-image>
    </router-link>




    <el-row>


      <el-col :span="4"><div class="grid-content bg-purple-light">

        <router-link to="/intro">
          <el-button type="text">剧情背景
          </el-button>
        </router-link>


      </div></el-col>


      <el-col :span="4"><div class="grid-content bg-purple">


        <router-link to="/system">
          <el-button type="text">游戏系统
          </el-button>
        </router-link>


      </div></el-col>


      <el-col :span="4"><div class="grid-content bg-purple-light">



        <router-link to="/video">
          <el-button type="text">游戏视频
          </el-button>
        </router-link>



      </div></el-col>


      <el-col :span="4"><div class="grid-content bg-purple">



        <router-link to="/music">
          <el-button type="text">游戏音乐
          </el-button>
        </router-link>



      </div></el-col>


      <el-col :span="4"><div class="grid-content bg-purple-light">



        <router-link to="/buy">
          <el-button type="text">获得游戏
          </el-button>
        </router-link>



      </div></el-col>


      <el-col :span="4"><div class="grid-content bg-purple">





        <el-button @click="jumpHtml" type="text">留言墙
        </el-button>


      </div></el-col>

    </el-row>



    <el-main3>

      <br> <br>


      <video-player class="video-player vjs-custom-skin"
                    ref="videoPlayer"
                    :playsinline="true"
                    :options="playerOptions"
      ></video-player>


    </el-main3>


    <br><br><br><br><br><br>

      <el-main3>


        <video-player class="video-player vjs-custom-skin"
                      ref="videoPlayer"
                      :playsinline="true"
                      :options="playerOptions1"
        ></video-player>


      </el-main3>


    <br><br><br><br><br><br>



      <el-main3>

        <video-player class="video-player vjs-custom-skin"
                      ref="videoPlayer"
                      :playsinline="true"
                      :options="playerOptions2"
        ></video-player>


      </el-main3>

    <br><br><br><br><br><br>

      <el-main3>
        <video-player class="video-player vjs-custom-skin"
                      ref="videoPlayer"
                      :playsinline="true"
                      :options="playerOptions3"
        ></video-player>


      </el-main3>

    <br><br><br><br><br><br>

      <el-main3>
        <video-player class="video-player vjs-custom-skin"
                      ref="videoPlayer"
                      :playsinline="true"
                      :options="playerOptions4"
        ></video-player>


      </el-main3>



    <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>



</div>
</template>










<script>
export default {
  data () {
    return {
      name: 'video',
      home: 'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/title.jpg',




      playerOptions : {
        // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '14:6', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "video/mp4",//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
          src: "https://tianmingfinal.oss-cn-beijing.aliyuncs.com/video/v0.mp4" //url地址
        }],
        poster: "../../static/images/test.jpg", //你的封面地址
        // width: document.documentElement.clientWidth, //播放器宽度
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: false,
          durationDisplay: false,
          remainingTimeDisplay: false,
          fullscreenToggle: false  //全屏按钮
        },
      },





      playerOptions1 : {
        // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '14:6', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "video/mp4",//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
          src: "https://tianmingfinal.oss-cn-beijing.aliyuncs.com/video/v1.mp4" //url地址
        }],
        poster: "../../static/images/test.jpg", //你的封面地址
        // width: document.documentElement.clientWidth, //播放器宽度
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: false,
          durationDisplay: false,
          remainingTimeDisplay: false,
          fullscreenToggle: false  //全屏按钮
        },
      }




      ,


      playerOptions2 : {
        // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '14:6', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "video/mp4",//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
          src: "https://tianmingfinal.oss-cn-beijing.aliyuncs.com/video/v2.mp4" //url地址
        }],
        poster: "../../static/images/test.jpg", //你的封面地址
        // width: document.documentElement.clientWidth, //播放器宽度
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: false,
          durationDisplay: false,
          remainingTimeDisplay: false,
          fullscreenToggle: false  //全屏按钮
        },
      }


      ,



      playerOptions3 : {
        // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '14:6', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "video/mp4",//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
          src: "https://tianmingfinal.oss-cn-beijing.aliyuncs.com/video/v3.mp4" //url地址
        }],
        poster: "../../static/images/test.jpg", //你的封面地址
        // width: document.documentElement.clientWidth, //播放器宽度
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: false,
          durationDisplay: false,
          remainingTimeDisplay: false,
          fullscreenToggle: false  //全屏按钮
        },
      }



      ,




      playerOptions4 : {
        // playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '14:6', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          type: "video/mp4",//这里的种类支持很多种：基本视频格式、直播、流媒体等，具体可以参看git网址项目
          src: "https://tianmingfinal.oss-cn-beijing.aliyuncs.com/video/v4.mp4" //url地址
        }],
        poster: "../../static/images/test.jpg", //你的封面地址
        // width: document.documentElement.clientWidth, //播放器宽度
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: false,
          durationDisplay: false,
          remainingTimeDisplay: false,
          fullscreenToggle: false  //全屏按钮
        },
      }


    }
  },
  methods:{
    jumpHtml(){
      window.location.href="./static/word/products-list/products-list.html"
    }
  }

}
</script>





<style>

/deep/ .vjs-custom-skin > .video-js .vjs-control-bar{
  display: none;
}
/deep/ .vjs-tech {
  pointer-events: none;
}


.el-main3 {
  background-color: rgba(9, 9, 8, 0.92);
  color: #333;
  text-align: center;
  height:1000px;
}



.el-row {
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: rgba(9, 9, 8, 0.92);
&:last-child {
   margin-bottom: 0;
 }
}


.el-col {
  border-radius: 0px;
}


.bg-purple {
  background: #0b0d0e;
}



.bg-purple-light {
  background: #171b28;
}


.grid-content {
  border-radius: 0px;
  min-height: 36px;
}




el-image{
  margin-top: 0px;
  margin-bottom: 0px;
}




.homepage3{
  position: running();
  background-color: #090d10 !important;
}

</style>
