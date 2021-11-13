
<template>
  <div
    :class="['pcmain', this.screenWidth >= 600 ? '' : 'main']"
    v-if="centerDialogVisible"
  >
    <div class="maskmodule">
      <div class="modulemain" :style="{ width: dialogWidth }">
        <img src="@/assets/img/lihua.png" alt="" class="lihua" />
        <div class="top">
          <img src="@/assets/img/checktop.png" alt="" class="topp" />
          <img src="@/assets/img/close.png" alt="" class="closemodule" />
        </div>
        <span class="tips">You got a</span>
        <div class="imgs">
          <img src="@/assets/img/checkbj.png" alt="" class="checkbj" />
          <img src="@/assets/img/xunzhaung1.png" alt="" class="xz" />
          <div class="name">Magic Badge</div>
        </div>
      </div>
    </div>
  </div>
</template>
      
       
<script>
export default {
  props: {
    showcheck: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      screenWidth: this.GLOBAL.clientWidth,
      dialogWidth: 0,
      centerDialogVisible: this.showcheck,
    };
  },
  mounted() {
    this.setDialogWidth();
  },
  methods: {
    setDialogWidth() {
      if (this.screenWidth < 600) {
        this.dialogWidth = "80%";
      } else {
        this.dialogWidth = 400 + "px";
      }
    },
    // 点击弹框下的关闭
    closemodule(v) {
      this.$emit("getCancelclose", v);
    },
  },
};
</script>
<style scoped  lang="less" >
.pcmain {
  .maskmodule {
    position: fixed;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    .lihua {
      width: 130%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
    .modulemain {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: rgba(38, 53, 44, 1);
      border-radius: 10px;
      .top {
        .topp {
          width: 109%;
          position: absolute;
          top: -43px;
          left: -5%;
        }
        .close {
          width: 25px;
          position: absolute;
          top: 24px;
          right: 5%;
        }
      }
      .tips {
        position: absolute;
        top: 23%;
        left: 50%;
        transform: translate(-50%, -50%);
        /* width: 60%; */
        text-align: center;
      }
      .imgs {
        position: relative;
        width: 100%;
        height: 360px;
        .checkbj {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 60%;
        }
        .xz {
          position: absolute;
          top: 50%;
          width: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }
      .name {
        position: absolute;
        bottom: 10%;
        width: 50%;
        left: 50%;
        transform: translate(-50%, 0);
        font-size: 18px;
        text-align: center;
      }
    }
  }
}
.main {
  .maskmodule .modulemain .imgs {
    height: 300px;
  }
  .maskmodule .modulemain .top .topp {
    width: 109%;
    position: absolute;
    top: -27px;
    left: -5%;
  }
  .maskmodule .modulemain .top .close {
    width: 25px;
    position: absolute;
    top: 18px;
    right: 5%;
  }
}
</style>