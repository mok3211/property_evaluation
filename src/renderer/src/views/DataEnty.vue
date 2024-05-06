<template>
  <div class="data-enty container">
    <div class="gap-4 mb-4">
      <span>估价报号编号：</span>
      <el-input v-model="input1" style="width: 240px" placeholder="Pick a date" />
    </div>
    <div class="gap-4 mb-4">
      <span>估价项目名称：</span>
      <el-input v-model="input1" style="width: 240px" placeholder="Pick a date" />
    </div>
    <div class="gap-4 mb-4">
      <span>估价委托人：</span>
      <el-input v-model="input1" style="width: 240px" placeholder="Pick a date" />
    </div>
    <div class="gap-4 mb-4">
      <span>注册房地产估价师：</span>
      <el-input v-model="input1" style="width: 240px" placeholder="Pick a date" />
    </div>
    <div class="gap-4 mb-4">
      <span>价值时间：</span>
      <el-input v-model="input1" style="width: 240px" placeholder="Pick a date" />
    </div>
    <div class="gap-4 mb-4">
      <span>估价目的：</span>
      <el-input v-model="input1" style="width: 240px" placeholder="Pick a date" />
    </div>
    <div class="gap-4 mb-4">
      <span>估价报告出具日期：</span>
      <el-input v-model="input1" style="width: 240px" placeholder="Pick a date" />
    </div>
    <div class="mb-4">
      <el-button type="primary">暂存</el-button>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const input1 = ref('')
</script>
<style lang="scss" scoped>
.data-enty {
    text-align: left
}
</style>