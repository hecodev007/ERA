<template>
  <div id="app">
    <div :class="[navBarFixed == true ? 'navBarWrap' : '', 'header']">
      <el-col :xs="6" :sm="6" :md="4" :lg="3" :xl="8">
        <img
          :class="['logoimg', this.screenWidth >= 600 ? '' : 'logoimg600']"
          src="./assets/img/logo.png"
          alt="logo"
        />
      </el-col>
      <el-col :xs="18" :sm="18" :md="18" :lg="20" :xl="20">
        <!-- 大屏幕展示 -->
        <div
          v-if="Object.keys(rightNavItems).length === 0 ? true : false"
          class="box"
        >
          <!-- <el-menu
            :default-active="this.$route.path"
            id="navid"
            class="nav"
            mode="horizontal"
            :default-openeds="defaultOpeneds"
            
          >
            <el-menu-item
              :key="key"
              v-for="(item, key) in leftNavItems"
              :index="item.activeIndex"
              @click="activeNavabs(key)"
              >{{ item.name }}</el-menu-item
            >
          </el-menu> -->
          <ul class="menu">
            <li
              :class="[defaultOpeneds == item.index ? 'active' : '']"
              @click="activeNavabs(key)"
              v-for="(item, key) in leftNavItems"
              :key="key"
            >
              {{ item.name }}
            </li>
          </ul>
          <div class="navimg">
            <img src="./assets/img/en.png" alt class="luange" />
            <div @mouseenter="enter" v-if="!mypackage">
              <img
                src="./assets/img/package.png"
                alt
                class="package"
                v-if="mouse"
                @click="linkShow"
              />
              <img
                src="./assets/img/packageenter.png"
                @mouseout="out"
                alt
                class="package"
                v-if="!mouse"
                @click="linkShow"
              />
            </div>
            <div @mouseenter="enter" v-if="mypackage">
              <img
                src="./assets/img/mypackage.png"
                alt
                class="package"
                v-if="mouse"
                @click="linkPackageShow"
              />
              <img
                src="./assets/img/mypackageenter.png"
                @mouseout="out"
                alt
                class="package"
                v-if="!mouse"
                @click="linkPackageShow"
              />
            </div>
          </div>
          <div class="heyue">
            <span>Contract Address：</span>
            <i>0c578…567qQ</i>

            <img src="./assets/img/copy.png" alt="" @click="copyCode" />
          </div>
          <div class="itemfiexd">
            <div
              v-for="(item, key) in navImg"
              :key="key"
              @mouseenter="enternav(key)"
            >
              <img :src="item.img" alt v-if="item.mouse" />
              <img
                :src="item.imgHover"
                alt
                v-if="!item.mouse"
                @mouseout="outnav(key)"
              />
            </div>
          </div>
        </div>
        <!-- 小屏幕展示 -->
        <div
          class="topbanner"
          v-if="Object.keys(rightNavItems).length === 0 ? false : true"
        >
          <div class="navimgList">
            <img src="./assets/img/en.png" alt class="luange" />
            <img
              src="./assets/img/package.png"
              v-if="!mypackage"
              alt
              class="package"
              @click="linkShow"
            />
            <img
              src="./assets/img/mypackage.png"
              alt
              class="package"
              v-if="mypackage"
              @click="linkPackageShow"
            />
          </div>
          <img
            class="navs"
            @click="drawer = true"
            src="./assets/img/navlist.png"
          />
        </div>
      </el-col>
    </div>
    <!-- 小屏幕展示 抽屉-->
    <el-drawer :visible.sync="drawer" :size="size" :with-header="false">
      <div class="navList">
        <!-- <el-menu
          :default-active="this.$route.path"
          id="navid"
          class="nav"
          mode="horizontal"
          :default-openeds="defaultOpeneds"
          router
        >
          <el-menu-item
            :key="key"
            v-for="(item, key) in rightNavItems"
            :index="item.activeIndex"
            >{{ item.name }}</el-menu-item
          >
        </el-menu> -->
        <ul class="menu">
          <li
            :class="[defaultOpeneds == item.index ? 'active' : '']"
            @click="activeNavabs(key)"
            v-for="(item, key) in rightNavItems"
            :key="key"
          >
            {{ item.name }}
          </li>
        </ul>
      </div>
      <div class="itemList">
        <img :src="item.img" alt v-for="(item, key) in navImg" :key="key" />
      </div>
    </el-drawer>
    <linkPackage
      @getConfirm="getConfirmCheck"
      @getCancel="show = false"
      :show.sync="show"
    ></linkPackage>

    <NFTmedule
      @getConfirmNFT="getConfirmNFT"
      @getConfirmNFTsell="getConfirmNFTsell"
      @getCancelNFT="showNFT = false"
      :showNFT.sync="showNFT"
      :routeQury="1"
    ></NFTmedule>
    <router-view></router-view>
  </div>
</template>

<script>
import NFTmedule from "./components/NFTmedule.vue";
import linkPackage from "./components/linkPackage.vue"; // 第一步 先使用import导入你要在该组件中使用的子组件
import { initContract } from "@/assets/js/web3.js";
import { _WalletContract } from "@/assets/js/walletconnect.js";
import { _MeatMaskContract } from "@/assets/js/metamask.js";
export default {
  name: "App",
  components: {
    linkPackage,
    NFTmedule,
  },
  data() {
    return {
      screenWidth: document.body.clientWidth,
      navItems: [
        { name: "Home", activeIndex: "/home", index: "1" },
        {
          name: "Game Coin",
          activeIndex: "/home?id='part'",
          id: "part",
          index: "11",
        },
        { name: "NFT", activeIndex: "/blindbox", index: "2" },
        { name: "Market", activeIndex: "/market", index: "3" },
        // { name: "Pledge Mining", activeIndex: "/arrowheads", index: "4" },
        { name: "Farms", activeIndex: "/FARMS", index: "4" },
        // { name: "Contract" },
        // { name: "Backstage" }
      ],
      list: this.GLOBAL.list,
      defaultOpenedsIndex: "1",
      address: "",
      defaultOpeneds: null,
      navBarFixed: false,
      drawer: false,
      size: "200px",
      show: false, //链接钱包弹窗
      showNFT: false, //NFT
      mouse: true, //鼠标滑过
      mypackage: false,
      navImg: [
        {
          img: require(`@/assets/img/navRight1.png`),
          imgHover: require(`@/assets/img/navRight1h.png`),
          mouse: true,
          link: "",
        },
        {
          img: require(`@/assets/img/navRight2.png`),
          imgHover: require(`@/assets/img/navRight2h.png`),
          link: "",
          mouse: true,
        },
        {
          img: require(`@/assets/img/navRight3.png`),
          imgHover: require(`@/assets/img/navRight3h.png`),
          link: "",
          mouse: true,
        },
        {
          img: require(`@/assets/img/navRight4.png`),
          imgHover: require(`@/assets/img/navRight4h.png`),
          link: "",
          mouse: true,
        },
      ],
      test: "0c57822fdsgfdbcv 435axcxd64767vsfgdfgvfd3455567qQ", //复制的内容
    };
  },
  computed: {
    leftNavItems: function () {
      return this.screenWidth >= 1280 ? this.navItems : {};
    },
    rightNavItems: function () {
      return this.screenWidth < 1280 ? this.navItems : {};
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
    this.activeNav();
    // 事件监听滚动条
    window.addEventListener("scroll", this.watchScroll);

    // // this.$toast('提示文字','success')
    // this.$toast("提示文字", "error");
  },
  watch: {
    $route(to, from) {
      this.activeNav();
    },
    screenWidth(newValue) {
      // 为了避免频繁触发resize函数导致页面卡顿，使用定时器
      if (!this.timer) {
        // 一旦监听到的screenWidth值改变，就将其重新赋给data里的screenWidth
        this.screenWidth = newValue;
        this.GLOBAL.clientWidth = this.screenWidth;
        this.timer = true;
        setTimeout(() => {
          //console.log(this.screenWidth);
          this.timer = false;
        }, 400);
      }
    },
    address() {
      return (this.address = window.web3 && window.web3.accounts[0]);
    },
  },
  methods: {
    activeNav() {
      let path = this.$route.path;
      let thisNav = this.navItems.find((item) => {
        return item.activeIndex.includes(path)
          ? item.activeIndex.includes(path)
          : null;
      });
      if (this.$route.query.id) {
        this.defaultOpeneds = [this.navItems[1].index];
        this.defaultOpenedsIndex = 11;
      } else if (thisNav) {
        this.defaultOpeneds = [thisNav.index];
        this.defaultOpenedsIndex = thisNav.index;
        this.GLOBAL.clientWidth = this.screenWidth;
      } else {
      }
    },
    activeNavabs(key) {
      let item = this.navItems[key];
      this.$router.push({
        path: item.activeIndex,
      });
      if (item.id) {
        this.defaultOpeneds = [item.index];
      }
    },
    enternav(i) {
      for (let index = 0; index < this.navImg.length; index++) {
        if (i == index) {
          this.navImg[index].mouse = false;
        } else {
          this.navImg[index].mouse = true;
        }
      }
    },
    outnav() {
      for (let index = 0; index < this.navImg.length; index++) {
        this.navImg[index].mouse = true;
      }
    },
    watchScroll() {
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //  当滚动超过 50 时，实现吸顶效果
      if (scrollTop > 49) {
        this.navBarFixed = true;
      } else {
        this.navBarFixed = false;
      }
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
    //获取钱包链接选择
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
    //我的钱包
    linkPackageShow() {
      this.showNFT = true;
    },
    //链接钱包
    linkShow() {
      // this.show = true
      this.show = !this.show;
    },
    //NFT方法
    getConfirmNFT(v) {
      this.showNFT = false;
      this.$router.push({
        path: "/marketInfo",
        query: {
          actives: this.actives,
          souse: "my",
        },
      });
    },
    getConfirmNFTsell(index) {
      this.showNFT = false;
      this.$router.push({
        path: "/marketBuyInfo",
        query: {
          actives: this.actives,
          souse: "my",
        },
      });
    },
    enter() {
      this.mouse = false;
    },
    out() {
      this.mouse = true;
    },
    copyCode() {
      //创建一个input元素
      let input = document.createElement("input");
      //给input的内容复制
      input.value = this.test;
      // 在body里面插入这个元素
      document.body.appendChild(input);
      // 选中input里面内容
      input.select();
      //执行document里面的复制方法
      document.execCommand("Copy");
      // 复制之后移除这个元素
      document.body.removeChild(input);

      this.$notify({
        title: "success",
        message: "已复制到剪切板",
        type: "success",
      });
    },
  },
};
</script>

<style >
@import "./assets/font/font.css";
body {
  margin: 0;
  background: rgba(19, 29, 23, 1);
}
#app {
  color: #fff;
  font-family: "Share-Tech";
  background: rgba(19, 29, 23, 1);
}
#app div {
  font-family: "Share-Tech";
}
.tittleFont {
  font-family: "ProximaNova-Xbold.woff" !important;
}
/* .pcmain{
  min-height: 100vh;
} */
.header {
  width: 100%;
  z-index: 999;
  padding: 20px 0;
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.el-menu {
  background: 0;
}
.menu {
  display: flex;
}
.menu li {
  width: 100px;
  text-align: center;
  cursor: pointer;
}
.menu li.active {
  position: relative;
  border-bottom: 0 !important;
  font-size: 18px;
  color: #70f4a5;
  font-weight: 900;
}
.menu li.active::after {
  background: #70f4a5 !important;
  content: "";
  display: block;
  position: absolute;
  width: 34px;
  height: 4px;
  top: 33px;
  left: 50%;
  transform: translate(-50%, 0);
}
.logoimg {
  max-width: 84px;
  width: 70%;
  margin-left: 10%;
}
.logoimg600 {
  width: 80%;
   max-width: 75px;
  margin-left: 10%;
}
.el-menu.el-menu--horizontal {
  border: 0 !important;
  border-bottom: 0 !important;
  background: 0 !important;
}
.box .el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 0 !important;
  font-size: 18px;
  color: #70f4a5 !important;
  position: relative;
}
.box .el-menu--horizontal > .el-menu-item.is-active::after {
  background: #70f4a5 !important;
  content: "";
  display: block;
  position: absolute;
  width: 34px;
  height: 4px;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
}
.el-menu-item:hover {
  background: 0 !important;
}
.el-menu-item {
  background: 0 !important;
  color: #fff !important;
  font-family: "ProximaNova-Xbold.woff";
  transition: none !important;
}

.header .el-menu--horizontal > .el-menu-item {
  padding: 0 !important;

  margin: 0 32px !important;
}
.el-menu--horizontal > .el-menu-item {
  height: 48px !important;
  line-height: 48px !important;
}
.navBarWrap {
  position: fixed;
  top: 0;
  z-index: 999;
  background: rgba(16, 31, 22, 0.89);
}
.el-menu--horizontal > .el-submenu .el-submenu__icon-arrow {
  display: none !important;
}
.el-menu--horizontal > .el-submenu.is-active .el-submenu__title {
  border: 0;
  color: #70f4a5;
  background: 0;
}
.el-submenu__title i {
  color: #70f4a5;
}
.el-menu--horizontal > .el-submenu:hover {
  background: 0 !important;
}
.is-opened {
  background: 0 !important;
}
.topbanner {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.navs {
  width: 12%;
  max-width: 40px;
  float: right;
  margin-right: 5%;
}
.el-drawer.rtl {
  background: rgba(38, 53, 44, 1);
}
.navList .menu {
  display: block;
}
.navList .menu li {
  border-bottom: 0;
  cursor: pointer;
  line-height: 20px;
  margin: 40px 0;
  text-align: center;
  width: 100%;
}
.navList .menu li.active {
  border-left: 2px solid #70f4a5;
  font-size: 18px;
  color: #70f4a5 !important;
  border-bottom: 0 !important;
}
.navList .menu li.active::after {
  display: none;
}
.navList .el-menu--horizontal > .el-menu-item {
  padding: 0;
  width: 100%;
  text-align: center;
}
.navList .el-menu--horizontal > .el-menu-item.is-active {
  border-left: 2px solid #70f4a5;
  font-size: 18px;
  border-bottom: 0;
  color: #70f4a5 !important;
}
.navList .el-menu--horizontal > .el-menu-item {
  line-height: 20px;
  height: 20px;
  margin-top: 20px;
}
.box {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 30px;
  text-align: right;
}
.box .heyue {
  font-size: 12px;
}
.box .heyue span {
  color: rgba(112, 244, 165, 1);
}
.box .heyue i {
  font-style: normal;
}
.box .heyue img {
  width: 20px;
  margin-left: 5px;
  display: inline-block;
  vertical-align: middle;
}
.box .itemfiexd {
  position: fixed;
  top: 130px;
}
.box .itemfiexd div {
  display: block;
  width: 24px;
  margin-bottom: 20px;
}
.box .itemfiexd img {
  width: 100%;
}
.navimg .luange {
  width: 24px;
  margin: 0 12px;
}
.navimg div {
  display: inline-block;
}
.navimg .package {
  width: 80px;
  margin: 0 12px;
}
.box .item img {
  width: 24px;
  margin: 0 12px;
}

.navimgList {
  text-align: center;
  margin-right: 20px;
}
.navimgList .luange {
  width: 24px;
  margin-right: 20px;
}
.navimgList .package {
  width: 80px;
}
.itemList {
  position: absolute;
  bottom: 40px;
  width: 80%;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: space-evenly;
}
.itemList img {
  width: 24px;
}
.el-dialog {
  background: rgba(38, 53, 44, 1);
  border-radius: 16px;
  overflow: hidden;
}
.el-dialog__header {
  display: none;
}
.el-dropdown-menu {
  border: 0;
  background: rgba(112, 244, 165, 1) !important;
}
.el-popper[x-placement^="bottom"] .popper__arrow::after {
  border-bottom-color: rgba(112, 244, 165, 1) !important;
}
.el-dropdown-menu__item {
  color: rgba(19, 29, 23, 0.8);
}
ul li {
  font-style: normal;
  list-style: none;
}
p,
li,
ul {
  margin: 0;
  padding: 0;
}
.el-dialog__body {
  background: rgba(38, 53, 44, 1) !important;
  padding: 20px;
}
.pcmain .el-dialog--center .el-dialog__body {
  background: rgba(38, 53, 44, 1) !important;
  padding: 20px;
}
.main .el-dialog--center .el-dialog__body {
  background: rgba(38, 53, 44, 1) !important;
  padding: 10px;
}
</style>
