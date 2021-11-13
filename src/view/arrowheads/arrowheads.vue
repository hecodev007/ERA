<template>
  <div :class="['pcmain', this.screenWidth >= 600 ? '' : 'main']">
    <div class="caintners">
      <!-- <div class="topimg" v-if="this.screenWidth >= 600" >
        <img src="@/assets/img/bannerarrbig.png" alt class="banner"   />
        <img src="@/assets/img/logo.png" alt class="logo" />
      </div>-->

      <el-row>
        <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
          <div class="left">
            <!-- :class="['pool', this.screenWidth >= 600?'':'toppoll']" -->
            <div class="pool">
              <div class="title">Angel valley Mining Pool</div>
              <div class="count tittleFont">23,456,231</div>
              <p class="yu">Remaining prize pool(DXCT) ≈ $6,170,505</p>
         
            </div>

            <div class="rule">
              <div class="poolLeft">
                <div>
                  <span class="tittleFont">13,253,571</span>
                  <p>Total Mining Power</p>
                </div>
                <div>
                  <span class="tittleFont">13,253,571</span>
                  <p>Total Staked Amount</p>
                </div>
                <div>
                  <span class="tittleFont">13,253,571</span>
                  <p>Total Staked Tokens(DXCT) ≈ $9,201,761</p>
                </div>
                <div>
                  <span class="tittleFont">13,253,571</span>
                  <p>(DXCT)≈$0</p>
                </div>
              </div>
              <div class="poolRight">
                <div>
                  <span class="tittleFont">13,253,571</span>
                  <p>My Mining Power</p>
                </div>
                <div>
                  <span class="tittleFont">13,253,571</span>
                  <p>My Staked Amount</p>
                </div>
                <div>
                  <span class="tittleFont">13,253,571</span>
                  <p>My Staked Tokens(DXCT)≈ $0</p>
                </div>
                <div class>
                  <img src="@/assets/img/harvest.png" alt />
                </div>
              </div>
            </div>
          </div>
        </el-col>

        <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
          <div class="right">
            <el-row>
              <el-col
                :xs="12"
                :sm="6"
                :md="6"
                :lg="6"
                :xl="6"
                :key="key"
                v-for="(item, key) in list"
              >
                <div class="contentbox">
                  <div :class="['boxtop']">
                    <div class="lefts">Position HashRate：{{ key + 1 }}</div>
                  </div>
                  <div class="imhgs">
                    <img :src="item.icon" alt class="yuansu" />
                  </div>

                  <!-- <span>unlocked</span> -->
                  <span>Confirming…</span>
                  <!-- <span class="color">Has unlocked +6000 power</span> -->
                  <div class="info">
                    <img src="@/assets/img/arrowbtn1ing.png" alt />
                    <img src="@/assets/img/arrowbtn2.png" alt @click="qxslz" />
                  </div>
                </div>
              </el-col>
              <el-col
                :xs="12"
                :sm="6"
                :md="6"
                :lg="6"
                :xl="6"
                :key="key"
                v-for="(item, key) in list"
              >
                <div class="contentbox">
                  <div :class="['boxtop']">
                    <div class="lefts">Position HashRate：{{ key + 1 }}</div>
                  </div>
                  <!-- 两个状态图 -->
                  <div class="imhgs">
                    <img :src="item.iconsamll" alt class="yuansu" />
                    <!-- <img :src="item.icon" alt class="yuansu" /> -->
                  </div>

                  <!-- 三个状态 -->
                  <!-- <span>unlocked</span> -->
                  <!-- <span>Confirming…</span> -->
                  <span class="color">Has unlocked +6000 power</span>

                  <div class="info">
                    <!-- 对应三种状态的按钮状态 -->
                    <img src="@/assets/img/arrowbtn1no.png" alt />
                    <img src="@/assets/img/arrowbtn2.png" alt @click="qxslz" />

                    <!-- <img src="@/assets/img/arrowbtn1ing.png" alt   /> 
                    <img src="@/assets/img/arrowbtn2.png" alt @click="qxslz" />

                     <img src="@/assets/img/arrowbtn1.png" alt  @click="openshowNFT(1)" />
                    <img src="@/assets/img/arrowbtn2.png" alt @click="qxslz" /> -->
                  </div>
                </div>
              </el-col>
              <el-col
                :xs="12"
                :sm="6"
                :md="6"
                :lg="6"
                :xl="6"
                :key="key"
                v-for="(item, key) in list"
              >
                <div class="contentbox">
                  <div :class="['boxtop']">
                    <div class="lefts">Position HashRate：{{ key + 1 }}</div>
                  </div>

                  <div class="imhgs">
                    <img :src="item.icon" alt class="yuansu" />
                  </div>
                  <span>unlocked</span>
                  <!-- <span>Confirming…</span> -->
                  <!-- <span class="color">Has unlocked +6000 power</span> -->
                  <div class="info">
                    <img
                      src="@/assets/img/arrowbtn1.png"
                      alt
                      @click="openshowNFT(1)"
                    />
                    <img src="@/assets/img/arrowbtn2.png" alt @click="qxslz" />
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
      </el-row>
    </div>
    <arrowItem
      @getConfirmInfo="getConfirmInfo"
      @getCancel="showarrowItem = false"
      :showarrowItem.sync="showarrowItem"
    ></arrowItem>
    <!-- <arrowUpItem
      @getConfirmUp="getConfirmUp"
      @getCancel="showarrowUp = false"
      :showarrowUp.sync="showarrowUp"
    ></arrowUpItem>-->
    <NFTmedule
      @getConfirmNFT="getConfirmNFT"
      @getCancelNFT="showNFTs = false"
      :showNFT.sync="showNFTs"
      :routeQury="2"
    ></NFTmedule>
  </div>
</template>
<script>
import arrowItem from "./arrowItem.vue";

import NFTmedule from "../../components/NFTmedule.vue";
// import arrowUpItem from "./arrowUpItem.vue";
export default {
  components: {
    arrowItem,
    NFTmedule,
    // arrowUpItem
  },
  data() {
    return {
      screenWidth: this.GLOBAL.clientWidth,
      showarrowItem: false, //arrowItem
      showarrowUp: false,
      arrowbtn1: 1,
      arrowbtn2: true,
      qxslshow: true, //取消算力的显示
      list: [
        {
          bjimh: require("@/assets/img/xzBj1.png"),
          icon: require("@/assets/img/xunzhaung1.png"),
          iconsamll: require("@/assets/img/arrowIcon1.png"),
          name: "Power Badge",
          info: "Buried in the depths of the ancient volcanic mountains in the Alps, with the appearance of angels, some stones began to show strange elemental reactions. When the elves passed by these rocks with turquoise light, the inside of the stones would burst into explosions. Sound. Function: It can incubate a powerful offensive angel.",
          level: 1,
          countinfo: 1900,
        },
      ],
      // list:this.GLOBAL.list,//全局的list数据
      showNFTs: false,
    };
  },
  mounted() {
    this.setDialogWidth();
    console.log(this.screenWidth);
  },
  methods: {
    setDialogWidth() {},
    getConfirmInfo() {},
    getConfirmUp() {},
    //取消算力值
    qxslz() {
      this.showarrowItem = true;
    },
    //up
    upslz() {
      this.showarrowUp = true;
    },
    openshowNFT(v) {
      console.log(v);
      this.showNFTs = true;
    },
    getConfirmNFT() {},
  },
};
</script>
<style scoped  lang="less">
.pcmain {
  background: rgba(19, 29, 23, 1);
  font-size: 12px;

  .banner {
    max-width: 1970px;
    width: 100%;
    height: 144px;
    margin: 0 auto;
    display: block;
    margin-bottom: 30px;
  }
  .caintners {
    // padding: 140px 0;
    max-width: 1970px;

    margin: 0 auto 0;
    .topimg {
      position: relative;
      .logo {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }

    .left {
      //   width: 28%;
      .pool {
        text-align: center;
        padding: 10px 0;
        .title {
          font-size: 24px;
        }

        .count {
          font-size: 40px;
        }
      }
      .rule {
        display: flex;
        justify-content: left;
        background: #26352c;
        border-radius: 16px;
        padding: 12px;
        p {
          margin: 0;
        }
        .poolLeft {
          display: flex;
          flex-direction: column; //修改主轴方向
          flex-wrap: wrap; //开启自动换行
          width: 50%;
          span {
            font-size: 24px;
            font-weight: 800;
          }
          div {
            margin-bottom: 10px;
          }
        }

        .poolRight {
          width: 50%;
          display: flex;
          flex-direction: column; //修改主轴方向
          flex-wrap: wrap; //开启自动换行
          span {
            font-size: 24px;
            font-weight: 800;
            color: #70f4a5;
          }
          div {
            margin-bottom: 15px;
          }
          img {
            width: 60%;
          }
        }
      }
    }
    .right {
      //   width: 70%;
      .contentbox {
        background: #26352c;
        border-radius: 16px;
        display: flex;
        flex-direction: column; //修改主轴方向
        flex-wrap: wrap; //开启自动换行
        padding: 10px 0;
        margin: 0 0 20px 20px;
        font-size: 12px;
        .imhgs {
          width: 100%;
          height: 100px;
          position: relative;
        }
        .yuansu {
          width: 65%;
          display: block;
          /* margin: 5px auto; */
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }
        .info {
          display: flex;
          justify-content: center;
          align-items: center;
          img {
            width: 40%;
            margin: 10px 0;
          }
        }

        .boxtop {
          display: flex;
          justify-content: center;
          padding: 0 10px;
          margin-bottom: 5px;
          .lefts {
            height: 30px;
            padding: 0 10px;
            line-height: 30px;
            text-align: center;
            background: rgba(0, 0, 0, 0.4);
            border-radius: 21px;
          }
          .rights {
            height: 30px;
            padding: 0 10px;
            line-height: 30px;
            text-align: center;
            background: rgba(237, 41, 73, 1);
            border-radius: 21px;
          }
        }

        .boxtops2 {
          display: flex;
          justify-content: space-between;
        }

        span {
          margin: 0 auto;
          text-align: center;
        }
        .color {
          color: rgba(112, 244, 165, 1);
          font-size: 12px;
        }
      }
    }
  }
}
.tittleFont {
  font-family: "ProximaNova-Xbold.woff" !important;
}
.main {
  // padding: 140px 0;
  .caintners {
    width: 95%;

    // padding: 50px 0;
    .left .rule .poolRight span,
    .left .rule .poolLeft span {
      font-size: 18px;
    }
    .left .toppoll {
      position: fixed;
      width: 100%;
      top: 76px;
      z-index: 99;

      background: url("../../assets/img/bannerarrbj.png") no-repeat center;
      background-size: cover;
      .title {
        font-size: 12px;
      }
      .count {
        font-size: 20px;
      }
      .yu {
        font-size: 12px;
        padding: 0;
        margin: 0;
      }
    }
    .logos {
      width: 90px;
      position: absolute;
      left: 10px;
      top: 50%;
      transform: translate(0, -50%);
    }
    .right {
      margin-top: 30px;
      .contentbox {
        margin: 5px;
      }
    }
  }
}
</style>