<script setup lang="ts">
import { ref } from 'vue'
import DataEntry from '../views/DataEnty.vue'
import MethodSelection from '../views/MethodsSelection.vue'
import Judgement from '../views/Judgment.vue'
import SettingsAndComputation from '../views/SettingsAndComputation.vue'
import SubjectInfomation from '../views/SubjectInfomation.vue'
import GenrateReport from '../views/GenrateReport.vue'
const tabPosition = ref('left')
</script>
<template class="anchor-bar">
  <el-tabs :tab-position="tabPosition" style="height: 100%" class="demo-tabs">
    <el-tab-pane label="评估项目信息录入"><DataEntry /></el-tab-pane>
    <el-tab-pane label="评估方法选择"><MethodSelection /></el-tab-pane>
    <el-tab-pane label="参数设定与运算"><SettingsAndComputation /></el-tab-pane>
    <el-tab-pane label="评估对象信息"><SubjectInfomation /></el-tab-pane>
    <el-tab-pane label="综合运算与判断"><Judgement /></el-tab-pane>
    <el-tab-pane label="生成报告"><GenrateReport /></el-tab-pane>
  </el-tabs>
</template>
<style lang="scss" scoped></style>
