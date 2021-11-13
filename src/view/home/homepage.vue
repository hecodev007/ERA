
<template>
  <div :class="['pcmain', this.screenWidth >= 600 ? '' : 'main']">
    <div
      class="cainter"
      :style="`background: url(${bannerbjIMg}) no-repeat center;background-size: cover;`"
    >
      <div class="top" v-if="this.screenWidth >= 600">
        Home > <span>Roadmap</span>
      </div>
      <div class="goback" v-if="this.screenWidth < 600" @click="goback">
        <img src="@/assets/img/gobackpage.png" alt="" />
      </div>
      <div class="title">
        <img src="@/assets/img/infotitle.png" alt="" />
      </div>
      <div class="table">
        <el-row>
          <el-col :xs="24" :md="6" :lg="6" :xl="6">
            <div class="item">
              <h6>STAGE 1</h6>
              <li class="color">Project Conce</li>
              <li class="color">Determine Game Mechanics</li>
              <li class="color">Angel Design Concepts</li>
              <li class="color">Mini Site Launch</li>
              <li class="color">Social Media Presence</li>
              <li class="color">Telegram/Twitter Ads</li>
              <li class="color">Art Contests</li>
              <li class="color">20 Page Litepaper Release</li>
              <li class="color">Private Sale</li>
              <li>Social Media Influencers</li>
            </div>
          </el-col>
          <el-col :xs="24" :md="6" :lg="6" :xl="6">
            <div class="item">
              <h6>STAGE 2</h6>
              <li>Full Website with Team</li>
              <li>Angel Valley Shards (ANS)/NFT Contracts</li>
              <li>Marketing Partnerships</li>
              <li>Community Growth</li>
              <li>Video Trailer Release</li>
              <li>Blind Box Launch</li>
              <li>Angel Valley Web Marketplace</li>
              <li>20 Page Litepaper Release</li>
              <li>NFT Farming Launch</li>
              <li>Seed Angel NFT Presale</li>
              <li>Launch Angel Token on Pancake Swap</li>
              <li>Expand Team</li>
            </div>
          </el-col>
          <el-col :xs="24" :md="6" :lg="6" :xl="6">
            <div class="item">
              <h6>STAGE 3</h6>
              <li>Aggressive Marketing</li>
              <li>Angel Village Land Sale</li>
              <li>Smart Contracts Audits</li>
              <li>Seed Angel Breeding Event</li>
              <li>Merch Shop</li>
              <li>“Seed Angel” Beta Gameplay Access</li>
              <li>Original Game Soundtrack</li>
              <li>Public Beta Gameplay Access</li>
            </div>
          </el-col>
          <el-col :xs="24" :md="6" :lg="6" :xl="6">
            <div class="item">
              <h6>STAGE 4</h6>
              <li>Ancient Portal Exploration</li>
              <li>Cursed Angel Battles (PvE)</li>
              <li>Power Stone $POS Launch</li>
              <li>Mobile App (Android/iOS)</li>
              <li>Multiplayer Battles (PvP)</li>
              <li>Temple of Giving ($ANS Staking)</li>
              <li>Angel Village Launch</li>
              <li>AngelValley Treasury</li>
              <li>Secret Angel Types Announced</li>
              <li>DAO Setup and Game Platform Governance</li>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
      
       
<script>
export default {
  data() {
    return {
      screenWidth: this.GLOBAL.clientWidth,
      bannerbjIMg: "",
    };
  },
  mounted() {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
    this.setDialogWidth();
  },
  methods: {
    setDialogWidth() {
      if (this.screenWidth < 600) {
        this.bannerbjIMg = require("@/assets/img/infobj600.png");
      } else {
        this.bannerbjIMg = require("@/assets/img/infobj.png");
      }
    },
    goback() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped  lang="less" >
.pcmain {
  background: RGBA(28, 51, 33, 1);
  font-size: 12px;

  .cainter {
    padding: 0 10%;
    min-height: 100vh;
    .top {
      padding-top: 120px;
      font-size: 16px;
      span {
        color: rgba(112, 244, 165, 1);
      }
    }
    .title img {
      width: 500px;
      margin: 30px auto;
      display: block;
    }
    .table {
      background: #0a2320;
      border-radius: 16px;
      padding: 10px;
      .item {
        h6 {
          margin: 10px 0;
          font-size: 18px;
          font-weight: 900;
        }
        li {
          color: #dbc190;
          line-height: 20px;
          margin-bottom: 10px;
          font-size: 16px;
          list-style: none;
          position: relative;
          padding: 0 20px;
        }
        li:after {
          content: "•";
          color: #dbc190;
          position: absolute;
          left: 0;
          top: 0;
        }
        .color {
          color: #fff;
        }
      }
    }
  }
}
.main {
  .cainter {
    padding: 0;
  }
  .cainter .title {
    width: 100%;
    img {
      width: 100%;
    }
  }
  .goback {
    padding: 90px 0 0 30px;
    img {
      width: 40px;
    }
  }
  .cainter .table {
    background: 0;
    .item {
      background: #0a2320;
      margin: 20px;
      padding: 20px 20px;
      border-radius: 10px;
    }
  }
}
</style>