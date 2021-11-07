<template>
  <div :class="['pcmain',this.screenWidth >= 600 ?'':'main']">
    <img :src="bannerbjIMg" alt class="banner" />
    <div class="caintner">
      <div class="map">
        <!-- <el-row :gutter="20" class="Box">
          <el-col :xs="24" :md="12" :lg="12" :xl="12">
            <img src="@/assets/img/mapINfo.png" alt class="mapImg" />
          </el-col>
          <el-col :xs="24" :md="12" :lg="12" :xl="12">
             <div class="info">
              <div class="title">关于 ERA</div>
              <p>恭喜～你進入了一個鮮為人知的世界，OPEN ERA是一個虛擬靈境，這裏有大量未開墾的森林、土地、和礦物資源，並且孕育了這片大陸的原住民——種類多樣數量繁多的精靈幻獸。由於元宇宙的力量漸漸覺醒，使OPEN ERA世界中的元素魔法十分不穩定，它需要您的幫助，成為勇者，去塑造這股神秘的力量，您可以在這裏購買土地，訓練自己的精靈夥伴，去探索這個世界，您的每一個決定，每一場冒險旅程都將決定OPEN ERA世界命的運走向～</p>
              <div class="imgBox" v-if="this.screenWidth >= 600">
                <img src="@/assets/img/ji1.png" alt />
                <img src="@/assets/img/fei1.png" alt />
              </div>
            </div>  
           
          </el-col>
        </el-row>-->
        <div class="info">
          <img :src="home1" alt />
        </div>
      </div>
      <div class="xunzhang">
        <!-- <div class="titleH">盲盒</div> -->

        <div :class="this.screenWidth < 600?'':'swipers'">
          <el-row>
            <el-col :xs="24" :md="10" :lg="10" :xl="10">
              <div class="left">
                <swiper :options="swiperOption">
                  <swiper-slide
                    class="swiper-slide"
                    v-for="(item,index) in list"
                    :key="index"
                  >
                    <div class="itemMain">
                      <img :src="item.bjimh" class="itemMainbj" alt />
                      <img :src="item.icon" class="xz" alt />
                  <p> {{item.name}}</p>
                    </div>
                  </swiper-slide>
                  <img
                    src="@/assets/img/swiperLeft.png"
                    slot="button-prev"
                    class="swiper-button-prev swiperLeft"
                  />
                  <img
                    src="@/assets/img/swiperRight.png"
                    slot="button-next"
                    class="swiper-button-next swiperRight"
                  />
                </swiper>
              </div>
            </el-col>
            <el-col :xs="24" :md="12" :lg="12" :xl="12">
              <!-- <div class="right">
              <div class="info">
                <h6>勛章簡介</h6>
                <p>利用分佈在萊比斯廣袤大陸上的岩石作為材料，由地精工匠打造而成，它通常作為冒險者們首次任務成功的標誌，由萊比斯-ERA酒館公會頒發，價</p>
              </div>
              <div class="count">
                <h6>勛章屬性</h6>
                <el-row>
                  <el-col :xs="24" :md="24" :lg="24" :xl="24">
                    
                    <div :class="['bj',this.screenWidth >= 600 ?'':'bj600']">
                      <img :src="bjIMg" alt class="bj600s" />
                      <div class="item">
                        <img src="@/assets/img/shux1.png" alt />
                        <span>2131</span>
                        <p>總流通量</p>
                      </div>
                      <div class="item">
                        <img src="@/assets/img/shux2.png" alt />
                        <span>普通</span>
                        <p>製造等級</p>
                      </div>
                      <div class="item">
                        <img src="@/assets/img/shux3.png" alt />
                        <span>LV.1</span>
                        <p>稀有等級</p>
                      </div>
                      <div class="item">
                        <img src="@/assets/img/shux4.png" alt />
                        <span>土</span>
                        <p>元素</p>
                      </div>
                    </div>
                  </el-col>
                </el-row>
              </div>
              </div>-->
            </el-col>
          </el-row>
        </div>
        <img :src="home2" alt class="home2" />
        <!-- <p>
          <img :src="btn" alt :class="this.screenWidth < 600?'btns':'btnns'" />
        </p>-->
      </div>
      <div class="btnhome" @click="goNFT">
        <img :src="btn" alt :class="this.screenWidth < 600?'btns':'btnns'" />
      </div>
      <div class="hister">
        <img :src="home3" alt class="hister" />
        <img :src="home3600" alt class="hister" v-if="this.screenWidth < 600" />
      </div>
      <div class="bili">
        <img :src="home4" alt class="bili" />
      </div>
    </div>
    <div class="foot">
      <el-row :class="[this.screenWidth >= 600 ?'flex':'']">
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <div class="footLogo">
            <img src="../../assets/img/logo.png" alt="logo" />
          </div>
        </el-col>
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <div class="footList">
            <span>關於</span>
            <span>NFT</span>
            <span>路線圖</span>
            <span>常見問題</span>
            <span>團隊</span>
          </div>
        </el-col>
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <div class="footImg">
            <img :src="item.img" alt v-for="(item,key) in navImg" :key="key" />
          </div>
        </el-col>
      </el-row>
      <div></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      screenWidth: this.GLOBAL.clientWidth,
      bannerbjIMg: "@/assets/img/bannerbj600.png",
      bjIMg: require("@/assets/img/shuxbj1.png"),
      home1: "@/assets/img/home1.png",
      home2: "@/assets/img/home2.png",
      home3: "@/assets/img/home3.png",
      home3600: "@/assets/img/home3bottom.png",
      home4: "@/assets/img/home4.png",
      btn: "@/assets/img/btnn.png",
      list:this.GLOBAL.list,
      navImg: [
        {
          img: require(`@/assets/img/navRight1.png`),
          link: ""
        },
        {
          img: require(`@/assets/img/navRight2.png`),
          link: ""
        },
        {
          img: require(`@/assets/img/navRight3.png`),
          link: ""
        },
        {
          img: require(`@/assets/img/navRight4.png`),
          link: ""
        }
      ],
      carouselArr: ["1", "1"],
      swiperOption: {
        //显示分页
        pagination: {
          el: ".swiper-pagination"
        },
        //设置点击箭头
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        },
        //自动轮播
        // autoplay: {
        //   delay: 2000,
        //   //当用户滑动图片后继续自动轮播
        //   disableOnInteraction: false
        // },
        //开启循环模式
        loop: true
      }
    };
  },
  mounted() {
    this.setDialogWidth();
    console.log(this.screenWidth);
  },
  methods: {
    setDialogWidth() {
      if (this.screenWidth < 600) {
        this.bannerbjIMg = require("@/assets/img/bannerbj600.png");
        this.home1 = require("@/assets/img/home6001.png");
        this.home2 = require("@/assets/img/home6002.png");
        this.home3 = require("@/assets/img/home6003top.png");
        this.home4 = require("@/assets/img/home6004.png");
        this.btn = require("@/assets/img/btnn600.png");
      } else {
        this.bannerbjIMg = require("@/assets/img/bannerbjs.png");
        this.home1 = require("@/assets/img/home1.png");
        this.home2 = require("@/assets/img/home2.png");
        this.home3 = require("@/assets/img/home3.png");
        this.home4 = require("@/assets/img/home4.png");
        this.btn = require("@/assets/img/btnn.png");
      }
    },
    goNFT(){
      this.$router.push({
          path: "/blindbox",
        });
    }
  }
};
</script>
<style scoped  lang="less" >
.pcmain {
  background: rgba(19, 29, 23, 1);
  font-size: 12px;
  .caintner {
    max-width: 1970px;
    width: 80%;
    margin: 0 auto;
  }
  .banner {
    padding: 0;
    margin: 0;
    width: 100%;
  }
  .map {
    // margin-top: 50px;
    .mapImg {
      width: 100%;
    }
    .info {
      .title {
        font-size: 16px;
        font-weight: 800;
        color: #70f4a5;
      }
      img {
        width: 100%;
      }
    }
    .imgBox {
      display: flex;
      justify-content: center;

      img {
        display: inline-block;
        padding: 0 30px;
        width: 30%;
      }
    }
  }
  .titleH {
    font-size: 16px;
    font-weight: 800;
    color: #70f4a5;
    text-align: center;
    margin: 50px 0;
  }

  .xunzhang {
    position: relative;
    .home2 {
      width: 100%;
    }
    .swipers {
      position: absolute;

      width: 100%;
      top: 50%;
      right: 0;
      transform: translate(0, -50%);
    }
    .left {
      text-align: center;
      padding: 20px;
      position: relative;

      .itemMain {
        position: relative;
        width: 70%;
        height: 300px;
        margin: 0 auto;
        p {
          position: absolute;
          bottom: 10%;
          font-size: 18px;
          width: 100%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: #70f4a5;
        }
        .itemMainbj {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .xz {
          width: 60%;
          position: absolute;
          top: 40%;
          left: 50%;
          transform: translate(-50%, -50%);

          max-width: 227px;
        }
      }
      .swiperLeft {
        width: 40px;
      }
      .swiperRight {
        width: 40px;
      }
    }
    p {
      .btnns {
        width: 40%;
        margin: 0 auto;
        position: absolute;
        bottom: -10%;
        left: 50%;
        transform: translate(-50%, 0);
      }
    }

    // .right {
    //   margin-left: 30px;
    //   .info {
    //     margin-bottom: 10px;
    //     p {
    //       font-weight: 800;
    //       color: #ffffff;
    //       line-height: 24px;
    //     }
    //   }
    //   h6 {
    //     margin: 0;
    //     margin-bottom: 10px;
    //     color: #70f4a5;
    //     font-size: 16px;
    //   }

    //   .count {
    //     .bj {
    //       display: flex;
    //       justify-content: space-between;
    //       position: relative;
    //       padding: 35px 44px;
    //       .bj600s {
    //         width: 100%;
    //         height: 130px;
    //         position: absolute;
    //         top: 0;
    //         left: 0;
    //         z-index: 0;
    //       }
    //       .item {
    //         z-index: 9;
    //         img {
    //           width: 20px;

    //           vertical-align: middle;
    //         }
    //       }
    //       span {
    //         color: #70f4a5;
    //       }
    //       p {
    //         margin: 10px 0;
    //         text-align: center;
    //       }
    //     }
    //     .bj600 {
    //       padding: 15px 20px;
    //       p {
    //         margin: 2px 0;
    //         text-align: center;
    //       }
    //     }
    //   }
    // }
  }
  .btnhome {
    img {
      width: 40%;
      margin: 10px auto;
      display: block;
    }
  }
  .hister {
    img {
      width: 100%;
    }
  }
  .bili {
    img {
      width: 100%;
    }
  }
}
.foot {
  background: #1b2c22;
  padding: 20px;
  .flex {
    display: flex;
    align-items: center;
  }
  .footLogo {
    img {
      width: 30%;
    }
  }
  .footList {
    text-align: center;
    span {
      padding: 10px;
    }
  }
  .footImg {
    text-align: right;
    img {
      margin-right: 10px;
      width: 30px;
    }
  }
}
.main {
  img{
    display: block;
  }
  .caintner {
    width: 100%;
  }
  .pcmain .xunzhang .swipers {
    position: relative;
  }

  .btnxzs {
    width: 100%;
  }
  .btnhome {
    img {
      width: 90%;
      margin: 10px auto;
      display: block;
    }
  }
  .foot {
    background: #1b2c22;
    padding: 20px;

    .footLogo {
      margin-bottom: 10px;
      img {
        margin: 0 auto;
        display: block;
      }
    }
    .footList {
      text-align: center;
      margin-bottom: 20px;
    }
    .footImg {
      text-align: center;
      img {
        margin-right: 10px;
        width: 30px;
      }
    }
  }
}
</style>