<template>


  <div class="homepage4">


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



      <el-main4>

        <br> <br> <br><br> <br> <br> <br>

        <span style="color: #f0f8ff; ">开场音乐</span>

        <br> <br>

        <audio muted
               controls="controls"
               preload="auto"
               src="https://tianmingfinal.oss-cn-beijing.aliyuncs.com/music/m0.mp3">
        </audio>


        <br> <br>

       <span style="color: #f0f8ff; ">Q1-乌斯藏高老庄</span>

        <br> <br>

        <audio muted

               controls="controls"
               preload="auto"

               src="https://tianmingfinal.oss-cn-beijing.aliyuncs.com/music/m1.mp3">
        </audio>


        <br> <br>

        <span style="color: #f0f8ff; ">H2-长安</span>

        <br> <br>

        <audio muted
               controls="controls"
               preload="auto"
               src="https://tianmingfinal.oss-cn-beijing.aliyuncs.com/music/m2.mp3">
        </audio>

        <br> <br>

        <span style="color: #f0f8ff; ">H2-战斗3-势如破竹</span>

        <br> <br>

        <audio muted
               controls="controls"
               preload="auto"
               src="https://tianmingfinal.oss-cn-beijing.aliyuncs.com/music/m3.mp3">
        </audio>

        <br> <br>

        <span style="color: #f0f8ff; ">此情待追忆</span>

        <br> <br>

        <audio muted
               controls="controls"
               preload="auto"
               src="https://tianmingfinal.oss-cn-beijing.aliyuncs.com/music/m4.mp3">
        </audio>


      </el-main4>




      <el-main4>

        <br> <br>

        <span style="color: #f0f8ff; ">十里香</span>

        <br> <br>


        <audio muted
               controls="controls"
               preload="auto"
               src="https://tianmingfinal.oss-cn-beijing.aliyuncs.com/music/m5.mp3">
        </audio>


        <br> <br>

        <span style="color: #f0f8ff; ">幻梦之沼</span>

        <br> <br>


        <audio muted
               controls="controls"
               preload="auto"
               src="https://tianmingfinal.oss-cn-beijing.aliyuncs.com/music/m6.mp3">
        </audio>



        <br> <br>

        <span style="color: #f0f8ff; ">诛心之誓</span>

        <br> <br>


        <audio muted
               controls="controls"
               preload="auto"
               src="https://tianmingfinal.oss-cn-beijing.aliyuncs.com/music/m7.mp3">
        </audio>


        <br> <br>

        <span style="color: #f0f8ff; ">灵虚古境</span>

        <br> <br>

        <audio muted
               controls="controls"
               preload="auto"
               src="https://tianmingfinal.oss-cn-beijing.aliyuncs.com/music/m8.mp3">
        </audio>



      </el-main4>



      <el-main4>


        <br> <br>

        <span style="color: #f0f8ff; ">一骑绝尘</span>

        <br> <br>


        <audio muted
               controls="controls"
               preload="auto"
               src="https://tianmingfinal.oss-cn-beijing.aliyuncs.com/music/m9.mp3">
        </audio>


        <br> <br>

        <span style="color: #f0f8ff; ">Wproject-幽冥界</span>

        <br> <br>

        <audio muted
               controls="controls"
               preload="auto"
               src="https://tianmingfinal.oss-cn-beijing.aliyuncs.com/music/m10.mp3">
        </audio>



        <br> <br>

        <span style="color: #f0f8ff; ">Wproject-天神界</span>

        <br> <br>

        <audio muted
               controls="controls"
               preload="auto"
               src="https://tianmingfinal.oss-cn-beijing.aliyuncs.com/music/m11.mp3">
        </audio>



      </el-main4>



    <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>


  </div>



</template>






<script>
export default {
  data () {
    return {
      name: 'music',
      home: 'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/title.jpg',
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

.el-main4 {
  background-color: rgba(9, 9, 8, 0.92);
  color: #333;
  text-align: center;
  height:550px;
}



.el-row {
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: rgba(9, 9, 8, 0.92);
&:last-child {
   margin-bottom: 0;
 }
}


.el-col{
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


.homepage4{
  position: running();
  background-color: #090d10 !important;
}



</style>
