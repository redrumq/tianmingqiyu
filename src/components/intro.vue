<template xmlns:font-family="http://www.w3.org/1999/xhtml">

  <div class="homepage1">

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



    <el-main1>


     <br><br><br><br><br>
        <div  class="hugesentence"  style="font-size:25px">

                <div style="font-size:40px" >
             <p  align="center" >剧情起源</p>
              </div>


    <p  align="left"  >
   唐朝灭亡后，天下崩解，各地藩镇纷纷自立为国，在这半个多世纪间，从梁王朱温篡唐建立后梁开始，中原地区依次出现后梁、后唐、后晋、后汉、后周五个朝代彼此更替。
这种混乱的局面，直至后周世宗柴荣继位才有所好转，使后周隐隐有一统天下的希望。但柴荣却在北伐时不幸病亡。
    </p>

              <p  align="left"  >
    后周显德七年(公元960年)，宫廷正在欢庆新年，忽接北方紧急军情，契丹与北汉入侵，宰相范质等不变真伪，即命禁军大将赵匡胤率军出征。当大军行驻于陈桥驿站时，军士们鼓噪而起，拥立黄袍加身的赵匡胤为新天子，史称「陈桥驿兵变」。赵匡胤回京后，受后周恭帝禅位，改国号为宋，定都开封，后周正式灭亡，五代的纷乱时期也随之结束。
              </p>


          <br><br><br>
                  <div style="font-size:40px" >
             <p  align="center" >故事背景</p>
              </div>


<p  align="left">
北宋初年，天下大势几乎底定，民生、经济日渐繁荣，大城里客商云集，各地路运、河运，甚至海运都极为兴盛。然而，繁盛安稳的背后，历经战乱颠沛流离的人们，开始笃信快速兴起的秘密宗教，以求心灵慰藉。
          </p>

          <p  align="left">
繁华京城不远处的宁静小村中，曾在战乱中险些遇难的幼童，在师父的抚养下平安长大。日渐茁壮的少年于意外中涉入难解的神秘事件，因而遭秘密宗教追杀，数度差点丧命。而自幼相依为命的师父，似乎也受到秘密宗教牵连而消失无踪。原来人们所信奉的宗教的背后，有着隐晦难见的阴谋蠢蠢欲动。
值此风云变幻之际，被卷入古怪神秘事件的少年，命运从此翻腾转变。他将踏入江湖，习得各派武功，展开人生奇遇。同时，随着谜题不断揭晓，他更将发现一场危及天下苍生的阴谋诡计，正悄悄浮上水面。
          </p>

          <p  align="left">
影响人生的是宿命？还是抉择？不如一探究竟，剑写天命！
          </p>

        </div>

    </el-main1>







<el-main1>

  <br><br><br>


  <div class="hugesentence">
  <div style="font-size:40px" >
    <p  align="center" >游戏角色</p>
  </div>
  </div>
  <br><br><br>


  <el-container>
    <div class="liu">
      <el-image :src="liu"></el-image>
    </div>


    <div  class="liu" >
      <p  align="left">
        生来聪明绝顶的朔风，行事随性、不拘小节，学什么都很快，经常靠着小聪明完成各种任务，其师梁人昊也拿他没辙。尽管有些散漫不羁但他本性纯良，若遇到有人处于危难，朔风总是全力以赴，拔刀相助。
      </p>
    </div>

  </el-container>

  <br>

  <el-container>
    <div class="liu">
      <el-image :src="zhao"></el-image>
    </div>


    <div  class="liu" >
      <p  align="left">
        赵妽，小名妽儿，古灵精怪的少女，外貌巧笑倩兮、美目盼兮，身姿娇巧轻柔。性格机灵刁钻、冰雪聪明，武艺、兵法、巧计奇谋样样皆通，擅长举一反三，平辈之中无出其右。身分背景不明，很积极的想找回小时候婚约的玉珮。观其言谈举止，或为大户千金。
      </p>
    </div>

  </el-container>



  <br><br><br><br><br><br><br><br>

  <el-container>
    <div class="liu">
      <el-image :src="mi"></el-image>
    </div>


    <div  class="liu" >
      <p  align="left">
        宓玥，来历不明的少女。莫名奇妙的半路认少主,看起来对少主很忠心，但武功奇特不知出自何派，对自己的身份少有提起。凡事以少主为重，对少主十分信任，却缺乏世间常识，只懂护卫之事。
      </p>
    </div>

  </el-container>


  <br><br><br><br><br><br><br><br>

  <el-container>
    <div class="liu">
      <el-image :src="liang"></el-image>
    </div>


    <div  class="liu" >
      <p  align="left">
        梁人昊，苍江派创始人，身怀绝技，嗜酒如命。似乎忙碌奔波但从不让人知道在忙什么。得意武功为幻波浑圆掌与悬河剑法。曾是威震江湖的豪侠，武艺出神入化、知己遍布四海，却卷入不为人知的江湖秘辛，自此退出江湖，销声匿迹。性格以义当先，济弱扶倾，但也有些固执不屈的牛脾气。直到养育了朔风，脾气才逐渐变得平和。
      </p>
    </div>

  </el-container>


  <br><br><br><br><br><br><br><br>

  <el-container>
    <div class="liu">
      <el-image :src="li"></el-image>
    </div>


    <div  class="liu" >
      <p  align="left">
        李见义，八法门大弟子，为人仗义正直个性择善固执，不知变通。外型浓眉大眼，身强体健，个性大方开朗。藏墨三派间虽有龃龉，但他性格豪爽，因此人缘甚佳。学艺广博，却过于正直单纯，武功虽高，总因打抱不平生出事端，幸而交友广阔，遇事总有贵人相助。平时热心助人，在江湖上颇富盛名。
      </p>
    </div>

  </el-container>


  <br><br><br><br><br><br><br><br>

  <el-container>
    <div class="liu">
      <el-image :src="mei"></el-image>
    </div>


    <div  class="liu" >
      <p  align="left">
        刑若梅，摩尼教的重要人物，美艳狠辣来去无踪，形同鬼魅。精通毒功，甚至以血养毒，作为武器。东阳村人口失踪事件的元凶。自幼钻研毒功，并服食特殊药物锻炼奇毒体质。本身武功平平，却靠着一身毒功暗杀了不少人。性格蛮横骄纵，稍有不快就出手伤人，毫不留情，不过害羞时总会心口不一，口不择言地说出驳斥的话语。
      </p>
    </div>

  </el-container>



  <br><br><br><br><br><br><br><br>

  <el-container>
    <div class="liu">
      <el-image :src="ying"></el-image>
    </div>


    <div  class="liu" >
      <p  align="left">
        刑若樱，刑若梅之妹，摩尼教圣女，血中带药性,可治百病。个性天真烂漫，从小未出摩尼教步因此不谙世事。目前的心愿是看遍天下美景，以及找回药王谷遗族。
      </p>
    </div>

  </el-container>



  <br><br><br><br><br><br><br><br>

  <el-container>
    <div class="liu">
      <el-image :src="luo"></el-image>
    </div>


    <div  class="liu" >
      <p  align="left">
        罗魁，摩尼教九使之一，身形极度肥胖，嗜吃，飞禽走兽无所不欢，传闻罗魁连人肉都照吃不误，令人不寒而栗。出身绿林，与三教九流甚有交情。样貌阴险卑鄙，行为懒散，但战斗时又如猛虎出闸，势不可挡，惜战力无法持久。
      </p>
    </div>

  </el-container>



  <br><br><br><br><br><br><br><br>

  <el-container>
    <div class="liu">
      <el-image :src="chai"></el-image>
    </div>


    <div  class="liu" >
      <p  align="left">
        柴曜，摩尼教之主，外型英姿勃发、高大壮硕，带有贵族气息，眼神不怒而威，眉宇间总是透露着深沉。本性阴狠毒辣，行事雷厉风行，出手六亲不认。文韬武略无所不精，没人知道柴曜武功境界，据说见过的人都已命赴黄泉。
      </p>
    </div>

  </el-container>


  <br><br><br><br><br><br><br><br><br><br><br><br>

</el-main1>

</div>

</template>



<script>
export default {
  data () {
    return {
      name: 'system',
      home: 'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/title.jpg',
      liu: 'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/liu.png',
      zhao:'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/zhao.png',
      mi: 'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/mi.png',
      liang:'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/liang.png',
      li: 'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/li.png',
      luo: 'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/luo.png',
      ying: 'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/ying.png',
      mei: 'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/mei.png',
      chai:'https://tianmingfinal.oss-cn-beijing.aliyuncs.com/pics/chai.png' ,
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



.el-main1 {
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


.homepage1{
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
