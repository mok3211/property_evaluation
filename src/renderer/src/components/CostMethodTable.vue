<template>
  <div class="market-method">
    <div>成本法</div>
    <el-form :mode="costMethodFormData">
      <el-form-item label="项目名称:" prop="projectName">
        <el-col :span="8"><el-input v-model="costMethodFormData.projectName"></el-input></el-col>
      </el-form-item>
      <el-row :gutter="20">
        <el-col :span="8"
          ><el-form-item label="建成年代:" prop="buildYear">
            <el-date-picker
              v-model="costMethodFormData.buildYear"
              type="year"
              placeholder="选择年份"
            /> </el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="耐用年限:" prop="serviceLife">
            <el-input v-model="costMethodFormData.serviceLife" /></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="理论成新率:" prop="remainUsefulLife">
            <el-input v-model="costMethodFormData.remainUsefulLife" /></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="勘查成新率:" prop="inspectionRemainUsefulLife">
            <el-input v-model="costMethodFormData.inspectionRemainUsefulLife" /></el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="结构:" prop="structInfo">
            <el-input v-model="costMethodFormData.structInfo" /> </el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="面积:" prop="areaInfo">
            <el-input v-model="costMethodFormData.areaInfo" /></el-form-item
        ></el-col>
        <el-col :span="6"
          ><el-form-item label="建安费+装修:" prop="interiorFinishCost">
            <el-input v-model="costMethodFormData.interiorFinishCost" /></el-form-item
        ></el-col>
        <el-col :span="7"
          ><el-form-item label="勘察设计及前期费用:" prop="designCost">
            <el-input v-model="costMethodFormData.designCost" /></el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="市政配套费:" prop="urbanInfrastructureCost">
            <el-input v-model="costMethodFormData.urbanInfrastructureCost" /> </el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="利息:" prop="interest">
            <el-input v-model="costMethodFormData.interest" /></el-form-item
        ></el-col>
        <el-col :span="6"
          ><el-form-item label="税费:" prop="taxesAndFees">
            <el-input v-model="costMethodFormData.taxesAndFees" /></el-form-item
        ></el-col>
        <el-col :span="7"
          ><el-form-item label="利润:" prop="profit">
            <el-input v-model="costMethodFormData.profit" /></el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="重置单价:" prop="replacementCost">
            <el-input v-model="costMethodFormData.replacementCost" /> </el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="综合成新率:" prop="overallRate">
            <el-input v-model="costMethodFormData.overallRate" /></el-form-item
        ></el-col>
        <el-col :span="6"
          ><el-form-item label="单价:" prop="unitPrice">
            <el-input v-model="costMethodFormData.unitPrice" /></el-form-item
        ></el-col>
        <el-col :span="7"
          ><el-form-item label="取整:" prop="roundingPrice">
            <el-input v-model="costMethodFormData.roundingPrice" /></el-form-item
        ></el-col>
      </el-row>
      <el-row>
        <el-form-item label="总价:"
          ><el-input v-model="costMethodFormData.totalPrice"></el-input
        ></el-form-item>
      </el-row>
    </el-form>
    <el-button type="primary" @clice="saveCostMethodData">保存</el-button>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { useReportDataStore } from '../store/store'
const useStore = useReportDataStore()
const storeData = useStore.getReportData
const costMethodFormData = reactive({
  projectName: '',
  buildIn: '',
  buildYear: '',
  serviceLife: '',
  remainUsefulLife: '',
  inspectionRemainUsefulLife: '',
  structInfo: '混合结构',
  areaInfo: '',
  interiorFinishCost: '',
  designCost: '',
  urbanInfrastructureCost: '',
  interest: '',
  taxesAndFees: '',
  profit: '',
  replacementCost: '',
  overallRate: '',
  unitPrice: '',
  roundingPrice: '',
  totalPrice: ''
})

function saveCostMethodData() {
  storeData.costMethodData = JSON.parse(JSON.stringify(costMethodFormData))
  useStore.updateReportData(storeData)
  ElMessage({
    message: '保存数据成功',
    type: 'success',
    plain: true
  })
}
</script>
<style lang="scss" scoped></style>
