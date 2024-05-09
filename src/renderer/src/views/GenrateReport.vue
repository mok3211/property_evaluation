<template>
  <el-button type="primary" @click="generateReport">开始生成报告</el-button>
</template>
<script setup lang="ts">
import { genratorDoc } from '../api/httpRequest'
import { useReportDataStore } from '../store/store'
import { ElMessage } from 'element-plus'
const useStore = useReportDataStore()
const allData = useStore.getReportData
function generateReport() {
  genratorDoc(allData).then((res) => {
    console.log(res)
    ElMessage.success('生成成功')
  })
}
</script>
