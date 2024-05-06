<template>
  <div class="methods-selection">
    <span>估价方法选择: </span>
    <el-radio-group v-model="selectedMethod">
      <el-radio value="1" size="large" border>市场法</el-radio>
      <el-radio value="2" size="large" border>成本法</el-radio>
      <el-radio value="3" size="large" border>收益法</el-radio>
    </el-radio-group>
    <div class="mb-4">
      <el-button type="primary">下一步</el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const selectedMethod = ref('1')
</script>
<style lang="scss" scoped>
</style>