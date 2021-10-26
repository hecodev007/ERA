<template>
  <div :class="['pcmain',this.screenWidth >= 600 ?'':'main']">
    <div class="caintner">
      <div class="headerMarket">
        <div class="nav">
          拍賣 >
          <span class="color">神秘紫晶勛章（ID:002101）</span>
        </div>
        <div class="goback" @click="goback">
          <img src="@/assets/img/goback.png" alt />
        </div>
      </div>
      <div class="info">
        <el-row>
          <el-col :xs="24" :sm="10" :md="10" :lg="10" :xl="10">
            <div class="marketImg">
              <span>100</span>
              <img src="../../assets/img/xunzhaung1.png" alt />
            </div>
          </el-col>
          <el-col :xs="24" :sm="14" :md="14" :lg="14" :xl="14">
            <div class="count">
              <div class="name">NFT name (ID:002101)</div>
              <div class="box">
                <div class="item">
                  <span>Auction countdown</span>
                  <p class="color">14 : 32 : 45</p>
                  <!-- <P>Deal done</P> -->
                </div>
                <div class="item">
                  <span>Transaction price（ERA)≈ $ 812</span>
                  <p>238,647,324</p>
                </div>
              </div>
              <div class="link">NFT has been claimed</div>
              <!-- <div class="bug" @click="submitBuy">Bid now (price increase 10%)</div>
              <div class="bug" >NFT Not collected</div>
              <div class="staus">Connect wallet</div>-->

              <div class="tips">Rebate from last bid 21,780,000 ERA</div>

              <div class="btn">
                <img src="../../assets/img/lsdata.png" alt />
              </div>

              <div class="dataInfo">
                <div class="infoBox">
                  <p class="money">
                    <span>Owner</span>
                    <span class="line">未定義的</span>
                  </p>
                  <p class="money">
                    <span>Contract address</span>
                    <span class="line">0x534…3cd45</span>
                  </p>
                  <p class="money">
                    <span>Token ID</span>
                    <span>11</span>
                  </p>
                </div>
                <div class="infoBox">
                  <p class="money">
                    <span>Asset Protocol</span>
                    <span>ERC721</span>
                  </p>
                  <p class="money">
                    <span>Asset public chain</span>
                    <span>BSC</span>
                  </p>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="info">
        <el-row>
          <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
            <div class="table">
              <div class="tbHeader">
                <span>Bid history</span>
                <span>
                  My total rebate:
                  <i>0 ERA</i>
                </span>
              </div>
              <div class="dataTB">
                <div class="tbHeaderTB">
                  <span class="wid1">Wallet address</span>
                  <span class="wid2">Hash</span>
                  <span class="wid3">Auction Price (AVS)</span>
                  <span class="wid4">Auction time</span>
                  <span class="wid5">Rebate (?)</span>
                  <span class="wid6">state</span>
                </div>
                <div class="tbody">
                  <div>
                    <span class="wid1">1112313213123123121</span>
                    <span class="wid2">13jh…783123sa</span>
                    <span class="colo2 wid3">10,000</span>
                    <span class="wid4">20121.10.02 16:23:43</span>
                    <span class="colo2 wid5">238,646,124</span>
                    <span class="wid6">拍賣中</span>
                  </div>
                  <div>
                    <span class="wid1">1111</span>
                    <span class="wid2">13jh…78sa</span>
                    <span class="colo2 wid3">10,000</span>
                    <span class="wid4">20121.10.02 16:23:43</span>
                    <span class="colo2 wid5">238,646,124</span>
                    <span class="wid6">拍賣中</span>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="rule">
        <h6>拍賣規則</h6>
        <ul>
          <li>1.当倒计时不到1小时时，每次出价后倒计时将增加10分钟，最高倒计时可以增加到1小时；</li>
          <li>2.每次出价将提高10%的固定价格。倒计时结束后，拍卖品将由最后一个投标人获得；</li>
          <li>3.20%的价格上涨是由最后一个投标人获得的，80%是拍卖出版商的收入。</li>
          <li>4.该平台将收取20%的投标佣金作为服务费，其中40%将捐给NFT采矿池，其中50%将转换为$YOOSHI并烧毁，其中10%将发送给开发人员。</li>
          <li>5.拍卖成功后，该平台将收取出版商利润的3%作为服务费。其中，40%的人进入YooShi NFT农业池，50%将兑换成$YOOSHI并烧毁，10%将是开发商的收入。</li>
          <li>6.拍卖结束后，拍卖出版商可以获得拍卖NFT的利润，或者在拍卖失败的情况下获得NFT。注：投标人收到NFT后，拍卖出版商会自动收到收益。</li>
        </ul>
      </div>
    </div>
    <buymarket @getConfirmear="getConfirmear" @getCancel="showBuy = false" :showBuy.sync="showBuy"></buymarket>

    <marketPMList @getConfirmInfo="getConfirmInfo" @getCancel="show = false" :show.sync="show"></marketPMList>
  </div>
</template>
<script>
import marketPMList from "./marketPMList.vue";
import buymarket from "./buymarket.vue";
export default {
  components: {
    marketPMList,
    buymarket
  },
  data() {
    return {
      screenWidth: this.GLOBAL.clientWidth,
      bannerbjIMg: "@/assets/img/bannerbj600.png",
      activeNav: 1,
      show: false,
      showBuy: false
    };
  },
  mounted() {
    this.setDialogWidth();
    console.log(this.screenWidth);
  },
  methods: {
    setDialogWidth() {
      if (this.screenWidth < 600) {
        this.bannerbjIMg = require("@/assets/img/bannerbj.png");
      } else {
        this.bannerbjIMg = require("@/assets/img/bannerbj.png");
      }
    },
    getConfirmInfo(v) {
      console.log(v);
    },
    submitBuy() {
      this.showBuy = true;
    },
    goback() {
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped  lang="less">
img {
  width: 100px;
}
.pcmain {
  background: rgba(19, 29, 23, 1);
  font-size: 12px;
  padding: 110px 0 70px;
  .caintner {
    max-width: 1970px;
    width: 80%;
    margin: 0 auto;
    .headerMarket {
      display: flex;
      justify-content: space-between;
      align-items: center;
      position: relative;
      .staus {
        width: 100%;
        max-width: 600px;
        position: absolute;
        top: -20px;
        left: 50%;
        transform: translate(-50%, 0);
        background: url(../../assets/img/maketStatusbj.png) no-repeat center;
        background-size: 50%;
        line-height: 43px;
        height: 43px;
        color: #fff;
        text-align: center;
      }
      .nav {
        margin-top: 10px;
        .color {
          color: rgba(112, 244, 165, 1);
        }
      }
      .goback {
        img {
          width: 100%;
          max-width: 40px;
        }
      }
    }
    .info {
      padding: 30px 0;
      width: 78%;
      margin: 0 auto;
      .marketImg {
        background: #26352c;
        border-radius: 16px;
        height: 385px;
        position: relative;
        padding: 0 10px;
        margin-bottom: 40px;
        margin-right: 20px;
        span {
          background: rgba(102, 230, 129, 0.33);
          font-size: 20px;
          padding: 5px 10px;
          font-weight: 900;
          border-radius: 30px;
          position: absolute;
          top: 20px;
          left: 20px;
        }
        img {
          display: block;
          position: absolute;
          width: 60%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .count {
        padding: 0 20px;
        margin-bottom: 40px;
        .name {
          font-size: 22px;
        }
        .box {
          display: flex;
          justify-content: space-between;
          margin: 24px 0;
          .item {
            .color {
              color: rgba(112, 244, 165, 1);
            }
            p {
              font-size: 22px;
            }
          }
        }
        .bug {
          background: url(../../assets/img/marketbtnBj.png) no-repeat center;
          background-size: contain;
          line-height: 43px;
          height: 43px;
          color: #333;
          text-align: center;
        }
        .staus {
          background: url(../../assets/img/markeyStatus.png) no-repeat center;
          background-size: contain;
          line-height: 43px;
          height: 43px;
          color: #fff;
          text-align: center;
        }
        .link {
          background: url(../../assets/img/maketStatusbj.png) no-repeat center;
          background-size: contain;
          line-height: 43px;
          height: 43px;
          color: #fff;
          text-align: center;
        }
        .tips {
          margin: 10px;
          text-align: center;
        }
        .btn {
          width: 20%;
          max-width: 88px;
          margin: 20px 0;
        }
        .dataInfo {
          display: flex;
          justify-content: space-between;
          .infoBox {
            background: #26352c;
            border-radius: 5px;
            width: 42%;
            padding: 2%;
            p {
              line-height: 26px;
              display: flex;
              justify-content: space-between;
              .line {
                text-decoration: underline;
              }
            }
          }
        }
      }

      .table {
        margin-bottom: 40px;
        background: #26352c;
        border-radius: 16px;
        height: 385px;
        padding: 0 10px;
        .tbHeader {
          display: flex;
          justify-content: space-between;
          align-items: center;
          line-height: 50px;

          span {
            i {
              font-style: normal;
              color: rgba(112, 244, 165, 1);
            }
          }
        }
        .dataTB {
          .tbHeaderTB {
            display: flex;
            justify-content: space-between;
            align-items: center;
            line-height: 50px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.4);
            border-top: 1px solid rgba(0, 0, 0, 0.4);
            span {
            }
          }
          .tbody {
            div {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 10px 0;
              span {
                display: block;
                word-break: break-all;
                white-space: normal;
              }
            }
          }
          .wid3 {
            width: 140px;
          }
        }
      }
    }
    .rule {
      background: #26352c;
      border-radius: 16px;
      padding: 10px 0 30px;
      width: 78%;
      margin: 0 auto;
      h6 {
        margin: 20px 0;
        padding: 0 30px;
      }
      ul {
        padding: 0 30px;
      }
      li {
        line-height: 24px;
      }
    }
  }
}
.main {
  .caintner .info{
    width: 100%;
  }
  .caintner {
    width: 90%;
    .info .count {
      padding: 0;
    }
    .headerMarket .staus {
      width: 80%;
      top: -42px;
    }
    .rule{
      width: 100%;
    }
  }
}
.wid1 {
  width: 100px;
}
.wid2 {
  width: 71px;
}
.wid3 {
  width: 147px;
}
.wid4 {
  width: 82px;
}
.wid5 {
  width: 77px;
}
.wid6 {
  width: 42px;
}
</style>