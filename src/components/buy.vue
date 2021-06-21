<template>


  <div class="homepage5" >


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









<el-container>




  <el-main>

    <br><br><br><br><br><br><br><br>
        <el-link href="https://store.steampowered.com/app/882790/_Fate_Seeker/" target="_blank">

          <el-image :src="steam">
          </el-image>

        </el-link>
    <br><br><br><br><br><br><br><br>    <br><br><br><br><br><br><br><br>
  </el-main>





  <el-main>
    <br><br><br><br><br><br><br><br>
          <el-link href="https://store.cubejoy.com/html/en/store/goodsdetail/detail687.html" target="_blank">

            <el-image :src="fangkuai">
            </el-image>

          </el-link>

    <br><br><br><br><br><br><br><br>     <br><br><br><br><br><br><br><br>
  </el-main>






<el-main>
  <br><br><br><br><br><br><br><br>
        <el-link href="https://www.wegame.com.cn/store/2000472/Fate_seeker?top_class=3" target="_blank">

          <el-image :src="wegame">
          </el-image>

        </el-link>
  <br><br><br><br><br><br><br><br>     <br><br><br><br><br><br><br><br>
  </el-main>


</el-container>

  </div>
</template>










<script>
export default {
  data () {
    return {
      name: 'buy',
      home: 'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/title.jpg',
      fangkuai: require('../assets/fangkuai.png'),
      wegame: require('../assets/wegame.png'),
        steam: require('../assets/steam.png'),
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

.el-main5 {
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


.homepage5{
  position: running();
  background-color: #090d10 !important;
}


</style>
