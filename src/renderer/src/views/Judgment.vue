<template>
  <div class="judgment-main">
    <el-row :gutter="20">
      <el-col>所选择的方法： {{ judgmentData.method }}</el-col>
    </el-row>
    <div v-if="judgmentData.method == '市场法'">
      <el-row :gutter="20">
        <el-col :span="8">
          <el-card>
            <template #header>
              <div class="card-header">
                <span>案例一</span>
              </div>
            </template>
            <p>单价:{{ judgmentData.marketExample1.price }}</p>
            <p>权重:{{ judgmentData.marketExample1.weight }}</p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card>
            <template #header>
              <div class="card-header">
                <span>案例二</span>
              </div>
            </template>
            <p>单价:{{ judgmentData.marketExample2.price }}</p>
            <p>权重:{{ judgmentData.marketExample2.weight }}</p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card>
            <template #header>
              <div class="card-header">
                <span>案例三</span>
              </div>
            </template>
            <p>单价:{{ judgmentData.marketExample3.price }}</p>
            <p>权重:{{ judgmentData.marketExample3.weight }}</p>
          </el-card>
        </el-col>
      </el-row>
      <el-col>评估价格: {{ evaluationPrice }}</el-col>
    </div>
    <div v-if="judgmentData.method == '成本法'">
      <el-col>成本法：{{ judgmentData.costMethodPrice }} </el-col>
    </div>
    <div v-if="judgmentData.method == '收益法'">
      <el-col>收益法：{{ judgmentData.incomeMethodPrice }} </el-col>
    </div>
    <el-divider></el-divider>
    <el-row :gutter="20"
      ><el-col :span="5"><el-input placeholder="最终确认价格"></el-input></el-col>
      <el-col :span="8">市场背景描述及分析:</el-col>
      <el-col :span="3"
        ><el-input v-model="judgmentData.city" placeholder="估价对象"></el-input> </el-col
    ></el-row>

    <div class="button-confirm">
      <el-button type="primary" @click="confirmData">确认数据</el-button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import { useReportDataStore } from '../store/store'
const useStore = useReportDataStore()
const storeData = useStore.getReportData
const judgmentData = computed(() => {
  const methodExampleData = storeData.marketMethodData
  let example1 = { price: '', weight: '' }
  let example2 = { price: '', weight: '' }
  let example3 = { price: '', weight: '' }
  for (const exampleData of methodExampleData) {
    if (exampleData.name == '1') {
      example1 = {
        price: exampleData.data.adjustedPropertyPrice,
        weight: exampleData.data.modifiedCoefficient
      }
    } else if (exampleData.name == '2') {
      example2 = {
        price: exampleData.data.adjustedPropertyPrice,
        weight: exampleData.data.modifiedCoefficient
      }
    } else if (exampleData.name == '3') {
      example3 = {
        price: exampleData.data.adjustedPropertyPrice,
        weight: exampleData.data.modifiedCoefficient
      }
    }
  }
  return {
    method: storeData.selectedMethod,
    marketExample1: example1,
    marketExample2: example2,
    marketExample3: example3,
    city: '运城',
    costMethodPrice: storeData.costMethodData.totalPrice,
    incomeMethodPrice: storeData.inComeMethodData.buildingTotalPrice
  }
})
console.log('now select method is' + storeData.selectedMethod)
const evaluationPrice = computed(() => {
  return (
    Number(judgmentData.value.marketExample1.price) *
      Number(judgmentData.value.marketExample1.weight) +
    Number(judgmentData.value.marketExample2.price) *
      Number(judgmentData.value.marketExample2.weight) +
    Number(judgmentData.value.marketExample3.price) *
      Number(judgmentData.value.marketExample3.weight)
  )
})

function confirmData() {
  storeData.judgementData = JSON.parse(JSON.stringify(judgmentData))
  useStore.updateReportData(judgmentData)
}
</script>
<style lang="scss" scoped>
.judgment-main {
  font-size: 20px;
}
.button-confirm {
  margin-top: 50px;
}
</style>
