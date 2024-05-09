<template>
  <div class="income-method">
    <div>收益法</div>
    <el-form :mode="incomeMethodFormData">
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="租金收入:" prop="rentIncome">
            <el-input
              v-mode="incomeMethodFormData.rentIncome"
              placeholder="元/平方米/天"
            ></el-input> </el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="年租金收入:" prop="yearRentIncome">
            <el-input
              v-model="incomeMethodFormData.yearRentIncome"
              placeholder="元/平方米/年" /></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="收益面积:" prop="revenueArea">
            <el-input
              v-model="incomeMethodFormData.revenueArea"
              placeholder="平方米" /></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="空置率:" prop="vacancyRate">
            <el-input v-model="incomeMethodFormData.vacancyRate" placeholder="%" /></el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="年总收益:" prop="yearTotalIncome">
            <el-input
              v-model="incomeMethodFormData.yearTotalIncome"
              placeholder="元"
            /> </el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="年维修费:" prop="yearRepairFee">
            <el-input v-model="incomeMethodFormData.yearRepairFee" placeholder="元" /></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="年管理费:" prop="yearManageFee">
            <el-input v-model="incomeMethodFormData.yearManageFee" placholder="元" /></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="房产税费:" prop="yearTaxFee">
            <el-input v-model="incomeMethodFormData.yearTaxFee" placeholder="元" /></el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="增值税及附加:" prop="additionalTax">
            <el-input v-model="incomeMethodFormData.additionalTax" placeholder="元" /></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="年总费用:" prop="yearTotalCost">
            <el-input v-model="incomeMethodFormData.yearTotalCost" placeholder="元" /></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="年净收益:" prop="yearNetIncome">
            <el-input v-model="incomeMethodFormData.yearNetIncome" placeholder="元" /></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="风险利率:" prop="riskRate">
            <el-input
              v-model="incomeMethodFormData.riskRate"
              placeholder="通货膨胀和风险" /></el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="还原利率:" prop="reductionRate">
            <el-input v-model="incomeMethodFormData.reductionRate" placeholder="%" /> </el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="年净收益递增率:" prop="yearIncreaseRate">
            <el-input
              v-model="incomeMethodFormData.yearIncreaseRate"
              placeholder="%" /></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="经济耐用年限:" prop="economicDurability">
            <el-input
              v-model="incomeMethodFormData.economicDurability"
              placeholder="年" /></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="已使用年数:" prop="alreadyUsedYears">
            <el-input
              v-model="incomeMethodFormData.alreadyUsedYears"
              placeholder="年" /></el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="剩余经济耐用年限:" prop="leftEconomicLife">
            <el-input
              v-model="incomeMethodFormData.leftEconomicLife"
              placeholder=""
            /> </el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="土地使用期限至:" prop="landUsePeriod">
            <el-input v-model="incomeMethodFormData.landUsePeriod" placeholder="" /></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="土地剩余使用年限:" prop="landLeftUsePeriod">
            <el-input
              v-model="incomeMethodFormData.landLeftUsePeriod"
              placeholder="年" /></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="收益年限:" prop="icomePeriod">
            <el-input v-model="incomeMethodFormData.icomePeriod" placeholder="年" /></el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="房地产总价:" prop="buildingTotalPrice">
            <el-input
              v-model="incomeMethodFormData.buildingTotalPrice"
              placeholder="万元" /></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="房地产单价:" prop="propertyUnitPrice">
            <el-input
              v-model="incomeMethodFormData.propertyUnitPrice"
              placeholder="元/平方米" /></el-form-item
        ></el-col>
      </el-row>
    </el-form>
    <div class="btn-confirm">
      <el-button type="primary" @click="saveIncomeMethodData">保存</el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
import { ElMessage } from 'element-plus'
import { useReportDataStore } from '../store/store'
const useStore = useReportDataStore()
const storeData = useStore.getReportData
const incomeMethodFormData = reactive({
  projectName: '',
  buildIn: '',
  buildYear: '',
  rentIncome: '',
  propertyUnitPrice: '',
  yearRentIncome: '',
  revenueArea: '',
  vacancyRate: '',
  yearTotalIncome: '',
  yearRepairFee: '',
  yearManageFee: '',
  yearTaxFee: '',
  additionalTax: '',
  yearTotalCost: '',
  yearNetIncome: '',
  riskRate: '',
  reductionRate: '',
  yearIncreaseRate: '',
  economicDurability: '',
  alreadyUsedYears: '',
  leftEconomicLife: '',
  landUsePeriod: '',
  landLeftUsePeriod: '',
  icomePeriod: '',
  buildingTotalPrice: ''
})
function saveIncomeMethodData() {
  storeData.inComeMethodData = JSON.parse(JSON.stringify(incomeMethodFormData))
  useStore.updateReportData(storeData)
  ElMessage({
    message: '保存数据成功',
    type: 'success',
    plain: true
  })
}
</script>
<style lang="scss" scoped>
.btn-confirm {
  margin-top: 50px;
}
</style>
