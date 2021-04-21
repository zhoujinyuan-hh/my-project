<template>
<div>
  <div class="panda_container">
    <div class="panda_nav_bar">
      <div class="panda_nav_bar_cont">
        <div class="slogan">旅行的意义</div>
        <ul class="nav-bar-set">
          <li class="set-list set-logIn" id="nav-bar-set-login" style="display: block;">
            <a class="person-text" href="./html/login.html" style="cursor:pointer;">
                            <span class="set-text">
                                <span class="member-name" name="nav-bar-mname">您好</span>，请登录
                            </span>
            </a>
          </li>
          <li class="set-list" id="nav-bar-set-reg" style="display: block;">
            <a class="person-text nav-per" href="./html/register.html">
              <span class="set-text"> 免费注册 </span>
            </a>
          </li>
          <li class="set-list" style="display: block;">
            <a class="person-text nav-per"  href="./html/person_center.html">
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
          <a href="./index.html" title="盼达旅游网-PANDA">盼达旅游网</a>
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
          <li class="panda_nav_li active"><a href="../index.html">首页</a></li>
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
    <div class="travel_container">
      <!-- 当季推荐 -->
      <div class="bd_recommend bg_gary">
        <div class="wrap">
          <div class="title">
            <h2 class="djtj">当季推荐</h2>
          </div>
          <div class="photo_recommend">
            <div class="pic">
              <div class="img_wrapper">
                <a href="javascript:void(0);">
                  <img src="../assets/travel/recommend_img1.jpeg" alt="">
                  <div class="bg_content">
                    <div class="title_wrapper">
                      <p class="title">5月去哪玩</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="pic">
              <div class="img_wrapper">
                <a href="javascript:void(0);">
                  <img src="../assets/travel/recommend_img2.jpeg" alt="">
                  <div class="bg_content">
                    <div class="title_wrapper">
                      <p class="title">人均500的周边游目的地</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="pic">
              <div class="img_wrapper">
                <a href="javascript:void(0);">
                  <img src="../assets/travel/recommend_img3.jpeg" alt="">
                  <div class="bg_content">
                    <div class="title_wrapper">
                      <p class="title">假装在国外！不出境带你环游世界</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>

        </div>
      </div>
      <!-- /当季推荐 -->

      <!-- 周边游 -->
      <div class="bd_recommend bg_gary zby_recommend">
        <div class="wrap">
          <div class="title">
            <h2 class="zby">周边游<span> | 成都</span></h2>
          </div>
          <div class="photo_recommend">
            <div class="chendu_content">
              <ul class="list">
                <li class="around_item">
                  <img width="224" height="170" src="../assets/travel/zby1.jpg" alt="">
                  <span class="name">青城天下幽</span>
                </li>
                <li class="around_item">
                  <img width="224" height="170" src="../assets/travel/zby2.jpg" alt="">
                  <span class="name">八美草原</span>
                </li>
                <li class="around_item">
                  <img width="224" height="170" src="../assets/travel/zby3.jpg" alt="">
                  <span class="name">东拉山大峡谷</span>
                </li>
                <li class="around_item">
                  <img width="224" height="170" src="../assets/travel/zby4.jpg" alt="">
                  <span class="name">中国水蜜桃之乡</span>
                </li>
                <li class="around_item">
                  <img width="224" height="170" src="../assets/travel/zby5.jpg" alt="">
                  <span class="name">天生三桥赏奇观</span>
                </li>
              </ul>
            </div>

            <div class="clearfix"></div>
          </div>

        </div>
      </div>
      <!-- /周边游 -->

      <!-- 攻略游记 -->
      <div class="bd_recommend raiders_note ">
        <div class="wrap">
          <div class="note_lt lf">
            <div class="title">
              <h2 class="djtj">攻略游记</h2>
            </div>
            <div class="notes_content">
              <ul class="b-dest-tab" id="navfloat"><!--item.areaid-->
                <li v-for="(item,index) in areaData" :class="[productIndex ==index?'active':'']"  @click="product(index,item.areaid)"><a href="javascript:void(0)">{{item.areaname}}</a></li>

              </ul><!--:class="[productIndex ==index?'active':'']"-->

              <!--<dl class="b-dest-tab">
                <dt>目的地</dt>
                <dd>

                  <a class="active" href="javascript:void(0);" >全部</a>
                  <a href="javascript:void(0);" v-for="(item,index) in areaData" :class="[productIndex ==index?'active':'']"  @click="product(index,item.areaid)">成都</a>
                </dd>
              </dl>-->
              <ul class="note_ul">
                <li class="note_li" v-for="item in scenicspots">
                  <div class="face">
                    <img :src="imgserver+'panda/'+item.spotsimg" width="50" height="50" alt="" title="这是用户的名字啦"/>
                  </div>
                  <div class="note_tit title">
                    <h2>
                      <a href="#" @click="getDetail(item.spotsid)">
                        {{item.spotsname}}</a>
                    </h2>
                  </div>
                  <div class="person">
                    <a href="javascript:;" class="note_name">这是用户的名字呢</a>
                    <span class="c99">2018-08-02&nbsp;出发</span>
                    <span class="c99">
                                            <span class="note_vline">|</span>
                                            共3天
                                        </span>
                    <ul class="nums clrfix">
                      <li class="numTab">
                        <i class="glyphicon glyphicon-eye-open"></i>
                        <span>2.6万</span>
                      </li>
                      <li class="numTab">
                        <i class="glyphicon glyphicon-circle-arrow-up"></i>
                        <span>48</span>
                      </li>
                      <li class="numTab">
                        <i class="glyphicon glyphicon-comment"></i>
                        <span>3</span>
                      </li>
                    </ul>
                  </div>
                  <dl class="cont_dl c66 clrfix">
                    <dt class="detit c99 lf">地址：</dt>
                    <dd>{{item.spotsaddr}}</dd>
                  </dl>
                  <dl class="cont_dl c66 clrfix">
                    <dt class="detit c99 lf"></dt>
                    <dd class="place">{{item.spotsoneworlds}}</dd>

                  </dl>
                  <ul class="imgul">
                    <li class="imgli">
                      <img :src="imgserver+'panda/'+item.spotsimg"/>
                    </li>

                  </ul>
                </li>

                <!--<li class="note_li">
                  <div class="face">
                    <img src="../assets/travel/user.jpg" width="50" height="50" alt="" title="这是用户的名字啦">
                  </div>
                  <div class="note_tit title">
                    <h2>成都，一个美食爱好者的首选城市</h2>
                  </div>
                  <div class="person">
                    <a href="javascript:;" class="note_name">这是用户的名字呢</a>
                    <span class="c99">2020-01-02&nbsp;出发</span>
                    <span class="c99">
                                            <span class="note_vline">|</span>
                                            共7天
                                        </span>
                    <ul class="nums clrfix">
                      <li class="numTab">
                        <i class="glyphicon glyphicon-eye-open"></i>
                        <span>21.6万</span>
                      </li>
                      <li class="numTab">
                        <i class="glyphicon glyphicon-circle-arrow-up"></i>
                        <span>148</span>
                      </li>
                      <li class="numTab">
                        <i class="glyphicon glyphicon-comment"></i>
                        <span>131</span>
                      </li>
                    </ul>
                  </div>
                  <dl class="cont_dl c66 clrfix">
                    <dt class="detit c99 lf">途径：</dt>
                    <dd>成都</dd>
                  </dl>
                  <dl class="cont_dl c66 clrfix">
                    <dt class="detit c99 lf">行程：</dt>
                    <dd class="place">春熙路</dd>
                    <dd class="aline c99">&gt;</dd>
                    <dd class="place">文殊坊</dd>
                    <dd class="aline c99">&gt;</dd>
                    <dd class="place">宽窄巷子</dd>
                    <dd class="aline c99">&gt;</dd>
                    <dd class="place">杜甫草堂</dd>
                    <dd class="aline c99">&gt;</dd>
                    <dd class="place">人民公园</dd>
                    <dd class="aline c99">&gt;</dd>
                    <dd class="place">天府广场</dd>
                    <dd class="aline c99">&gt;</dd>
                    <dd class="place">青羊宫</dd>
                  </dl>
                  <ul class="imgul">
                    <li class="imgli">
                      <img src="../assets/travel/gonglve_img6.jpg" alt="">
                    </li>
                    <li class="imgli">
                      <img src="../assets/travel/gonglve_img7.jpg" alt="">
                    </li>

                  </ul>
                </li>
                <li class="note_li">
                  <div class="face">
                    <img src="../assets/travel/user.jpg" width="50" height="50" alt="" title="这是用户的名字啦">
                  </div>
                  <div class="note_tit title">
                    <h2>
                      成都 请赐我一场人间烟火|城西三日行记
                    </h2>
                  </div>
                  <div class="person">
                    <a href="javascript:;" class="note_name">这是用户的名字呢</a>
                    <span class="c99">2018-08-02&nbsp;出发</span>
                    <span class="c99">
                                            <span class="note_vline">|</span>
                                            共3天
                                        </span>
                    <ul class="nums clrfix">
                      <li class="numTab">
                        <i class="glyphicon glyphicon-eye-open"></i>
                        <span>2.6万</span>
                      </li>
                      <li class="numTab">
                        <i class="glyphicon glyphicon-circle-arrow-up"></i>
                        <span>48</span>
                      </li>
                      <li class="numTab">
                        <i class="glyphicon glyphicon-comment"></i>
                        <span>3</span>
                      </li>
                    </ul>
                  </div>
                  <dl class="cont_dl c66 clrfix">
                    <dt class="detit c99 lf">途径：</dt>
                    <dd>成都</dd>
                  </dl>
                  <dl class="cont_dl c66 clrfix">
                    <dt class="detit c99 lf">行程：</dt>
                    <dd class="place">奇味烧烤</dd>
                    <dd class="aline c99">&gt;</dd>
                    <dd class="place">军屯锅盔</dd>
                    <dd class="aline c99">&gt;</dd>
                    <dd class="place">陈麻婆豆腐(骡马市店)</dd>
                    <dd class="aline c99">&gt;</dd>
                    <dd class="place">马路边边麻辣烫(致民路直营店)</dd>
                  </dl>
                  <ul class="imgul">
                    <li class="imgli">
                      <img src="../assets/travel/gonglve_img8.jpg" alt="">
                    </li>
                    <li class="imgli">
                      <img src="../assets/travel/gonglve_img9.jpg" alt="">
                    </li>
                  </ul>
                </li>
                <li class="note_li">
                  <div class="face">
                    <img src="../assets/travel/user.jpg" width="50" height="50" alt="" title="这是用户的名字啦">
                  </div>
                  <div class="note_tit title">
                    <h2>
                      成都的悠闲慢生活
                    </h2>
                  </div>
                  <div class="person">
                    <a href="javascript:;" class="note_name">这是用户的名字呢</a>
                    <span class="c99">2018-08-02&nbsp;出发</span>
                    <span class="c99">
                                            <span class="note_vline">|</span>
                                            共3天
                                        </span>
                    <ul class="nums clrfix">
                      <li class="numTab">
                        <i class="glyphicon glyphicon-eye-open"></i>
                        <span>2.6万</span>
                      </li>
                      <li class="numTab">
                        <i class="glyphicon glyphicon-circle-arrow-up"></i>
                        <span>48</span>
                      </li>
                      <li class="numTab">
                        <i class="glyphicon glyphicon-comment"></i>
                        <span>3</span>
                      </li>
                    </ul>
                  </div>
                  <dl class="cont_dl c66 clrfix">
                    <dt class="detit c99 lf">途径：</dt>
                    <dd>成都</dd>
                  </dl>
                  <dl class="cont_dl c66 clrfix">
                    <dt class="detit c99 lf">行程：</dt>
                    <dd class="place">奇味烧烤</dd>
                    <dd class="aline c99">&gt;</dd>
                    <dd class="place">军屯锅盔</dd>
                    <dd class="aline c99">&gt;</dd>
                    <dd class="place">陈麻婆豆腐(骡马市店)</dd>
                    <dd class="aline c99">&gt;</dd>
                    <dd class="place">马路边边麻辣烫(致民路直营店)</dd>
                  </dl>
                  <ul class="imgul">
                    <li class="imgli">
                      <img src="../assets/travel/gonglve_img10.jpg" alt="">
                    </li>
                  </ul>
                </li>-->

              </ul>
            </div>
          </div>
          <div class="note_rt rt">
            <div class="weixin">
              <div class="title">
                <h2>微信关注盼达攻略</h2>
              </div>
              <div class="detail clrfix">
                <img src="../assets/travel/erweima.jpg" width="112" height="112" class="erCode lf">
                <p class="detailP">扫码关注易腾君~ 能在第一时间收到最新活动的通知！避免错过福利喔~ 更有免费旅行等你来！</p>
              </div>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
      </div>
      <!-- /攻略游记 -->
    </div>

    <!-- 工具栏 -->
    <div class="pd_tool">
      <div class="to_top" id="toTop">
        <i class="glyphicon glyphicon-menu-up"></i>
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
</template>

<script>
  import {isDataValid,config} from "../util/validate";
  import {service} from "../util/service";
  import axios from 'axios';


  export default {
        name: "spotslist",
        data(){
          return{
            areaData: [{areaid: '',areaname: '',areastate:'',areasort:''}],
            productIndex:0,
            scenicspots: [{spotsid:'',spotsname:'',spotsaddr:'',spotsaddr2:'',spotsopentime:'',spotsoneworlds:'',
              spotsimg:'',spotsstate:'',spotsfirst:'',spotshot:'',spotsareaid:'',spotsareaname:'',spotsdesc:''}],
            SpotsImgs: [{simgid:'',spotsid:'',simgurl:'',simgdesc:'',simgstate:'',simgsort:''}],
            imgserver: config.imgserver,
            dataserver:config.dataserver,
          }
        },
    methods:{
      getProduct(areaid){
        axios.get(config.dataserver+"/spots/hotlist/"+areaid).then(res=>{
          this.scenicspots = res.data;
        })

        /*axios.get(config.dataserver+"/spots/imgslist/"+areaid).then(res=>{
          this.SpotsImgs = res.data;
        })*/
      },
      product(index,areaid){
        let that =this;
        this.productIndex = index;
        that.getProduct(areaid);

      },

      getDetail(id){
        this.$router.push({
          path:`/attractionDetail/${id}`,
        })
      },
    },

    mounted:function () {
      var that =this;
      axios.get(config.dataserver+"/spots/arealist").then(res=>{
        that.areaData = res.data;
        that.getProduct(that.areaData[0].areaid);
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
    text-decoration: none!important;
    color: #2ca182;
  }
  a:hover{
    text-decoration: none;
    color: #2ca182;
  }
  a:focus{
    color: #2ca182;
  }
  .clrfix {
    zoom: 1;
    /* 清除浮动 */
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


  .travel_container{
    background: #fff;
  }
  .wrap{
    position: relative;
    margin: 0 auto;
    padding: 15px 0 0;
    width: 1200px;
  }
  .title h2{
    font-size: 26px;
    font-family: "Microsoft YaHei";
    color: #333;
  }
  .photo_recommend{
    clear: both;
  }
  .photo_recommend .pic{
    float: left;
    margin-left: 15px;
    width: 390px;
    height: 302px;
  }
  .photo_recommend .pic:first-child{
    margin-left: 0px;
  }
  .photo_recommend .pic .img_wrapper{
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  .photo_recommend .pic .img_wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .photo_recommend .pic .img_wrapper .bg_content{
    background: linear-gradient(-180deg, rgba(163,119,66,0.00) 0%, #658898 100%);
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .bg_content .title_wrapper{
    max-height: 64px;
    width: 100%;
    padding: 10px;
    padding-bottom: 0;
    margin-bottom: 10px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    box-sizing: border-box;
    color: #fff;
    font-size: 18px;
  }
  .zby span{
    color: #2ca182;
  }
  .chendu_content .list{
    margin: 20px 0 0 -20px;
    height: 170px;
    overflow: hidden;
    zoom: 1;
    clear: both;
  }
  .chendu_content .list>li.around_item{
    float: left;
    position: relative;
    margin-left: 20px;
    overflow: hidden;
  }
  .around_item span.name{
    position: absolute;
    left: 0;
    bottom: 0;
    display: block;
    width: 100%;
    height: 40px;
    color: #fff;
    font-family: "Microsoft YaHei";
    font-size: 18px;
    line-height: 40px;
    text-align: center;
    background: linear-gradient(-180deg, rgba(163,119,66,0.00) 0%, #1f1f1f 100%);
    cursor: pointer;
  }
  .zby_recommend{
    padding-bottom: 45px;
  }
  .bd_recommend.bg_gary{
    background-color: #f4f4f4;
  }

  .note_lt{
    width: 880px;
  }
  .lf{
    float: left;
  }
  .note_rt{
    width: 225px;
  }
  .note_rt .title h2 {
    font-size: 20px;
  }
  .rt{
    float: right;
  }
  .note_lt .b-dest-tab {
    clear: both;
    height: 38px;
    overflow: hidden;
    margin: 19px 0 0;
    border: solid 1px #dfdfdf;
    line-height: 38px;
  }
  .note_lt .b-dest-tab {
    clear: both;
    height: 38px;
    overflow: hidden;
    margin: 19px 0 0;
    border: solid 1px #dfdfdf;
    line-height: 38px;
  }
  .note_lt .b-dest-tab dt {
    float: left;
    width: 80px;
    background-color: #f4f4f4;
    font-size: 16px;
    color: #999;
    text-align: center;
    font-weight: normal;
    line-height: inherit;
  }
  .note_lt .b-dest-tab dd{
    line-height: inherit;
  }
  .b-dest-tab dd {
    margin-left: 81px;
    height: 38px;
    overflow: hidden;
  }
  .b-dest-tab dd a {
    float: left;
    margin-left: 29px;
    white-space: nowrap;
    text-decoration: none;
  }
  .b-dest-tab dd a:hover {
    color: #35b795;
  }
  .b-dest-tab dd .active:link, .b-dest-tab dd .active:visited, .b-dest-tab dd.active:hover {
    font-weight: bold;
    color: #35b795;

  }
  .b-dest-tab dd a:link,.b-dest-tab dd a:visited{
    color:#666
  }
  .b-dest-tab dd a:hover{
    color:#35b795
  }
  .note_li{
    position: relative;
    top: 1px;
    padding: 25px 0 20px 65px;
    border-bottom: 1px dashed #e5e5e5;
    overflow: hidden;
  }

  .c99{
    color: #999;
  }
  .note_li .face{
    position:absolute;
    left:0;_left:-60px
  }
  .note_li .face>img{
    border-radius:25px
  }
  .note_tit h2 {
    font-size: 18px;
    line-height: 27px;
    margin: 0;
  }
  .person {
    margin: 8px 0;
    position: relative;
  }
  .note_name{
    margin-right: 8px;
  }
  .note_vline {
    padding: 0 7px;
    font-family: "simsun";
    color: #ccc;
  }
  .person .nums {
    position: absolute;
    right: 0;
    bottom: 0;
  }
  .person .nums .numTab{
    float:left;
    margin-left:12px;
    font-family:"Microsoft YaHei";
    color:#999
  }
  .person .nums .numTab .iconfont{
    position:relative;
    margin-right:2px;
    top:3px;
    color:#ccc
  }
  .aline{
    margin:0 7px
  }

  .cont_dl{
    overflow: hidden;

  }
  dl.cont_dl{
    margin-bottom: 7px;
  }
  .cont_dl dd{
    float:left
  }
  .imgul{
    margin:15px 0 0 -5px;
    height:150px;
    overflow:hidden;
  }
  .imgli{
    float:left;
    margin-left:5px
  }
  .pd_tool {
    display: block;
    position: fixed;
    bottom: 40px;
    left: 50%;
    margin-left: 600px;
    width: 50px;
    height: 110px;
    z-index: 1000;
  }
  .to_top{
    margin: 10px auto;
    background-color: #b3b3b3;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }

  .panda_footer{
    padding: 28px 0 30px 0;
    color: #666;
    margin-top: 0;
    /* width: 1280px; */
    margin: 28px auto 0;
    text-align: center;
  }
  .to_top i{
    font-size: 20px;
    display: inline-block;
    text-align: center;
    width: 40px;
    line-height: 40px;
    color: #f5f5f5;
  }
  #navfloat li{
    float: left;
    margin-left: 50px;
  }

</style>
