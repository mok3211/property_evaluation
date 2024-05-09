<template>
  <div class="data-enty container">
    <div class="gap-4 mb-4">
      <span>估价报号编号：</span>
      <el-input v-model="dataEnty.reportNumber" style="width: 240px" />
    </div>
    <div class="gap-4 mb-4">
      <span>估价项目名称：</span>
      <el-input v-model="dataEnty.reportProjectName" style="width: 240px" />
    </div>
    <div class="gap-4 mb-4">
      <span>估价委托人：</span>
      <el-input v-model="dataEnty.appraisalClient" style="width: 240px" />
    </div>
    <div class="gap-4 mb-4">
      <span>注册房地产估价师：</span>
      <el-input v-model="dataEnty.registeredAppraisers" style="width: 240px" />
    </div>
    <div class="gap-4 mb-4">
      <span>估价时间：</span>
      <el-input v-model="dataEnty.valueTime" style="width: 240px" />
    </div>
    <div class="gap-4 mb-4">
      <span>估价目的：</span>
      <el-input v-model="dataEnty.purposeOfValuation" style="width: 240px" />
    </div>
    <div class="gap-4 mb-4">
      <span>估价报告出具日期：</span>
      <el-input v-model="dataEnty.reportDate" style="width: 240px" />
    </div>
  </div>
  <div class="mb-4; style='margin-top:20px'">
    <el-button type="primary" @click="storeDataEnty">暂存</el-button>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { useReportDataStore } from '../store/store'
import { ElMessage } from 'element-plus'
const useStore = useReportDataStore()
let dataEnty = reactive({
  reportNumber: '',
  reportProjectName: '',
  appraisalClient: '',
  registeredAppraisers: '',
  valueTime: '',
  purposeOfValuation: '',
  reportDate: ''
})
dataEnty = useStore.getReportData
function storeDataEnty() {
  useStore.updateReportData(dataEnty)
  ElMessage({
    message: '保存数据成功',
    type: 'success',
    plain: true
  })
}
</script>
<style lang="scss" scoped>
.data-enty {
  text-align: left;
  font-size: 20px;
}
</style>
