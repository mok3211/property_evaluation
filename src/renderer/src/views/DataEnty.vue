<template>
  <div class="data-enty container">
  <!-- 估价报号编号 -->
    <div class="rowEl">
      <div class="row-left">
        <span>估价报号编号：</span>   
      </div>
      <div class="row-right">
       <el-input v-model="dataEnty.reportNumber" style="width: 100%" />
      </div>
    </div>
  <!-- 估价项目名称 -->
   <div class="rowEl">
      <div class="row-left">
        <span>估价项目名称：</span>   
      </div>
      <div class="row-right">
       <el-input v-model="dataEnty.reportProjectName" style="width: 100%" />
      </div>
    </div>

  <!-- 估价委托人 -->
   <div class="rowEl">
      <div class="row-left">
        <span>估价委托人：</span>   
      </div>
      <div class="row-right">
       <el-input v-model="dataEnty.appraisalClient" style="width: 100%" />
      </div>
    </div>
   
   <!-- 注册房地产估价师 -->
   <div class="rowEl">
      <div class="row-left">
        <span>注册房地产估价师：</span>   
      </div>
      <div class="row-right">
       <el-input v-model="dataEnty.registeredAppraisers" style="width: 100%" />
      </div>
    </div>
   
    <!-- 估价时间： -->
   <div class="rowEl">
      <div class="row-left">
        <span>估价时间：</span>   
      </div>
      <div class="row-right">
       <el-input v-model="dataEnty.valueTime" style="width: 100%" />
      </div>
    </div>
  
   <!-- 估价目的 -->
   <div class="rowEl">
      <div class="row-left">
        <span>估价目的：</span>   
      </div>
      <div class="row-right">
       <el-input v-model="dataEnty.purposeOfValuation" style="width: 100%" />
      </div>
    </div>
    <!-- 估价报告出具日期 -->
   <div class="rowEl">
      <div class="row-left">
        <span>估价报告出具日期：</span>   
      </div>
      <div class="row-right">
       <el-input v-model="dataEnty.reportDate" style="width: 100%" />
      </div>
    </div>
  </div>
  <div class="btn-confirm">
    <el-button type="primary" @click="storeDataEnty">保存</el-button>
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
  .btn-confirm {
    margin-top: 50px;
  }
  .rowEl {
    width: 500px;
    line-height:46px;
     display:flex;
     .row-left{
      width:200px;
      text-align:right;
     }
     .row-right{
      width:300px;
     }
  }
  
}

</style>
