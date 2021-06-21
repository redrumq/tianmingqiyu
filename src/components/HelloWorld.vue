<template>


  <div class="homepage">


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





    <br>
  <el-carousel :interval="3000"  trigger="click" height="680px" width="1000px">
    <el-carousel-item v-for="item in pbimg" :key="item.id">


      <img :src="item.pb" class="image" >

    </el-carousel-item>
  </el-carousel>




    <el-main1>

      <br> <br> <br> <br><br> <br>

      <div  class="homeintro"  style="font-size:25px">

        <p  align="left"  >
          北宋初年，天下大势几乎底定，民生、经济日渐繁荣，大城里客商云集，各地路运、河运，甚至海运都极为兴盛。然而在这繁荣富庶的背后，竟有著隐晦难见的阴谋蠢蠢欲动。一派神祕宗教悄然兴起，这股势力，似乎暗藏著一段血海深仇，酝酿再掀波澜。
        </p>

        <p  align="left"  >
          值此风云变幻之际，少年无意间被卷入古怪的神秘事件，命运从此翻腾转变。他将踏入江湖，习得各派武功，开展人生奇遇。同时，随著谜题不断揭晓，他更将发现，一场危及天下苍生的阴谋诡计，正悄悄浮上水面。影响人生的是宿命，是抉择。
        </p>
      </div>

<br><br><br><br><br><br><br><br><br><br><br><br><br>
        <el-container>

  <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
  <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
  <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
  <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
  <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>


          <el-link href="https://www.jslgame.com/" target="_blank">

            <el-image :src="jiashanlin">
            </el-image>

          </el-link>




  <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
  <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
  <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
  <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
  <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
  <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
  <p>&nbsp&nbsp&nbsp</p>




          <el-link href="https://github.com/redrumq" target="_blank">

            <el-image :src="github">
            </el-image>

          </el-link>



  <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
  <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
  <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
  <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
  <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
  <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
  <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
  <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>


  <el-popover placement="right" title="" trigger="hover">
    <img :src="douyin2" />
    <img slot="reference" :src="douyin" :alt="douyin" style="max-height: 50px;max-width: 130px">
  </el-popover>


</el-container>

</el-main1>




    <el-main1>

      <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
      <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
      <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
      <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
      <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
      <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>
      <p>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</p>

  <div>

        <el-button class="us" @click="drawer = true"  style="margin-left: 50px;">
          <span  style="color:#f6f6f6">关于我们  </span>
        </el-button>
        <el-drawer
          :visible.sync="drawer"
          :with-header="false">
          <span>

               <br>  <br>  <br>  <br>  <br>  <br>

                 <p>杜富阳 张家华  王新荣  秦天  吴迪</p>
          </span>
        </el-drawer>

      </div>

    </el-main1>

</div>
</template>







<script>
export default {
  data () {
    return {

      home: 'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/title.jpg',
      jiashanlin: require ('../assets/jiashanlin.png'),
      github: require ('../assets/github.png'),

      douyin:'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/douyin.png',
      douyin2:'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/douyin2.png',

      drawer: false,
      visible: false,

pbimg:[
  {id:0, pb:'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/a0.png'},
  {id:1,   pb:'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/a1.png'},
  {id:2,   pb:'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/a2.jpg'},
  {id:3,   pb :'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/a5.png'},
  {id:4,   pb :'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/a3.png'},
  {id:5,   pb  :'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/a4.png'},
  {id:6,   pb :'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/c1.png'},
  {id:7,   pb  :'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/c2.PNG'},
  {id:8,   pb  :'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/c3.PNG'},
  {id:9,   pb  :'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/c4.PNG'},
  {id:10,   pb  :'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/c5.PNG'},
  {id:11,   pb  :'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/c6.PNG'},
  {id:12,   pb   :'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/c7.PNG'},
  {id:13,   pb  :'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/c14.PNG'},
  {id:14,  pb    :'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/c9.PNG'},
  {id:15,   pb    :'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/c11.PNG'},
  {id:16,   pb   :'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/c12.PNG'},
  {id:17,     pb   :'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/b8.PNG'},
  {id:18,   pb   :'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/c10.PNG'},
  {id:19,   pb   :'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/c8.PNG'},
  {id:20,   pb   :'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/c9.PNG'},
  {id:21,   pb  :'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/b1.png'},
  {id:22,  pb  :'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/b2.png'},
  {id:23,  pb  :'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/b3.png'},
  {id:24, pb :'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/b4.png'},
  {id:25,   pb :'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/b5.png'},
  {id:26,    pb :'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/b6.PNG'},
  {id:27,    pb :'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/b7.jpg'}
]
    }
  },


  methods:{
    jumpHtml(){
      window.location.href="./static/word/products-list/products-list.html"
    }
  }
}
</script>






<style scoped>

.el-main1 {
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


.homepage{
  position: running();
  background-color: #090d10 !important;
}


.us{

  border:none;

  background: #131313;
}

.homeintro{
  font-family:"华文中宋";
  text-indent: 2em;
  margin-right: 100px;
  margin-left: 100px;
  color: #a5b8c7;
}


</style>
