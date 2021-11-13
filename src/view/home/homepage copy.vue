
<template>
  <div :class="['pcmain', this.screenWidth >= 600 ? '' : 'main']">
      
  </div>
</template>
      
       
<script>
export default {
  data() {
    return {
      screenWidth: this.GLOBAL.clientWidth,
    };
  },
  mounted() {
    this.setDialogWidth();
  },
  methods: {
    setDialogWidth() {},
  },
};
</script>
<style scoped  lang="less" >
</style>