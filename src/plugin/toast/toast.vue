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
<style scoped>
.dialog-tips{
    min-width: 380px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid #e1f3d8;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    background-color: #f0f9eb;
    overflow: hidden;
    padding: 15px 15px 15px 20px;
    display: flex;
    align-items: center;
    color: #67c23a;
}
.error{
      color: red;
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