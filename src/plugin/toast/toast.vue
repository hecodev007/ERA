<template>
   <!-- 全局提示框 -->
   <transition name="slide-fade">
      <div v-if="visible" :class="['dialog-tips',type=='success'?'':'error']">
          <div>{{message}}</div>
      </div>
  </transition>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
      message: "",
      type:"success"
    };
  },
  
};
</script>
<style scoped lang="less">
.dialog-tips{
    min-width: 380px;
    box-sizing: border-box;
    border-radius: 4px; 
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: rgba(44, 134, 80, 0.9);
    overflow: hidden;
    height: 82px;
    line-height: 82px;
    // display: flex;
    text-align: center;
    align-items: center;
    color: #fff;
    div{
        text-align: center;
    }
}
.error{
    background: rgba(233, 70, 42, 0.9);
    color: fff;
    div{
        text-align: center;
    }
}

.slide-fade-enter, .slide-fade-leave-to {
  margin-top:-30px;
  opacity: 0;

}

.slide-fade-enter-active,.slide-fade-leave-active {
  transition: all .3s ease;
}

.slide-fade-enter-to,.slide-fade-leave {
  margin-top:0px;
  opacity:1;
}
</style>