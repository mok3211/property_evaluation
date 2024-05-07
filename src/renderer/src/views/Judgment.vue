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
            <p>单价:</p>
            <p>权重:</p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card>
            <template #header>
              <div class="card-header">
                <span>案例二</span>
              </div>
            </template>
            <p>单价:</p>
            <p>权重:</p>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card>
            <template #header>
              <div class="card-header">
                <span>案例三</span>
              </div>
            </template>
            <p>单价:</p>
            <p>权重:</p>
          </el-card>
        </el-col>
      </el-row>
      <el-col>评估价格: </el-col>
    </div>
    <el-col>成本法： </el-col>
    <el-col>收益法： </el-col>
    <el-row>最终确认价格：<el-input placeholder="最终确认价格"></el-input></el-row>
    <el-row>市场背景描述以及分析：<el-input placeholder="估价对象"></el-input></el-row>
    <el-button type="primary">确认数据</el-button>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'

const judgmentData = reactive({
  method: '市场法'
})
</script>
<style lang="scss" scoped></style>
