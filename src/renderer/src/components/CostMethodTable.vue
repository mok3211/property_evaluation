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
          ><el-form-item label="耐用年限:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" /></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="理论成新率:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" /></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="勘查成新率:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" /></el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="结构:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" /> </el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="面积:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" /></el-form-item
        ></el-col>
        <el-col :span="6"
          ><el-form-item label="建安费+装修:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" /></el-form-item
        ></el-col>
        <el-col :span="7"
          ><el-form-item label="勘察设计及前期费用:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" /></el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="市政配套费:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" /> </el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="利息:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" /></el-form-item
        ></el-col>
        <el-col :span="6"
          ><el-form-item label="税费:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" /></el-form-item
        ></el-col>
        <el-col :span="7"
          ><el-form-item label="利润:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" /></el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="重置单价:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" /> </el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="综合成新率:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" /></el-form-item
        ></el-col>
        <el-col :span="6"
          ><el-form-item label="单价:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" /></el-form-item
        ></el-col>
        <el-col :span="7"
          ><el-form-item label="取整:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" /></el-form-item
        ></el-col>
      </el-row>
      <el-row>
        <el-form-item label="总价:"><el-input></el-input></el-form-item>
      </el-row>
    </el-form>
    <el-button type="primary">保存</el-button>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'
const costMethodFormData = reactive({
  projectName: '',
  buildIn: '',
  buildYear: ''
})
</script>
<style lang="scss" scoped></style>
