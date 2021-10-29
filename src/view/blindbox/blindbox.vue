<template>
  <div :class="['pcmain', this.screenWidth >= 600 ? '' : 'main']">
    <div class="intraduse" v-if="this.screenWidth < 600">
      鑄造一個盲盒需要消耗0.08ETH，包括隨機生成的6種不同等級的寶物，祝好運～
    </div>

    <div class="cainter">
      <div class="caiterTop">
        <div class="topLe" v-if="this.screenWidth >= 600">
          <div class="instructions">
            <img src="../../assets/img/logo.png" alt />
            <span
              >鑄造一個盲盒需要消耗0.08ETH，包括隨機生成的6種不同等級的寶物，祝好運～</span
            >
          </div>
          <div class="meth">
            <div class="button">
              <img src="../../assets/img/btnn.png" alt @click="goMint" />
            </div>
            <div class="count">
              <img src="../../assets/img/mangheicon.png" alt />
              <p>NTF計數666/10000</p>
            </div>
          </div>
        </div>
        <div class="topRi">
          <img src="../../assets/img/mangheicon.png" alt />
          <div><span>?</span></div>
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
            v-for="(item, key) in list"
          >
            <div
              class="contentbox"
              :style="`background: url(${item.bjimh}) no-repeat center;background-size: contain;`"
            >
            <!-- <div class="contentbox">
              TokenID: {{ item[0] }} Count:{{ item[1] }}
              {{ key }}
            </div> -->
            <div class="info">
                <span>{{ item.bei }}倍</span>
                <div>拥有：X{{ item.have }}</div>
              </div>
              <img :src="item.icon" alt />
              <p>大地原石勛章</p>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
    <infoBindBox @getCancel="show = false" :show.sync="show"></infoBindBox>
  </div>
</template>
<script>
import infoBindBox from "./infoBindBox.vue";
import { mint, myAllNFT } from "@/assets/js/web3.js";

export default {
  components: {
    infoBindBox,
  },
  data() {
    return {
      screenWidth: this.GLOBAL.clientWidth,
      show: false,
      power: [1000, 2500, 6500, 14500, 35000, 90000],
      myNFTs: [],
      list: [
        {
          bjimh: require("@/assets/img/xzBj1.png"),
          icon: require("@/assets/img/xunzhaung1.png"),
          bei: 100,
          have: 20,
          name: "大地原石勛章",
        },
        {
          bjimh: require("@/assets/img/xzBj1.png"),
          icon: require("@/assets/img/xunzhaung1.png"),
          bei: 100,
          have: 20,
          name: "大地原石勛章",
        },
        {
          bjimh: require("@/assets/img/xzBj1.png"),
          icon: require("@/assets/img/xunzhaung1.png"),
          bei: 100,
          have: 20,
          name: "大地原石勛章",
        },
        {
          bjimh: require("@/assets/img/xzBj1.png"),
          icon: require("@/assets/img/xunzhaung1.png"),
          bei: 100,
          have: 20,
          name: "大地原石勛章",
        },
        {
          bjimh: require("@/assets/img/xzBj1.png"),
          icon: require("@/assets/img/xunzhaung1.png"),
          bei: 100,
          have: 20,
          name: "大地原石勛章",
        },
        {
          bjimh: require("@/assets/img/xzBj1.png"),
          icon: require("@/assets/img/xunzhaung1.png"),
          bei: 100,
          have: 20,
          name: "大地原石勛章",
        },
      ],
    };
  },
  mounted() {
    myAllNFT()
      .then((nfts) => {
        this.myNFTs = nfts;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  methods: {
    goMint() {
      // mint(nftName,level,power,res,author)nftName 可以传空 level 等级 1-5 power[1000,2500,6500,14500,35000,90000] res 随便 author 随便
      mint(
        "nftName",
        Math.floor((Math.random() * 10) % 5) + 1,
        this.power[Math.floor((Math.random() * 10) % 6) + 1],
        "res"
      )
        .then((hash) => {
          this.$toast("铸造成功，交易Hash" + hash, "success");
        })
        .catch((err) => {
          this.$toast("铸造失败" + err, "error");
        });
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
            max-width: 320px;
            img {
              width: 100%;
            }
          }
          .count {
            display: flex;
            width: 50%;
            align-items: center;
            margin-left: 20px;
            img {
              width: 38px;
              height: 45px;
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
      width: 70%;
      background-size: cover;
      padding: 10%;
      margin: 5%;
      .info {
        display: flex;
        justify-content: space-between;
        align-items: center;
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
        width: 50%;
        // margin: 20px 0;
      }
      p {
        text-align: center;
        padding: 0;
        margin: 0;
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

      img {
        width: 30px;
        margin-right: 10px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>