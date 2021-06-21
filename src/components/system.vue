<template>

  <div class="homepage2">

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



    <el-main2>


      <br><br><br><br><br>
      <div  class="hugesentence"  style="font-size:25px">



        <div style="font-size:40px" >
          <p  align="center" >游戏系统</p>
        </div>


        <br><br><br><br><br>

        <div style="font-size:40px" >
          <p  align="center" >角色状态</p>
        </div>


        <el-image :src="w1"></el-image>



        <br><br><br><br><br>

        <div style="font-size:40px" >
          <p  align="center" >八卦</p>
        </div>


        <el-image :src="w2"></el-image>



        <br><br><br><br><br>

        <div style="font-size:40px" >
          <p  align="center" >心法</p>
        </div>


        <el-image :src="w3"></el-image>




        <br><br><br><br><br>

        <div style="font-size:40px" >
          <p  align="center" >武学</p>
        </div>


        <el-image :src="w4"></el-image>




        <br><br><br><br><br>

        <div style="font-size:40px" >
          <p  align="center" >酿酒</p>
        </div>


        <el-image :src="j1"></el-image>




        <br><br><br><br><br>

        <div style="font-size:40px" >
          <p  align="center" >制药</p>
        </div>


        <el-image :src="j2"></el-image>




        <br><br><br><br><br>

        <div style="font-size:40px" >
          <p  align="center" >锻造</p>
        </div>


        <el-image :src="j3"></el-image>



        <br><br><br><br><br>

        <div style="font-size:40px" >
          <p  align="center" >出示</p>
        </div>


        <el-image :src="show"></el-image>



      </div>


      <br> <br> <br> <br> <br> <br> <br> <br> <br> <br>

    </el-main2>




  </div>



</template>



<script>
export default {
  data () {
    return {
      name: 'system',
      home: 'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/title.jpg',

      w1:'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/w1.PNG' ,
      w2: 'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/w2.PNG',
      w3:'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/w3.PNG' ,
      w4:'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/w4.PNG',
      j1:'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/j1.PNG',
      j2:'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/j2.PNG',
      j3:'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/j3.PNG',
      show:'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/show.PNG'



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



.el-main2 {
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


.homepage2{
  position: running();
  background-color: #090d10 !important;
}




.hugesentence{
  font-family:"华文中宋";
  text-indent: 2em;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-right: 100px;
  margin-left: 100px;
  color: #a5b8c7;
}




.liu{
  text-align-all: center;
  font-family:"华文中宋";
  font-size:25px;
  text-indent: 2em;
  margin-right: 50px;
  margin-left: 50px;
  height:800px;
  width:750px;
  color: #a5b8c7;
}


</style>
