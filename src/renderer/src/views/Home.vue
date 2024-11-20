<template>
  <div class="color">
    <div v-if="isLogin">
      <AnchorBar/>
    </div>
    <div v-else>
      欢迎使用本系统！
    </div>
  </div>
</template>
<script setup lang="ts">
import AnchorBar from '../components/anchorBar.vue'
const isLogin = true;
</script>

<style lang="scss">
.color {
  height: 100%;
  padding: 20px;
  border-radius: 5px;
  background-color: antiquewhite;
}
</style>
