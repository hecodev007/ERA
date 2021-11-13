<template>
  <div class="mask">
    <el-dialog :show-close="false" :visible.sync="centerDialogVisible" :width="dialogWidth" center>
      <div :class="['pcmain',this.screenWidth >= 600 ?'':'main']">
        <div class="headerTop">
          Stake LP
          <img src="../../assets/img/close.png" alt class="close" @click="closemodule" />
        </div>
        <div class="Box">
          <div class="name">
            <span>Input</span>
            <span>Balance:0</span>
          </div>
          <div class="cantes">
            <span class="number">0.00</span>
            <div class="tip">
              <span>max</span>
              <p>ANST/BUSD</p>
            </div>
          </div>
        </div>
        <img src="../../assets/img/lpmodulebtnno.png" v-if="actives" alt class="submit" />
        <img
          src="../../assets/img/lpmodulebtn.png"
          @click="getConfirmUp"
          v-if="!actives"
          alt
          class="submit"
        />
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  props: {
    showarrowUp: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      centerDialogVisible: this.showarrowUp,
      dialogWidth: "0",
      screenWidth: this.GLOBAL.clientWidth,

      actives: true,
      swiperOption: {}
    };
  },
  watch: {
    showarrowUp(val) {
      this.centerDialogVisible = val;
    }
  },
  created() {},
  mounted() {
    this.setDialogWidth();
  },
  methods: {
    setDialogWidth() {
      if (this.screenWidth < 600) {
        this.dialogWidth = "90%";
      } else {
        this.dialogWidth = 500 + "px";
      }
    },
    // 点击弹框下的关闭
    closemodule(v) {
      this.$emit("getCancel", v);
    },
    getConfirmUp(v) {
      this.$emit("getConfirmUp", v);
    }
  }
};
</script>
<style scoped lang="less">
.pcmain {
  color: #fff;

  .headerTop {
    text-align: center;
    position: relative;
    color: #fff;
  }

  .Box {
    background: #335741;
    border-radius: 8px;
    padding: 30px 20px;
    margin: 20px 0;
    .name {
      display: flex;
      justify-content: space-between;
      line-height: 30px;
      margin-bottom: 10px;
    }
    .cantes {
      display: flex;
      align-items: center;
      justify-content: space-between;
      line-height: 30px;
      .number {
        color: RGBA(111, 136, 120, 1);
        font-size: 24px;
      }
      .tip {
        display: flex;
        justify-content: flex-end;
        align-items: center;
        span {
          display: inline-block;
          width: 79px;
          height: 36px;
          text-align: center;
          line-height: 36px;
          border-radius: 20px;
          margin-right: 10px;
          background: RGBA(75, 149, 105, 1);
        }
        p {
          font-size: 24px;
          color: rgba(112, 244, 165, 1);
        }
      }
    }
  }
  .submit {
    display: block;
    margin: 0 auto;
    width: 60%;
  }
}
.main {
  .headerTop {
    text-align: center;
    position: relative;
    color: #fff;
    padding: 10px;
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
</style>