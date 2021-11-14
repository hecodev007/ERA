<template>
  <div class="mask">
    <el-dialog
      :show-close="false"
      :visible.sync="centerDialogVisible"
      :width="dialogWidth"
      center
    >
      <div :class="['pcmain', this.screenWidth >= 600 ? '' : 'main']">
        <div class="headerTop tittleFont">
          <div class="goback" @click="goback" v-if="avtiveHeader">
            <i class="el-icon-arrow-left"></i>
            My NFT
          </div>
          {{ avtiveHeader ? avtiveText : "My NFT" }}
          <img
            src="../assets/img/close.png"
            alt
            class="close"
            @click="closemodule"
          />
        </div>
        <div>
          <div v-if="!avtiveHeader">
            <div class="taboption">
              <div
                :class="activeOption == 1 ? 'activeTab' : ''"
                @click="activeTab(1)"
              >
                ALL<span>11</span>
              </div>
              <div
                :class="activeOption == 2 ? 'activeTab' : ''"
                @click="activeTab(2)"
              >
                Auction<span>11</span>
              </div>
              <div
                :class="activeOption == 3 ? 'activeTab' : ''"
                @click="activeTab(3)"
              >
                Sell<span>11</span>
              </div>
              <div
                :class="activeOption == 4 ? 'activeTab' : ''"
                @click="activeTab(4)"
              >
                Stake<span>11</span>
              </div>
            </div>
            <div class="list">
              <div class="tbHeader">
                <span>name</span>
                <span>ID</span>
                <span>Opeartion</span>
              </div>
              <div class="tbody">
                <!-- <div class="dataNo">
                  <img src="../assets/img/nodata.png" alt />
                  <p class="textNO">暫無數據</p>
                </div> -->
                <div class="item">
                  <div
                    :class="[
                      'width1',
                      dialogWidth == '90%' ? 'width1active' : '',
                    ]"
                  >
                    <img src="../assets/img/xunzhaung1.png" alt />
                    <p>泉水琉璃勛章</p>
                  </div>
                  <div class="width2">200</div>
                  <div
                    :class="[
                      'width3',
                      dialogWidth == '90%' ? 'width3active' : '',
                    ]"
                  >
                    <img src="../assets/img/paimai.png" alt @click="check(1)" />
                    <img
                      src="../assets/img/sell.png"
                      alt
                      @click="checksell(2)"
                    />
                    <!-- 
                    <img src="../assets/img/shichang.png" alt @click="checkDetail(1)" v-if="routeQuryDetail==2" />
                    <img src="../assets/img/sellD.png" alt @click="checkDetail(2)" v-if="routeQuryDetail==2" /> -->
                  </div>
                </div>
                <div class="item">
                  <div
                    :class="[
                      'width1',
                      dialogWidth == '90%' ? 'width1active' : '',
                    ]"
                  >
                    <img src="../assets/img/xunzhaung1.png" alt />
                    <p>泉水琉璃勛章</p>
                  </div>
                  <div class="width2">200</div>
                  <div
                    :class="[
                      'width3',
                      dialogWidth == '90%' ? 'width3active' : '',
                    ]"
                  >
                    <img
                      src="../assets/img/sellD.png"
                      alt
                      @click="checkDetail(2)"
                      v-if="routeQuryDetail == 2"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 質押 -->
          <div class="yabao paimai" v-if="avtiveHeader == 2">
            <div class="iconMain">
              <img
                src="../assets/img/xunzhaung1.png"
                alt
                class="iconxunzhang"
              />
              <div class="boxname">
                <div class="name">泉水琉璃勛章</div>
                <span>ID：002102</span>
              </div>
            </div>
            <div class="margin0">
              <div class="textname">Starting price</div>
              <div class="exchange">
                <span class="color">372136129361</span>
                <span class="tittleFont">≈ $ 2812</span>
              </div>
            </div>

            <div class="ntfQR">
              <img src="../assets/img/ntfQRsell.png" alt />
            </div>
            <div class="rule">
              <h6>Note</h6>
              <ul>
                <li>
                  1、注意事項說明注意事項說明注意事項說明，注意事項說明注意事項說明注意事項說明注意事項說明，注意事項說明注意事項說明注意事項說明
                </li>

                <li>
                  1、注意事項說明注意事項說明注意事項說明，注意事項說明注意事項說明注意事項說明注意事項說明，注意事項說明注意事項說明注意事項說明
                </li>
              </ul>
            </div>
          </div>
          <!-- 拍卖 -->
          <div class="yabao paimai" v-if="avtiveHeader == 1">
            <div class="iconMain">
              <img
                src="../assets/img/xunzhaung1.png"
                alt
                class="iconxunzhang"
              />
              <div class="boxname">
                <div class="name">泉水琉璃勛章</div>
                <span>ID：002102</span>
              </div>
            </div>
            <div class="margin0">
              <div class="textname">Starting price</div>
              <div class="exchange">
                <span class="color">372136129361</span>
                <span class="tittleFont">≈ $ 2812</span>
              </div>
            </div>
            <div class="margin0">
              <div class="textname">Initial countdown</div>
              <div class="slcount">
                <span :class="[time == 1 ? 'bjtime' : '']">12小时</span>
                <span :class="[time == 2 ? 'bjtime' : '']">24小时</span>
              </div>
            </div>
            <div class="margin0">
              <div class="textname">
                Bid range:：
                <span class="color">10% fixed price increase</span>
              </div>
            </div>
            <div class="ntfQR">
              <img src="../assets/img/ntfQR.png" alt />
            </div>
            <div class="rule">
              <h6>Note</h6>
              <ul>
                <li>
                  1、注意事項說明注意事項說明注意事項說明，注意事項說明注意事項說明注意事項說明注意事項說明，注意事項說明注意事項說明注意事項說明
                </li>

                <li>
                  1、注意事項說明注意事項說明注意事項說明，注意事項說明注意事項說明注意事項說明注意事項說明，注意事項說明注意事項說明注意事項說明
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    showNFT: {
      type: Boolean,
      default: false,
    },
    routeQury: {
      type: Number,
      default: 1, //默认传1 我的   2是farms
    },
  },
  data() {
    return {
      centerDialogVisible: this.showNFT,
      screenWidth: this.GLOBAL.clientWidth,
      dialogWidth: "0",
      avtiveHeader: "", //1是押宝 2 是拍卖
      avtiveText: "",
      time: "1",
      routeQurydata: this.routeQury,
      activeOption: 1,
      routeQuryDetail: 2, //详情
    };
  },
  watch: {
    showNFT(val) {
      this.centerDialogVisible = val;
       this.setDialogWidth();
    },
    routeQury(val) {
      this.routeQurydata = val;
    },
  },

  mounted() {
    window.onresize = () => {
      this.screenWidth = document.body.clientWidth;
      this.GLOBAL.clientWidth = this.screenWidth;
    };
    this.$nextTick(() => {
      this.screenWidth = document.body.clientWidth;
      this.GLOBAL.clientWidth = this.screenWidth;
    });
    this.setDialogWidth();
  },
  methods: {
    setDialogWidth() {
      if (this.screenWidth < 600) {
        this.dialogWidth = "90%";
      } else {
        this.dialogWidth = 600 + "px";
      }
      console.log("222");
    },
    goback() {
      this.avtiveText = "";
      this.avtiveHeader = null;
    },
    check(item) {
      console.log(item);
      //选择按钮 押宝 拍卖
      this.$emit("getConfirmNFT", item);
    },
    checksell(index) {
      this.$emit("getConfirmNFTsell", index);
    },
    //checkDetail
    checkDetail(v) {
      console.log(v);
      if (v == 1) {
        this.avtiveHeader = 1;
      } else {
        this.avtiveHeader = 2;
      }
    },

    // 点击弹框下的关闭
    closemodule(v) {
      this.$emit("getCancelNFT", v);
    },
    activeTab(v) {
      this.activeOption = v;
    },
  },
};
</script>
<style scoped lang="less">
.pcmain {
  color: #fff;

  .el-dialog--center .el-dialog__body {
    padding: 0;
  }
  .headerTop {
    text-align: center;
    color: #fff;
    position: relative;
    height: 20px;
    .goback {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
    }
  }
  .close {
    width: 25px;
    height: 25px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
  }
  // .count {
  //   text-align: right;
  //   margin: 20px 0;
  // }
  .taboption {
    display: flex;
    justify-content: space-between;
    div {
      width: 94px;
      height: 36px;
      text-align: center;
      line-height: 36px;
      margin: 20px 0;
      background: url(../assets/img/mytabno.png) no-repeat center;
      background-size: cover;
      span {
        margin-left: 3px;
      }
    }
    .activeTab {
      background: url(../assets/img/mytab.png) no-repeat center;
      background-size: cover;
    }
  }
  .list {
    max-height: 700px;
    .tbHeader {
      display: flex;
      justify-content: space-between;
    }
    .tbody {
      .dataNo {
        text-align: center;
        padding: 30px;
        img {
          margin: 20px auto;
        }
        .textNO {
          line-height: 20px;
          font-size: 16px;
          padding: 0;
          margin: 0;
        }
      }
      .item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        .width1 {
          width: 40%;
          text-align: left;
          p {
            display: inline-block;
          }
          img {
            width: 50%;
            max-width: 46px;
            margin: 0;
            padding: 0;
            vertical-align: middle;
          }
        }
        .width1active {
          display: flex;
          align-items: center;
          p {
            width: 50%;
            margin-left: 3%;
          }
        }
        .width2 {
          width: 20%;
          text-align: center;
        }
        .width3 {
          width: 40%;
          text-align: right;
          img {
            width: 35%;
            margin-left: 2%;
            padding: 0;
            vertical-align: middle;
          }
        }
        .width3active {
          width: 40%;
          text-align: right;
          img {
            width: 60%;
            margin-bottom: 2%;
            padding: 0;
            vertical-align: middle;
          }
        }
      }
    }
  }
}
.yabao {
  .iconMain {
    display: flex;
    justify-content: center;
    align-items: center;
    .iconxunzhang {
      width: 75px;
    }
    .boxname {
      text-align: center;
      margin-left: 10px;
      .name {
        color: rgba(112, 244, 165, 1);
        font-size: 22px;
      }
    }
  }
  .textname {
    text-align: center;
  }
  .slcount {
    display: flex;
    justify-content: center;
    span {
      margin: 10px 0;
      padding: 5px 10px;
      background: rgba(102, 230, 129, 0.33);
      text-align: center;
      font-size: 16px;

      border-radius: 20px;
    }
  }
  .ntfQR {
    margin: 20px auto 0;
    width: 80%;
    img {
      width: 100%;
    }
  }
}
.paimai {
  max-height: 400px;
  overflow: scroll;

  .iconMain {
    margin: 20px 0;
  }

  .margin0 {
    margin-bottom: 30px;
  }
  .slcount {
    justify-content: inherit;
    span {
      margin-right: 10px;
      background: 0;
      padding: 0;
      display: block;
      width: 88px;
      height: 34px;
      line-height: 34px;
    }
    .bjtime {
      background: url(../assets/img/btnBj.png) no-repeat center;
      background-size: cover;
    }
  }
  .textname {
    text-align: left;
    margin-bottom: 10px;
  }
  .exchange {
    background: RGBA(29, 41, 34, 1);
    border-radius: 5px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    font-size: 18px;
  }
}
.color {
  color: rgba(112, 244, 165, 1);
}
.main {
  .taboption div {
    background-size: contain;
    font-size: 12px;
  }
  .taboption .activeTab {
    background: url(../assets/img/mytab.png) no-repeat center;
    background-size: contain;
  }
}
</style>