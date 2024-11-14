<template>
  <div class="common-layout">
    <el-container>
      <el-main class="main">
        <router-link :to="url"></router-link>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
//在这里需要去判断是否有登录
const url = ref('/login')
const router = useRouter()
router.push(url.value)
</script>
<style lang="scss" scoped>
.common-layout {
  text-align: center;
  width: 100%;
  height: 100%;
  .main {
    width: 100%;
    height: 100%;
  }
}
</style>
