<template>
  <div>
    <div class="panda_container">
      <div class="panda_nav_bar">
        <div class="panda_nav_bar_cont">
          <div class="slogan">旅行的意义</div>
          <ul class="nav-bar-set">
            <li class="set-list set-logIn" style="display: block;">
              <a class="person-text" style="cursor:pointer;">
                            <span class="set-text">
                                <span class="member-name" name="nav-bar-name">您好</span>，请登录
                            </span>
              </a>
            </li>
            <li class="set-list" style="display: block;">
              <a class="person-text nav-per">
                <span class="set-text"> 免费注册 </span>
              </a>
            </li>
            <li class="set-list" style="display: block;">
              <a class="person-text nav-per">
                <span class="set-text"> 个人中心 </span>
              </a>
            </li>
            <li class="set-list set-wechat" name="cui-nav-bar-set-list">
              <a href="#" class="person-text nav-myctrip"><span class="set-text">易腾创想</span></a>
            </li>
          </ul>
        </div>
      </div>
      <div class="panda_hd_cont">
        <div class="panda_hd">
          <div class="pandaLogo">
            <a title="盼达旅游网-PANDA">盼达旅游网</a>
          </div>
          <div class="panda_search">
            <input type="text" class="panda_search_input"  placeholder="搜索旅行地/酒店/旅游/景点门票/交通">
            <button type="button" class="panda_search_button">
              <img src="../assets/search.png">
            </button>
          </div>
        </div>
      </div>
      <div class="panda_nav_single">
        <div class="panda_nav">
          <ul  class="panda_nav_ul">
            <li class="panda_nav_li"><a href="../index.html">首页</a></li>
            <li class="divider "></li>
            <li class="panda_nav_li"><a>酒店</a></li>
            <li class="divider "></li>
            <li class="panda_nav_li"><a>旅游</a></li>
            <li class="divider "></li>
            <li class="panda_nav_li"><a>攻略</a></li>
            <li class="divider "></li>
            <li class="panda_nav_li"><a>自由行</a></li>
            <li class="divider "></li>
            <li class="panda_nav_li"><a>机票</a></li>
            <li class="divider "></li>
            <li class="panda_nav_li"><a>火车</a></li>
            <li class="divider "></li>
            <li class="panda_nav_li"><a>汽车 · 船</a></li>
            <li class="divider "></li>
            <li class="panda_nav_li"><a>用车</a></li>
            <li class="divider "></li>
            <li class="panda_nav_li"><a>门票</a></li>
            <li class="divider "></li>
            <li class="panda_nav_li"><a>跟团游</a></li>
            <li class="divider "></li>
            <li class="panda_nav_li"><a>全球购</a></li>
            <li class="divider "></li>
            <li class="panda_nav_li"><a>礼品卡</a></li>
            <li class="divider "></li>
            <li class="panda_nav_li"><a>商旅</a></li>
            <li class="divider "></li>
            <li class="panda_nav_li"><a>邮轮</a></li>
            <li class="divider "></li>
            <li class="panda_nav_li"><a>目的地</a></li>
            <li class="divider "></li>
            <li class="panda_nav_li"><a>金融</a></li>
            <li class="divider "></li>
            <li class="panda_nav_li"><a>更多</a></li>
          </ul>
        </div>
      </div>

      <!--数据-->
      <div class="panda_content" ><!--v-for="item in scenicspots"-->
        <div class="panda_detail_content">
          <div class="detail_dir">
            <a href="javascript:;">热门景点</a> > <a href="javascript:;">{{scenicspots.spotsname}}</a>
          </div>
          <div class="detail_title_box">
            <div class="detail_title_left">
              <div class="detail_img">
                <img :src="imgserver+'panda/'+scenicspots.spotsimg"/>
                <!--<img src="../assets/detail/detail_img.jpg">-->
              </div>
            </div>
            <div class="detail_title_right">
              <div class="detail_cotent_box">
                <h2>{{scenicspots.spotsname}}</h2><!--{{item.spotsname}}-->
                <ul class="detail_msg_ul">
                  <li class="detail_msg_li">
                    <span class="tip_title">景点地址</span>
                    <span class="tip_content">{{scenicspots.spotsaddr}}</span><!--{{item.spotsaddr}}-->
                  </li>
                  <li class="detail_msg_li">
                    <span class="tip_title">开放时间</span>
                    <span class="tip_content">{{scenicspots.spotsopentime}}</span><!--{{item.spotsopentime}}-->
                  </li>
                  <li class="detail_msg_li">
                    <span class="tip_title">服务承诺</span>
                    <ul class="service_type">
                      <li>如实描述</li>
                      <li>贵一赔三</li>
                      <li>入园保障</li>
                      <li>特殊退订保障</li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div class="comment_box">
                <div class="comment">
                  <img class="quotation_right" src="../assets/detail/quotation_right.png" >
                  <span>{{scenicspots.spotsoneworlds}}</span><!--{{item.spotsoneworlds}}-->
                  <img class="quotation_left" src="../assets/detail/quotation_left.png" >
                </div>
                <span class="personName">
                        —— 彦祖哥哥
                    </span>
              </div>
            </div>
          </div>


          <div class="detail_box">
            <div class="introduce_title">
              景点图片
            </div>
            <div><img v-for="item in SpotsImgs" :src="imgserver+'panda/'+item.simgurl" v-bind:style="{ width: 200 + 'px', height: 200 + 'px',marginLeft: 10+'px'}"/></div>
          </div>

          <div class="detail_box">
            <div class="introduce_title">
              景点简介
            </div>
            <div class="introduce_feature">
              <span>特色</span>
              老街巷中感受时尚慢生活
            </div>

            <div class="introduce_content" v-html="scenicspots.spotsdesc"><!--{{item.spotsdesc}}-->


                <img :src="imgserver+'panda/'+scenicspots.spotsimg"/>
                <!--<img src="../assets/detail/detailcontent1.jpg">
                <img src="../assets/detail/detailcontent2.jpg">-->

              <p><br>【老妈蹄花】炖的烂烂的一碗蹄花摆在白白的汤里，蹄花入口即化，汤汁洁白浓郁，里面还加了雪豆，蘸着红油的蘸料，吃起来别有一番风味。也就难怪成都的姑娘们个个都娇艳欲滴，这蹄花可是最好的美容滋补佳品啊。<br><br><strong>【龙抄手】</strong>四川人讲的抄手既是北方的馄饨。正宗龙抄手个大皮薄，馅心细嫩爽滑，汤色雪白，口味多样。<br><br><strong>【棒棒鸡】</strong>棒棒鸡本是乐山地区的传统小吃。棒棒鸡的鸡肉不是用刀切成，而是先用棒子打松后再手棒子而成，浇上久制的调料和红油，再加入花生米，口感麻辣鲜香。<br><br><strong>【串串香】</strong>成都的大街小巷，随处可见大大小小的串串香铺子。海带、排骨、毛肚、香肠、藕片、冬瓜、甭管荤的素的，竹签上一串，大锅里一拴，口感麻辣鲜香，酣畅淋漓。<br><br>夫妻肺片、川北凉粉、兔头……尝不尽的成都美食！<br><br></p>
              <p><strong><span>【出行贴士】</span></strong><strong>最佳出行时间：</strong>成都地处盆地，最适合旅行的时间是3～6月和9、10月。这两个时间段，温度适宜，雨水较少，是最适合出行的季节。当然，除了这两个时间段，冬季来成都的话，西岭雪山是观雪景和滑雪的好地方。<br><br><strong>市区公共交通：</strong><br>成都市区类似北京城区，分一环二环三环，每环之间有多条道路相连，交通四通八达，绝大多数景点都有公交车可达。成都公交多为无人售票车，上车1元，空调车2元，自行投币，不设找零。<br><br><strong>地铁：</strong>成都地铁目前只开放了一号和二号线。一号线可达升仙湖、火车北站、天府广场、火车南站和海洋公园；二号线可达茶店子车站、春熙路、金沙遗址博物馆，票价2～4元。&nbsp;&nbsp;&nbsp;&nbsp;</p>
            </div>

          </div>
        </div>
      </div>

      <div class="panda_footer">
        <div class="mod copyright">
          <p class="copyright">
            Copyright©<a>1999-2019,&nbsp;http://www.edu-learn4fun.com/.</a>
          </p>
          <p>All rights reserved.&nbsp;|&nbsp;蜀ICP备17005xxx号</p>
          <p class="supervision-call">
            旅游咨询：12345678丨成都易腾创想旅游有限公司
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  import {isDataValid,config} from "../util/validate";
  import {service} from "../util/service";
  import axios from 'axios';

    export default {
        name: "AttractionDetail",
      data(){
          return{
            spotsid: this.$route.params.id,
            scenicspots: [{spotsid:'',spotsname:'',spotsaddr:'',spotsaddr2:'',spotsopentime:'',spotsoneworlds:'',
              spotsimg:'',spotsstate:'',spotsfirst:'',spotshot:'',spotsareaid:'',spotsareaname:'',spotsdesc:''}],
            SpotsImgs: [{simgid:'',spotsid:'',simgurl:'',simgdesc:'',simgstate:'',simgsort:''}],
            imgserver: config.imgserver,
            dataserver:config.dataserver
          }

      },

      mounted:function () {
        var that =this;
        axios.get(config.dataserver+"/spots/spotsbyid/"+this.$route.params.id).then(res=>{
          this.scenicspots = res.data;
        })

        axios.get(config.dataserver+"/spots/imgslist/"+this.$route.params.id).then(res=>{
          this.SpotsImgs = res.data;
        })

      }

    }
</script>

<style scoped>
  *{
    margin: 0;padding: 0;
  }
  ul{
    list-style: none;
  }
  p{
    margin:0!important;
  }
  .panda_container{
    width: 100%;
    font-size: 12px;
    font-family: "Microsoft yahei", arial, Simsun, sans-serif;
    color: #333;
    background-color: #fff;
  }
  .panda_nav_bar{
    color: #333;
    background: #F4F4F4;
  }
  .panda_nav_bar .slogan {
    font-size: 12px;
    color: #666;
    display: inline-block;
    margin: 10px 0 0 14px;
  }
  .panda_nav_bar_cont{
    position: relative;/*相对定位*/
    min-width: 980px;
    max-width: 1180px;
    height: 36px;
    margin: 0 auto;
    background: #F4F4F4;
  }
  .nav-bar-set{
    position: absolute;/*绝对定位*/
    right: 0;
    top: 0;
    height: 36px;
  }
  .panda_nav_bar .set-list {
    float: left;/*浮动布局*/
    height: 12px;
    line-height: 12px;
    margin: 11px 0 0 0;
    border-right: 1px solid #DDDDDD;
    position: relative;/*相对定位*/
  }
  .panda_nav_bar .person-text {
    display: inline-block;
    margin: -12px -1px 0;
  }
  .panda_nav_bar .person-text .set-text {
    position: relative;/*相对定位*/
    display: inline-block;
    padding: 12px 0px;
    width: 92px;
    color: #666;
    text-align: center;
    border: 1px solid transparent;
    border-bottom: none;
  }
  .panda_nav_bar .set-logIn.set-list .person-text .set-text {
    width: 120px;
    color: #2ca182;
    border-right: none;
  }
  .panda_hd{
    position: relative;/*相对定位*/
    min-width: 980px;
    max-width: 1180px;
    height: 80px;
    margin: 0 auto;
  }
  .panda_hd .pandaLogo{
    display: inline-block;
    width: 126px;
    height: 43px;
    margin: 18px 0;
    overflow: hidden;
  }
  .panda_hd .pandaLogo a {
    display: block;
    width: 126px;
    height: 43px;
    background: url(../assets/logo.png) no-repeat;
    text-indent: -999px;
    overflow: hidden;
  }
  .panda_search{
    position: absolute;/*绝对定位*/
    top: 25px;
    left: 170px;
    width: 28%;
    font-family: "Microsoft Yahei", Tahoma;
  }
  .panda_search_input{
    border-radius: 4px;
    position: absolute;/*绝对定位*/
    top: 0;
    left: 0;
    width: 100%;
    height: 28px;
    padding: 0 45px 0 5px;
    line-height: 28px;
    font-size: 12px;
    font-family: "Microsoft Yahei", Tahoma;
    border: 1px solid #35b795;
    box-shadow: 2px 2px 1px 0 rgba(164, 203, 255, 0.25) inset;
    outline: 0 none;
    box-sizing:content-box;
  }
  .panda_search_button{
    position: absolute;/*绝对定位*/
    top: 1px;
    right: -51px;
    width: 42px;
    height: 28px;
    cursor: pointer;
    background-color: rgb(53, 183, 149);
    border: 0;
  }

  .panda_search_button img{
    width: 18px;
    height: 18px;
    margin: 5px auto;
  }
  .panda_nav_single{
    width: 100%;
    background: #35b795;
    height: 40px;
  }
  .panda_nav_single .panda_nav{
    min-width: 980px;
    max-width: 1180px;
    margin: 0 auto;
    height: 40px;
    background: #35b795;
  }
  .panda_nav_ul{
    width: 100%;
    margin: 0 auto;
    padding: 0;
    height: 40px;
  }
  .panda_nav_ul li{
    float: left;
  }
  .panda_nav_ul .panda_nav_li a{
    line-height: 40px;
    color: #fff;
    text-decoration: none;
    display: block;
    height: 40px;
    padding: 0 12px;
    cursor: pointer;
    font-size: 15px;
  }
  .panda_nav_ul li.panda_nav_li:hover{
    background: #2ca182;
  }
  .panda_nav_ul  .divider{
    width: 1px;
    height: 14px;
    padding-left: 0;
    margin: 13px 0 0;
    background-color: #2ca182;
    clear: none;
    border: none;
  }
  .panda_footer{
    padding: 28px 0 30px 0;
    color: #666;
    margin-top: 0;
    width: 1180px;
    margin: 28px auto 0;
    text-align: center;
  }
  .panda_content{
    background: #f5f8fa;
    overflow: hidden;
    width: 100%;
    height: auto;
    padding-top: 10px;
    padding-bottom: 40px;
  }
  .detail_dir{
    display: inline-block;
    color: #666;
  }
  .detail_dir a{
    color: #2ca182;
    text-decoration: none;
  }
  .panda_content .panda_detail_content{
    min-width: 980px;
    max-width: 1180px;
    margin: 0 auto;
  }
  .detail_title_box{
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 20px;
    height: 280px;
    border: 1px solid #dfdfdf;
    background-color: #fff;
  }
  .detail_title_left{
    width: 500px;
    float: left;
    height: 280px;
  }
  .detail_img{
    width: 500px;
    height: 280px;
  }
  .detail_img img{
    width: 100%;
    height: 100%;
  }
  .detail_title_right{
    float: right;
    width: 610px;
  }
  .detail_title_right h2{
    width: 400px;
    margin-bottom: 5px;
    font-size: 30px;
    font-weight: normal;
  }
  .detail_msg_ul{
    margin-top: 30px;
    margin-bottom: 5px;
  }
  .detail_msg_li{
    margin-top: 20px;
    width: 480px;
    line-height: 18px;
  }
  .detail_msg_li .tip_title{
    float: left;
    width: 60px;
    font-weight: 700;
  }
  .detail_msg_li .tip_content{
    margin-left: 20px;
  }
  .service_type{
    height: 18px;
    margin-left: 80px;
  }
  .service_type>li{
    float: left;
    margin-right: 10px;
    padding: 0 5px;
    height: 18px;
    line-height: 18px;
    color: #35b795;
    border: 1px solid #2ca182;
    cursor: pointer;

  }
  .comment_box{
    padding: 0 30px;
    line-height: 20px;
    overflow: hidden;
    position: relative;
    top: 20px;
  }
  .comment{
    margin: 10px 0;
    height: 40px;
  }
  .comment img{
    width: 24px;
    height: 24px;
  }
  .comment span{
    display: inline-block;
    line-height: 40px;
    position: absolute;
    left: 100px;
  }
  .quotation_right{
    position: absolute;
    left: 0;
  }
  .quotation_left{
    position: absolute;
    right: 100px;
    bottom: 20px;
  }
  .personName{
    float: right;
    margin-right: 100px;
    color: #666;
  }
  .detail_box{
    padding: 41px 48px 25px 48px;
    background-color: #fff;
    border: 1px solid #d5d5d5;
    box-shadow: 1px 1px 1px #ebeef0;
    position: relative;
  }
  .introduce_title{
    position: absolute;
    top: 0;
    left: -1px;
    padding-left: 48px;
    width: 100px;
    height: 41px;
    line-height: 41px;
    color: #fff;
    font-size: 16px;
    font-style: normal;
    background-repeat: no-repeat;
    background-color: #35b795;
  }
  .introduce_feature{
    margin-top: 20px;
    overflow: hidden;
  }
  .introduce_feature span{
    display: inline-block;
    padding: 2px 8px;
    margin-right: 20px;
    color: #fff;
    text-align: center;
    vertical-align: middle;
    background-color: #ff9913;
    border-radius: 3px;
  }
  .introduce_content{
    line-height: 22px;
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px dotted #ccc;
    overflow: hidden;
  }
</style>
