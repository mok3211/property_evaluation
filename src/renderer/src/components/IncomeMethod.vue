<template>
  <div class="income-method">
    <div>收益法</div>
    <el-form :mode="costMethodFormData">
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="租金收入:" prop="buildYear">
            <el-input v-mode="costMethodFormData.rentIncome" placeholder="元/平方米/天"></el-input> </el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="年租金收入:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" placeholder="元/平方米/年" /></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="收益面积:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" placeholder="平方米" /></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="空置率:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" placeholder="%" /></el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="年总收益:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" placeholder="元" /> </el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="年维修费:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" placeholder="元" /></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="年管理费:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" placholder="元" /></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="房产税费:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" placeholder="元" /></el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="增值税及附加:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" placeholder="元" /> </el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="年总费用:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" placeholder="元" /></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="年净收益:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" placeholder="元" /></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="风险利率:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" placeholder="通货膨胀和风险" /></el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="还原利率:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" placeholder="%" /> </el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="年净收益递增率:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" placeholder="%" /></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="经济耐用年限:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" placeholder="年" /></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="已使用年数:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" placeholder="年" /></el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="剩余经济耐用年限:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" placeholder="" /> </el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="土地使用期限至:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" placeholder="" /></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="土地剩余使用年限:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" placeholder="年" /></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="收益年限:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" placeholder="年" /></el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="房地产总价:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" placeholder="万元" /></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="房地产单价:" prop="buildYear">
            <el-input v-model="costMethodFormData.buildYear" placeholder="元/平方米" /></el-form-item
        ></el-col>
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
  buildYear: '',
  rentIncome: ''
})
</script>
<style lang="scss" scoped></style>
