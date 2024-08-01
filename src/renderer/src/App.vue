<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header"><div class="header-text">房地产评估报告生成器 V1.0</div></el-header>
      <el-main class="main">
        <router-link :to='url'></router-link>
        <router-view></router-view>
      </el-main>
      <el-footer><Versions/></el-footer>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import {ref} from 'vue';
import { useRouter } from 'vue-router';
import Versions from './components/Versions.vue'
//在这里需要去判断是否有登录
let url = ref("/Login")
const router = useRouter()
router.push("/Login")
</script>
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
    padding: 5px !important;
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
