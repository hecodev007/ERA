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
              <span><img src="../../assets/img/chuizi.png" alt="" /> Mint</span>
              <!--  <span>Approve</span>
               <span>Connect wallet</span> -->
            </div>
            <div class="count">
              <img src="../../assets/img/iconInfo.png" alt />
              <p>NTF 666/10000</p>
            </div>
          </div>
        </div>
        <div class="topRi">
          <img src="../../assets/img/mangheicon.png" alt />
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
  </div>
</template>
<script>
import infoBindBox from "./infoBindBox.vue";
import { mint, myAllNFT } from "@/assets/js/web3.js";
import checkbox from "./checkbox.vue";

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
      power: [1000, 2500, 6500, 14500, 35000, 90000],
      myNFTs: [],
      list: this.GLOBAL.list,
      itemData: {},
      btnbjsss: require("@/assets/img/btnbjsss.png"),
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
    //     console.log( this.myNFTs)
    myAllNFT()
      .then((nfts) => {
        console.log("mynfts", nfts);
        this.myNFTs = this.deepMerge(nfts, this.list);
      })
      .catch((err) => {
        // this.$toast(err, "error");
        this.$notify({
          title: "error",
          message: err,
          type: "error",
        });
      });
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
        width: 35%;
        text-align: right;
        position: relative;
        img {
          width: 70%;
        }
        div {
          width: 70%;
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
          width: 60%;
        }
        div {
          top: 0;
          left: 50%;
          transform: translate(-50%, 0);
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
</style>