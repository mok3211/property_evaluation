<template>
  <div class="methods-selection">
    <span>估价方法选择: </span>
    <el-radio-group v-model="selectedMethod">
      <el-radio value="市场法" size="large" border>市场法</el-radio>
      <el-radio value="成本法" size="large" border>成本法</el-radio>
      <el-radio value="收益法" size="large" border>收益法</el-radio>
    </el-radio-group>
    <div class="mb-4 btn-confirm">
      <el-button type="primary" @click="saveMethodChoice">保存</el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useReportDataStore } from '../store/store'
import { ElMessage } from 'element-plus'
const useStore = useReportDataStore()
const storeData = useStore.getReportData
const selectedMethod = ref('市场法')
selectedMethod.value = useStore.getReportData.selectedMethod
function saveMethodChoice() {
  storeData.selectedMethod = selectedMethod.value
  useStore.updateReportData(storeData)
  ElMessage({
    message: '保存数据成功',
    type: 'success',
    plain: true
  })
}
</script>
<style lang="scss" scoped>
.methods-selection {
  font-size: 20px;
  .btn-confirm {
    margin-top: 50px;
  }
}
</style>
