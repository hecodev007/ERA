<template>
  <div :class="['pcmain', this.screenWidth >= 600 ? '' : 'main']">
    <div class="intraduse" v-if="this.screenWidth < 600">
      It takes 0.3BNB to cast a blind box, including 6 randomly generated
      treasures of different levels. Good luck~
    </div>

    <div class="cainter">
      <div class="caiterTop">
        <div class="topLe" v-if="this.screenWidth >= 600">
          <div class="instructions">
            <img src="../../assets/img/logo.png" alt />
            <span
              >It takes 0.3BNB to cast a blind box, including 6 randomly
              generated treasures of different levels. Good luck~</span
            >
          </div>
          <div class="meth">
            <div
              class="button"
              :style="`background: url(${btnbjsss}) no-repeat center;background-size: cover;`"
            >
              <span>Connect wallet</span>
              <!-- 两个状态按钮 -->
              <!-- <span><img src="../../assets/img/chuizi.png" alt="" /> Mint</span> -->
            </div>
            <div class="count">
              <img src="../../assets/img/iconInfo.png" alt />
              <p>NTF 666/10000</p>
            </div>
          </div>
        </div>

        <div class="topRi" v-for="(item, index) in list" :key="index">
          <div class="v1" v-if="keycount == index">
            <img :src="item.icon" alt />
          </div>
          <div class="mask" v-if="keycount == index">?</div>
        </div>
      </div>
      <div class="button600" v-if="this.screenWidth < 600">
        <img src="../../assets/img/btnn.png" alt />
      </div>
      <div class="count" v-if="this.screenWidth < 600">
        <img src="../../assets/img/mangheicon.png" alt />
        <p>NTF計數666/10000</p>
      </div>
      <div class="caiterMain">
        <el-row>
          <el-col
            :xs="12"
            :sm="8"
            :md="8"
            :lg="8"
            :xl="8"
            :key="key"
            v-for="(item, key) in myNFTs"
          >
            <div
              v-if="key <= 6"
              class="contentbox"
              :style="`background-image: url(${item.bjimh});background-size: contain;`"
              @click="minting(item)"
            >
              <!-- 未获得nft时，展示图为“暗”  div为蒙层 -->
              <div class="maskContentbox"></div>
              <div class="info">
                <span v-if="item.power">{{ item.power }}X</span>
                <div v-if="item.count">Hold：X{{ item.count }}</div>
              </div>
              <img :src="item.icon" alt />
              <!-- <p>Token:{{key}}</p> -->
              <p>{{ item.name }}</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <checkbox
      @getCancelclose="showcheck = false"
      :showcheck="showcheck"
      v-if="showcheck"
    ></checkbox>
    <infoBindBox
      @getCancel="show = false"
      :show.sync="show"
      :itemData="itemData"
    ></infoBindBox>
    <!-- <linkPackage
      @getConfirm="getConfirmCheck"
      @getCancel="showpage = false"
      :show.sync="showpage"
    ></linkPackage> -->
  </div>
</template>
<script>
import infoBindBox from "./infoBindBox.vue";
import { mint, myAllNFT } from "@/assets/js/web3.js";
import checkbox from "./checkbox.vue";
import { initContract } from "@/assets/js/web3.js";
import { _WalletContract } from "@/assets/js/walletconnect.js";
import { _MeatMaskContract } from "@/assets/js/metamask.js";
export default {
  components: {
    infoBindBox,
    checkbox,
  },
  data() {
    return {
      screenWidth: this.GLOBAL.clientWidth,
      show: false,
      showcheck: false,
      showpage: false,
      power: [1000, 2500, 6500, 14500, 35000, 90000],
      myNFTs: [],
      list: this.GLOBAL.list,
      itemData: {},
      btnbjsss: require("@/assets/img/btnbjsss.png"),
      keycount: 1, //轮播图
      list2: {
        1: {
          count: 0,
          author: "0xa38433265062F1F73c0A90F2FEa408f2Efd1a569",
          level: "1",
          name: "1",
          power: "1000",
          res: "1",
        },
        2: {
          count: 0,
          author: "0xa38433265062F1F73c0A90F2FEa408f2Efd1a569",
          level: "2",
          name: "2",
          power: "2500",
          res: "res",
        },
        3: {
          count: 0,
          author: "0xa38433265062F1F73c0A90F2FEa408f2Efd1a569",
          level: "4",
          name: "4",
          power: "90000",
          res: "res",
        },
        4: {
          count: 0,
          author: "0xa38433265062F1F73c0A90F2FEa408f2Efd1a569",
          level: "3",
          name: "3",
          power: "6500",
          res: "res",
        },
        5: {
          count: 0,
          author: "0xa38433265062F1F73c0A90F2FEa408f2Efd1a569",
          level: "4",
          name: "4",
          power: "35000",
          res: "res",
        },
        6: {
          count: 0,
          author: "0xa38433265062F1F73c0A90F2FEa408f2Efd1a569",
          level: "5",
          name: "5",
          power: "14500",
          res: "res",
        },
        7: {
          count: 0,
          author: "0xa38433265062F1F73c0A90F2FEa408f2Efd1a569",
          level: "4",
          name: "4",
          power: "35000",
          res: "res",
        },
      },
    };
  },
  mounted() {
    this.myNFTs = this.list;
    //  this.myNFTs = this.deepMerge(this.list2,this.list);
    console.log(window.web3.accounts);
    // if (!window.web3.accounts) {
    //   return;
    // }
    myAllNFT()
      .then((nfts) => {
        console.log("mynfts", nfts);
        this.myNFTs = this.deepMerge(nfts, this.list);
      })
      .catch((err) => {
        
        this.$notify({
          title: "error",
          message: err,
          type: "error",
        });
      });

    setInterval(() => {
      this.keycount++;
      if (this.keycount > 6) {
        this.keycount = 1;
      }
    }, 800);
  },
  methods: {
    deepMerge(obj1, obj2) {
      let key;
      for (key in obj2) {
        // 如果target(也就是obj1[key])存在，且是对象的话再去调用deepMerge，否则就是obj1[key]里面没这个对象，需要与obj2[key]合并
        obj1[key] =
          obj1[key] && obj1[key].toString() === "[object Object]"
            ? this.deepMerge(obj1[key], obj2[key])
            : (obj1[key] = obj2[key]);
      }
      return obj1;
    },
    newContract() {
      initContract()
        .then(() => {
          this.$notify({
            title: "success",
            message: "connect success",
            type: "success",
          });
          this.show = !this.show;
          this.mypackage = true;
        })
        .catch((err) => {
          // this.$toast("connect faild" + err, "error");
          this.$notify({
            title: "error",
            message: "connect faild",
            type: "error",
          });
          this.show = !this.show;
        });
    },
    getConfirmCheck(v) {
      console.log("choise wallet", v);
      switch (v) {
        case 0:
          _MeatMaskContract()
            .then(() => {
              this.newContract();
              // this.$toast("连接成功", "success");
              // this.mypackage = true
              // this.show = !this.show;
              this.address = window.web3.accounts[0];
            })
            .catch((err) => {
              // this.$toast("连接metamask出错" + err, "error");
              this.$notify({
                title: "error",
                message: "connect faild",
                type: "error",
              });
              this.show = !this.show;
            });
          break;
        case 1:
          _WalletContract(
            (accountsChanged) => {
              console.log("accountsChanged", accountsChanged);
              // this.$toast("accountsChanged", "success");

              this.$notify({
                title: "success",
                message: "accountsChanged",
                type: "success",
              });
              this.mypackage = true;
            },
            (disconnect) => {
              // this.$toast("disconnect，code" + disconnect, "error");
              this.$notify({
                title: "error",
                message: "disconnect，code" + disconnect,
                type: "error",
              });
            },
            (accounts) => {
              console.log("accounts", accounts);
              this.newContract();
            },
            (error) => {
              this.show = !this.show;
              // this.$toast(error, "error");
              this.$notify({
                title: "error",
                message: error,
                type: "error",
              });
            }
          );
          break;

        default:
          break;
      }
    },
    goMint() {
      // mint(nftName,level,power,res,author)nftName 可以传空 level 等级 1-5 power[1000,2500,6500,14500,35000,90000] res 随便 author 随便
      mint(
        "nftName",
        Math.floor((Math.random() * 10) % 5) + 1,
        this.power[Math.floor((Math.random() * 10) % 6) + 1],
        "res"
      )
        .then((hash) => {
          // this.$toast("send success，Hash" + hash, "success");

          this.$notify({
            title: "success",
            message: "send success，Hash",
            type: "success",
          });
        })
        .catch((err) => {
          // this.$toast("mint failed" + err, "error");
          this.$notify({
            title: "error",
            message: "mint failed",
            type: "error",
          });
        });
    },
    minting(v) {
      this.show = true;
      this.itemData = v;
    },
    //链接钱包
    getConfirmCheck() {},
  },
};
</script>
<style scoped lang="less">
.pcmain {
  background: rgba(19, 29, 23, 1);
  padding: 140px 0;
  min-height: 200px;
  color: #fff;
  margin: 0 auto;
  .cainter {
    width: 70%;
    margin: 0 auto;
    .caiterTop {
      margin: 5% 0;
      display: flex;
      min-height: 300px;
      justify-content: space-between;
      align-items: center;
      position: relative;
      .topLe {
        width: 65%;
        .instructions {
          background: #26352c;
          border-radius: 16px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 120px;
          padding: 0 5%;
          margin-bottom: 20px;
          img {
            max-width: 170px;
          }
          span {
            margin-left: 20px;
          }
        }
        .meth {
          display: flex;
          align-items: center;
          justify-content: space-between;
          .button {
            width: 425px;
            height: 110px;
            line-height: 110px;
            font-size: 30px;
            text-align: center;
            color: rgba(19, 29, 23, 1);
            font-weight: 900;
            span {
              text-align: center;
            }
            img {
              width: 40px;
              vertical-align: middle;
              margin-right: 10px;
            }
          }
          .count {
            display: flex;
            width: 50%;
            align-items: center;
            margin-left: 20px;
            justify-content: center;

            img {
              width: 47px;
              height: 44px;
              margin-right: 20px;
            }
            p {
            }
          }
        }
      }
      .topRi {
        right: 0;
        width: 35%;
        height: 250px;
        position: absolute;
        .mask {
          position: absolute;
          width: 100%;
          height: 100%;
          line-height: 250px;
          left: 50%;
          top: 50%;
          text-align: center;
          transform: translate(-50%, -50%);
        }
        img {
          width: 100%;
          position: absolute;
          left: 50%;
          top: 50%;
          text-align: center;
          transform: translate(-50%, -50%);
        }
        div {
          width: 100%;
          background: rgba(19, 29, 23, 0.8);
          height: 100%;
          position: absolute;
          right: 0;
          font-size: 80px;
          top: 0;
          text-align: center;
          span {
            position: absolute;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 80px;
            top: 50%;
          }
        }
      }
    }
    .contentbox {
      text-align: center;
      width: 80%;
      margin: 0 auto;
      background-size: contain;
      background-position: center;
      background-repeat: no-repeat;
      padding: 10%;
      margin: 5% auto;

      position: relative;
      .maskContentbox {
        background-color: rgba(19, 29, 23, 0.7);
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
      }
      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 90%;
        margin: 0 auto;
        span {
          background: rgba(102, 230, 129, 0.33);
          padding: 0 10px;
          line-height: 30px;
          border-radius: 20px;
        }
        div {
          color: rgba(112, 244, 165, 1);
          font-weight: 800;
        }
      }
      img {
        width: 70%;
        // margin: 20px 0;
      }
      p {
        text-align: center;
        padding: 0;
        margin: 0;
        font-weight: bold;
      }
    }
  }
}
.main {
  width: 100%;
  padding: 100px 0 50px;
  font-size: 12px;
  .intraduse {
    padding: 20px;
    line-height: 20px;
    background: #26352c;
  }
  .cainter {
    width: 90%;
    margin: 0 auto;

    .caiterTop {
      display: flex;
      justify-content: center;
      .topRi {
        text-align: center;
        width: 100%;
        img {
          width: 80%;
        }
      }
    }

    .button600 {
      width: 70%;
      margin: 0 auto;
      img {
        width: 100%;
      }
    }
    .count {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px 0;

      img {
        width: 30px;
        margin-right: 10px;
      }
    }
  }
}
.v1 {
  top: 0;
  position: relative;
  left: 0;
  animation: identifier 1s infinite;
  -webkit-animation: identifier 1s infinite;
}
@keyframes identifier {
  0% {
    -webkit-transform: scale(0.2);
    -moz-transform: scale(0.2);
    -ms-transform: scale(0.2);
    -o-transform: scale(0.2);
    transform: scale(0.2);
    opacity: 0.5;
  }
  50% {
    -webkit-transform: scale(0.7);
    -moz-transform: scale(0.7);
    -ms-transform: scale(0.7);
    -o-transform: scale(0.7);
    transform: scale(0.7);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0.2);
    -moz-transform: scale(0.2);
    -ms-transform: scale(0.2);
    -o-transform: scale(0.2);
    transform: scale(0.2);
    opacity: 0.5;
  }
}
</style>