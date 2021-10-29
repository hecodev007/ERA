<template>
  <div :class="['pcmain',this.screenWidth >= 600 ?'':'main']">
    <div class="caintner">
      <div class="headerMarket">
        <div class="nav">
          <img v-if="activeNav==1" src="@/assets/img/paimai.png" alt />
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
              <div class="boxs">
                
                <div class="item">
                  <span>銷售價格（ERA)≈ 816美元</span>
                  <p class="tittleFont">238,647,324</p>
                </div>
              </div>
        
              <div class="staus">Connect wallet</div>
              <!-- <div class="bug" >NFT Not collected</div> -->
             

              
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
  </div>
</template>
<script>
import buymarket from "./buymarket.vue";
export default {
  components: {
    buymarket
  },
  data() {
    return {
      screenWidth: this.GLOBAL.clientWidth, 
      activeNav: 1,
      showBuy: false
    };
  },
  mounted() {
    this.setDialogWidth();
    console.log(this.screenWidth);
  },
  methods: {
    setDialogWidth() {
    },
    //era
    getConfirmear(v) {
      console.log(v);
    },
    getConfirmbnb(v) {
      console.log(v);
    },
    //余额不足
    getConfirmlittle(v) {
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

      .nav {
        margin-top: 10px;
        img {
          max-width: 82px;
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
      width: 78%;
      margin: 0 auto;
      padding: 30px 0;

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
        padding-left: 20px;
        margin-bottom: 40px;
        .name {
          font-size: 22px;
        }
        .boxs { 
          margin: 24px 0;
          .item {
            .color {
              color: rgba(112, 244, 165, 1);
            }
            p {
              font-size: 22px;
              text-align: left;
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
          margin-top: 40px;
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
  .caintner {
    width: 90%;
    .info {
      width: 100%;
      .count {
        padding-left: 0;
      }
    }
    .rule {
      width: 100%;
    }
  }
}
</style>