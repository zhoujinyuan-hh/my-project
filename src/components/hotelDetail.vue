<template>
    <div>
      <div class="panda_container">
        <div class="panda_nav_bar">
          <div class="panda_nav_bar_cont">
            <div class="slogan">旅行的意义</div>
            <ul class="nav-bar-set">
              <li class="set-list set-logIn" style="display: block;">
                <a class="person-text" style="cursor:pointer;" href="./login.html">
                            <span class="set-text">
                                <span class="member-name" name="nav-bar-name">您好</span>，请登录
                            </span>
                </a>
              </li>
              <li class="set-list" style="display: block;">
                <a href="./register.html" class="person-text nav-per">
                  <span class="set-text"> 免费注册 </span>
                </a>
              </li>
              <li class="set-list" style="display: block;">
                <a class="person-text nav-per" href="./person_center.html">
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
              <a href="../index.html" title="盼达旅游网-PANDA">盼达旅游网</a>
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
        <div class="panda_content">
          <div class="detail_dir">
            <!--<a href="javascript:;">热门景点</a> > <a href="javascript:;">宽窄巷子</a>-->
          </div>
          <div class="hotel_left">
            <div class="hotel_info">
              <div class="name">
                <p class="cn_name">{{hotel.hotelname}}</p>
                <p class="en_name">YeFeng JunTing Holiday Apartment{{hotel.hotelename}}</p>
              </div>
              <div class="hotel_type">
                <span class="type">考试周边</span>
                <span class="type">考试周边</span>
                <span class="type">考试周边</span>
                <span class="type">考试周边</span>
                “<span class="orange"> 服务周到, 交通方便 </span>”
              </div>
              <div class="hotel_address">
                <span>{{hotel.hoteladdr}}</span>
                <span>经纬度：{{hotel.hoteladdr2}} </span>
              </div>
            </div>
            <div class="hotel_picList">
              <img  v-for="item in HotelImgs" :src="imgserver+'panda/'+item.himgurl" v-bind:style="{ width: 200 + 'px', height: 200 + 'px',marginLeft: 10+'px' }"/>
              <!--<div class="pic1" v-bind:style="{ width: 200 + 'px', height: 200 + 'px' }"></div>-->
              <!--<div class="pic2"></div>
              <div class="pic3"></div>
              <div class="pic4"></div>
              <div class="pic5"></div>
              <div class="pic6"></div>
              <div class="pic7"></div>
              <div class="pic8"></div>
              <div class="pic9"></div>-->
            </div>
            <div class="hotel_info_comment">
              <h2 class="detail_title">酒店介绍</h2>
              {{hotel.hoteldesc}}
              <!--<p>9102年开业&nbsp;&nbsp;9102年装修&nbsp;&nbsp;23间房&nbsp;&nbsp;</p>
              <br/>
              <span>　　成都春熙云居度假公寓坐落于天府广场、盐市口商业区，优越的地理位置使它成为成都一个令人向往的住宿选择。&nbsp;&nbsp;酒店距离成都双流国际机场仅18km，距离成都站仅5km，提供给旅客多项便捷的交通选择。从距离酒店几分钟路程的太升南路地铁站出发，旅客可以很轻松到达城市里想去的地方。若是计划在酒店周边好好游玩，宽窄巷子和锦里定能满足您的需求。<br>酒店为您在客房内配备了国际长途电话、雨伞和房内保险箱，所有入住的客人均可便捷的使用。电热水壶和瓶装水可供使用，便捷的客房设施定能让您倍感舒适。浴室内提供拖鞋、24小时热水和浴缸，让您感受到宾至如归的享受。旅客可以在中餐厅享用可口的美食。您可以到大堂吧与朋友畅饮聊天度过闲暇时光。如果旅客愿意，酒店可以提供满足需求的客房送餐服务。对于常驻旅客来说，若是厌倦了酒店的餐饮，附近的席罐罐罐饭(百盛购物中心店)（川菜）和FLAIR餐厅酒吧（酒吧/酒馆）或许能勾起您的食欲，他们家的罐罐香米饭和幽夜丁香均深受好评，山中老茶馆（茶馆/茶室）的美食也不错哦！<br>相信SPA周到的服务和室外游泳池一流的设施，会让您拥有别样的体验。酒店配置有会议厅，定能满足您商务活动方面的需求。24小时开放的前台服务可为您随时提供信息，以帮助您探索这个魅力之都。</span>
            -->
            </div>
            <div class="hotel_info_table">
              <h2 class="detail_title">酒店政策</h2>
              <table class="detail_table">
                <tr>
                  <th>入住和离店</th>
                  <td>{{hotel.hotelopentime}}</td>
                </tr>
                <tr>
                  <th>儿童政策</th>
                  <td>
                    <ul class="policy_list_new">
                      <li><span class="dot">•</span>{{hotel.hotelchildpolicy}}</li>
                      <!--<li><span class="dot">•</span>不接受16岁以下客人在无监护人陪同的情况下入住</li>-->
                    </ul>
                  </td>
                </tr>
                <tr>
                  <th>早餐信息</th>
                  <td><p>{{hotel.hotelbreakfast}}</p></td>
                </tr>
                <tr>
                  <th>宠物</th><td>{{hotel.hotelpetpolicy}}</td>
                </tr>
                <tr>
                  <th>可用支付方式</th>
                  <td>
                    <img class="pay_img" src="../assets/hotelDetail/wechat.png" alt="">
                  </td>
                </tr>
                </tbody>

              </table>
            </div>
            <div class="button_order">
              <div class="button_main">预订</div>
              <div class="button_skin">在线付</div>
            </div>
          </div>
          <div class="hotel_right">
            <div class="traffic_side">

              <div class="title">交通信息</div>
              <div class="traffic_box">
                <div class="traffic_item" v-for="item in HotelTraffic">
                  <p class="name"><a href="javascript:;" class="rounte">路线</a>{{item.htrdestination}}</p>
                  <p class="distance">{{item.htrdesc}}（约{{item.htrtime}}）</p>
                  <!--<p class="name"><a href="javascript:;" class="rounte">路线</a>天府广场/盐市口商业区</p>
                  <p class="distance">驾车距离1.9公里（约5分钟）</p>-->
                </div>
                <!--<div class="traffic_item">
                  <p class="name"><a href="javascript:;" class="rounte"></a>路线</a>双流国际机场</p>
                  <p class="distance">驾车距离20.0公里（约42分钟）</p>
                </div>
                <div class="traffic_item">
                  <p class="name"><a href="javascript:;" class="rounte">路线</a>成都站</p>
                  <p class="distance">驾车距离4.8公里（约13分钟）</p>
                  <p class="name"><a href="javascript:;" class="rounte">路线</a>成都南站</p>
                  <p class="distance">驾车距离7.1公里（约16分钟）</p>
                </div>
                <div class="traffic_item">
                  <p class="name"><a href="javascript:;" class="rounte">路线</a>市中心</p>
                  <p class="distance">驾车距离1.9公里（约5分钟）</p>
                </div>
                <div class="traffic_item">
                  <p class="name"><a href="javascript:;" class="rounte">路线</a>宽窄巷子</p>
                  <p class="distance">驾车距离3.2公里（约14分钟）</p>
                  <p class="name"><a href="javascript:;" class="rounte">路线</a>春熙路</p>
                  <p class="distance">驾车距离1.7公里（约7分钟）</p>
                </div>-->
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
        name: "hotelDetail",
      data(){
        return{
          hotelid: this.$route.params.id,
          imgserver: config.imgserver,
          dataserver:config.dataserver,
          hotel: [{hotelid:'',hotelname:'',hotelename:'',hoteladdr:'',hoteladdr2:'',hotelimg:'',
            hotelopentime:'',hotelchildpolicy:'',hotelbreakfast:'',hotelpetpolicy:'',hotelstate:'',hotellable:'',hoteltypeid:'',hoteltypename:'',hoteldesc:''}],
          HotelImgs: [{himgid:'',hotelid:'',himgurl:'',himgdesc:'',himgsort:''}],
          HotelTraffic: [{htrid:'',hotelid:'',htrdestination:'',htrdesc:'',htrtime:'',htrstate:'',htrsort:''}],
        }

      },

      mounted:function () {
        var that =this;
        axios.get(config.dataserver+"hotels/hotelByid/"+this.$route.params.id).then(res=>{
          that.hotel = res.data;

        })
        axios.get(config.dataserver+"hotels/listImgs/"+this.$route.params.id).then(res=>{
          that.HotelImgs = res.data;

        })
        axios.get(config.dataserver+"hotels/listTraffic/"+this.$route.params.id).then(res=>{
          that.HotelTraffic = res.data;

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
  a{
    text-decoration: none;
    color: #2ca182;
  }
  a:hover{
    text-decoration: none;
    color: #2ca182;
  }
  .panda_container{
    width: 100%;
    min-width: 1280px;
    /* max-width: 1280px; */
    margin: 0 auto;
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
    z-index: 27;
    min-width: 1280px;
    max-width: 1280px;
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
    width: 1280px;
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
    width: 1280px;
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
  .panda_nav_ul li.active{
    background: #2ca182;
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
  .panda_content{
    overflow: hidden;
    width: 1280px;
    margin: 0 auto;
  }
  .panda_content .hotel_left{
    width: 860px;
    margin-top: 10px;
    float: left;
  }
  .panda_content .hotel_right{
    width: 300px;
    float: right;
  }
  .detail_dir{
    color: #666;
  }
  .detail_dir a{
    color: #2ca182;
    text-decoration: none;
  }
  .panda_footer{
    padding: 28px 0 30px 0;
    color: #666;
    margin-top: 0;
    width: 1180px;
    margin: 28px auto 0;
    text-align: center;
  }

  .hotel_info .name .cn_name{
    display: inline-block;
    vertical-align: bottom;
    font: bold 20px/22px "microsoft yahei",simsun;
    color: #2ca182;;
  }
  .hotel_info .name .en_name{
    display: inline-block;
    vertical-align: bottom;
    padding-left: 4px;
    font: 12px Arial;
    color: #333;
  }
  .hotel_type{
    margin: 4px 0;
  }
  .hotel_type .type{
    color: #fff;
    background-color: #2ca182;
    display: inline-block;
    padding: 1px 4px;
    margin-left: 3px;
    height: 16px;
    line-height: 16px;
  }
  .hotel_type .orange{
    display: inline-block;
    height: 16px;
    line-height: 16px;
    margin-left: 3px;
    color: #ff9a14;
  }
  .hotel_address{
    margin-bottom: 5px;
    line-height: 25px;
    color: #555;
  }
  .hotel_picList{
    overflow: hidden;
  }
  .hotel_picList>div{
    float: left;
  }
  .pic2,.pic3,.pic4,.pic5,.pic6,.pic7,.pic8,.pic9{
    margin-left: 6px;
    margin-bottom: 6px;
    background-position: 50% 50%;
    background-repeat: no-repeat;
  }
  .hotel_picList .pic1{
    width: 290px;
    height: 224px;
    background-image: url(../assets/hotelDetail/pic1.jpg);
  }
  .hotel_picList .pic2{
    width: 246px;
    height: 109px;
    background-image: url(../assets/hotelDetail/pic2.jpg);
  }
  .hotel_picList .pic3{
    width: 100px;
    height: 109px;
    background-image: url(../assets/hotelDetail/pic3.jpg);
  }
  .hotel_picList .pic4{
    width: 100px;
    height: 109px;
    background-image: url(../assets/hotelDetail/pic4.jpg);
  }
  .hotel_picList .pic5{
    width: 100px;
    height: 109px;
    background-image: url(../assets/hotelDetail/pic5.jpg);
  }
  .hotel_picList .pic6{
    width: 100px;
    height: 109px;
    background-image: url(../assets/hotelDetail/pic6.jpg);
  }
  .hotel_picList .pic7{
    width: 246px;
    height: 109px;
    background-image: url(../assets/hotelDetail/pic7.jpg)
  }
  .hotel_picList .pic8{
    width: 100px;
    height: 109px;
    background-image: url(../assets/hotelDetail/pic8.jpg)
  }
  .hotel_picList .pic9{
    width: 100px;
    height: 109px;
    background-image: url(../assets/hotelDetail/pic9.jpg)
  }
  .detail_title{
    color: #2ca182;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: normal;
    padding-bottom: 10px;
  }
  .hotel_info_comment span{
    display: inline-block;
    line-height: 24px;
  }
  .hotel_info_table{
    margin-top: 30px;
  }
  .detail_table{
    width: 100%;
  }
  .detail_table>tbody>tr{
    border-bottom: 1px dashed #111;
  }
  .detail_table th {
    width: 100px;
    text-align: left;
    color: #999;
    font-weight: normal;
    border-bottom: 1px dashed #ccc;
  }
  .detail_table td{
    padding: 8px 0;
    vertical-align: top;
    border-bottom: 1px dashed #ccc;
  }
  .policy_list_new li .dot{
    margin-right: 11px;
  }
  .pay_img{
    margin-right: 10px;
    border: 1px solid #eee;
    border-radius: 2px;
  }
  .button_order{
    float: right;
    overflow: hidden;
    margin: 10px 0;
    cursor: pointer;
  }
  .button_order .button_main{
    height: 28px;
    line-height: 28px;
    font-size: 14px;
    color: #fff;
    background: #ff9a14;
    width: 76px;
    text-align: center;
    border-radius: 3px 3px 0 0;
  }
  .button_order .button_skin{
    border: 1px solid #ffd092;
    border-top: none;
    height: 14px;
    line-height: 14px;
    color: #ff7d15;
    background: #ffecd2;
    width: 74px;
    text-align: center;
    border-radius: 0 0 3px 3px;
  }
  .hotel_right .traffic_side {
    margin: 0px 0 10px;
    padding: 10px 10px 0;
    background-color: #f1f1f1;
    overflow: hidden;
  }
  .traffic_side .title {
    margin: 10px;
    font-weight: bold;
    font-size: 16px;
  }
  .traffic_side .traffic_item {
    padding: 10px 0 0 22px;
    border-top: 1px dashed #ccc;
  }
  .traffic_side p{
    line-height: 20px;
  }
  .traffic_side .distance {
    margin-bottom: 10px!important;
    color: #999;
  }
  .traffic_side .name .rounte {
    float: right;
    margin-left: 4px;
    text-decoration: none;
    color: #2ca182;
  }

</style>
