<script setup lang="ts">
//import Versions from './components/Versions.vue'

//const ipcHandle = () => window.electron.ipcRenderer.send('ping')
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header"><div class="header-text">房地产评估报告生成器 V1.0</div></el-header>
      <el-main class="main">
        <router-link to="/"></router-link>
        <router-view></router-view>
      </el-main>
      <!-- <el-footer><Versions></Versions></el-footer> -->
    </el-container>
  </div>
</template>
<style lang="scss" scoped>
.common-layout {
  text-align: center;
  width: 100%;
  .header {
    background-color: #409EFF;
    border-radius: 5px;
    font-weight: 200;
    .header-text {
      padding-top: 10px;
      align-items: center;
    }
    color: rgb(0, 0, 0);
    font-size: 20px;
  }
  .el-main{
    padding: 10px !important;
  }
  .main {
    width: 100%;
    height: 790px;
    .color {
      height: 100%;
    }
  }
}
</style>
