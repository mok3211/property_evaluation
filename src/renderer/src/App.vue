<template>
  <div class="common-layout">
    <el-container>
      <el-header class="header">
        <el-row>
          <el-col :span="1">
            <div>
              <el-image style="width: 60px; height: 60px" :src="headerImageUrl" />
            </div>
          </el-col>
          <el-col :span="1" :offset="20">
            <div class="header-setting">
              <el-button type="primary" size="large" :icon="Setting" circle @click="setting" />
            </div>
          </el-col>
          <el-col :span="1">
            <div class="header-user">
              <el-avatar shape="square" :size="50" :icon="UserFilled" />
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside class="aside" width="300px">
          <div class="aside-main">
            <login></login>
          </div>
        </el-aside>
        <el-main class="main">
          <router-link :to="url"></router-link>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import icon from '@renderer/assets/icon.png'
import { UserFilled, Setting } from '@element-plus/icons-vue'
import Login from '@renderer/views/Login.vue'
//在这里需要去判断是否有登录
const url = ref('/')
const headerImageUrl = icon
const router = useRouter()
router.push(url.value)

function setting() {
  router.push('/setting')
}
</script>
<style lang="scss" scoped>
.common-layout {
  text-align: center;
  width: 100%;
  height: 100vh;
  .header {
    background-color: chocolate;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    height: 100%;
    .header-user {
      height: 100%;
      display: flex;
      align-items: center;
    }
    .header-setting {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .main {
    width: 100%;
    height: 90vh;
    overflow: hidden;
  }
  .aside {
    height: 90vh;
    overflow: hidden;
    padding-top: 20px;
    padding-bottom: 20px;
    .aside-main {
      border-radius: 10px;
      height: 100%;
      background: wheat;
    }
  }
}
</style>
