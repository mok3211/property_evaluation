<template>
  <div class="market-method">
    <div>市场法</div>
    <el-tabs
      v-model="editableTabsValue"
      type="card"
      editable
      class="demo-tabs"
      @edit="handleTabsEdit"
    >
      <el-tab-pane
        v-for="item in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
      >
        <el-form :mode="item.data">
          <el-form-item label="案例名称:" prop="caseName">
            <el-col :span="16"><el-input v-model="item.data.caseName"></el-input></el-col>
          </el-form-item>
          <el-form-item label="交易价格:" prop="transactionPrice">
            <el-col :span="16"><el-input v-model="item.data.transactionPrice"></el-input></el-col>
          </el-form-item>
          <el-form-item label="交易情况:">
            <el-row :gutter="20">
              <el-col :span="10"
                ><el-input
                  v-model="item.data.transactionConditionInfo"
                  placeholder="信息"
                ></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input
                  v-model="item.data.transactionConditionRefactor"
                  placeholder="因素"
                ></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="市场情况:">
            <el-row :gutter="20">
              <el-col :span="10"
                ><el-input v-model="item.data.marketConditionInfo" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input v-model="item.data.marketConditionRefactor" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-divider content-position="center">区位状况</el-divider>
          <el-form-item label="位置:">
            <el-row :gutter="20">
              <el-col :span="10" :offset="2"
                ><el-input v-model="item.data.locationInfo" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input v-model="item.data.locationRefactor" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="楼层:">
            <el-row :gutter="20">
              <el-col :span="10" :offset="2"
                ><el-input v-model="item.data.floorInfo" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input v-model="item.data.floorRefactor" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="朝向:">
            <el-row :gutter="20">
              <el-col :span="10" :offset="2"
                ><el-input v-model="item.data.directionInfo" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input v-model="item.data.directionRefactor" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="交通状况:">
            <el-row :gutter="20">
              <el-col :span="10"
                ><el-input v-model="item.data.trafficConditionInfo" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input v-model="item.data.externalSupportRefactor" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="外部配套:">
            <el-row :gutter="20">
              <el-col :span="10"
                ><el-input v-model="item.data.externalSupportInfo" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input v-model="item.data.externalSupportRefactor" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="环境条件:">
            <el-row :gutter="20">
              <el-col :span="10"
                ><el-input
                  v-model="item.data.environmentConditionInfo"
                  placeholder="信息"
                ></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input
                  v-model="item.data.environmentConditionRefactor"
                  placeholder="因素"
                ></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-divider content-position="center">实物状况</el-divider>
          <el-form-item label="外观:">
            <el-row :gutter="20">
              <el-col :span="10" :offset="2"
                ><el-input v-model="item.data.appearanceInfo" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input v-model="item.data.appearanceRefactor" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="建筑面积:">
            <el-row :gutter="20">
              <el-col :span="10"
                ><el-input v-model="item.data.floorAreaInfo" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input v-model="item.data.floorAreaRefactor" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="建筑结构:">
            <el-row :gutter="20">
              <el-col :span="10"
                ><el-input v-model="item.data.floorStructInfo" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input v-model="item.data.floorStructRefactor" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="设备设施:">
            <el-row :gutter="20">
              <el-col :span="10"
                ><el-input v-model="item.data.equipmentInfo" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input v-model="item.data.equipmentRefactor" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="装饰装修:">
            <el-row :gutter="20">
              <el-col :span="10"
                ><el-input v-model="item.data.fittingOutInfo" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input v-model="item.data.fittingOutRefactor" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="空间布局:">
            <el-row :gutter="20">
              <el-col :span="10"
                ><el-input v-model="item.data.layoutInfo" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input v-model="item.data.layoutRefactor" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="建筑功能:">
            <el-row :gutter="20">
              <el-col :span="10"
                ><el-input v-model="item.data.buildingFunctionInfo" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input
                  v-model="item.data.buildingFunctionRefactor"
                  placeholder="因素"
                ></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="新旧程度:">
            <el-row :gutter="20">
              <el-col :span="10"
                ><el-input v-model="item.data.transactionPrice" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input v-model="item.data.transactionPrice" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-divider content-position="center">权益状况</el-divider>
          <el-form-item label="用途:">
            <el-row :gutter="20">
              <el-col :span="10" :offset="2"
                ><el-input v-model="item.data.purposeInfo" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input v-model="item.data.purposeRefactor" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="房产类型:">
            <el-row :gutter="20">
              <el-col :span="10"
                ><el-input v-model="item.data.buildingTypeInfo" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input v-model="item.data.buildingTypeRefactor" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-divider content-position="center">修正参数</el-divider>
          <el-form-item label="修正系数:">
            <el-row :gutter="20">
              <el-col :span="20"
                ><el-input v-model="item.data.modifiedCoefficient" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="修正后的房地产价格:" prop="caseName">
            <el-row :gutter="20">
              <el-col :span="20"
                ><el-input v-model="item.data.adjustedPropertyPrice" placeholder="价格"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
    <el-button type="primary" @click="saveAllData">保存所有数据</el-button>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { TabPaneName } from 'element-plus'
import { ElMessage } from 'element-plus'
import { useReportDataStore } from '../store/store'
const useStore = useReportDataStore()
const storeData = useStore.getReportData

let tabIndex = 3
const editableTabsValue = ref('1')

const formData = reactive({
  caseName: '',
  transactionPrice: '',
  transactionConditionInfo: '正常',
  transactionConditionRefactor: '100',
  marketConditionInfo: '',
  marketConditionRefactor: '100',
  locationInfo: '',
  locationRefactor: '100',
  floorInfo: '',
  floorRefactor: '100',
  directionInfo: '',
  directionRefactor: '100',
  trafficConditionInfo: '较优',
  trafficConditionRefactor: '100',
  trafficCondition: '较优',
  externalSupportRefactor: '100',
  externalSupportInfo: '较齐全',
  environmentConditionInfo: '较好',
  environmentConditionRefactor: '100',
  appearanceInfo: '较好',
  appearanceRefactor: '100',
  floorAreaInfo: '',
  floorAreaRefactor: '100',
  floorStructInfo: '',
  floorStructRefactor: '100',
  equipmentInfo: '较齐全',
  equipmentRefactor: '100',
  fittingOutInfo: '',
  fittingOutRefactor: '100',
  layoutInfo: '较好',
  layoutRefactor: '100',
  buildingFunctionInfo: '住宅',
  buildingFunctionRefactor: '100',
  ageInfo: '',
  ageRefactor: '100',
  purposeInfo: '住宅',
  purposeRefactor: '100',
  buildingTypeInfo: '住宅',
  buildingTypeRefactor: '100',
  modifiedCoefficient: '',
  adjustedPropertyPrice: ''
})

let editableTabs = reactive([
  {
    title: '案例1',
    name: '1',
    data: reactive({
      ...formData
    })
  },
  {
    title: '案例2',
    name: '2',
    data: reactive({
      ...formData
    })
  },
  {
    title: '案例3',
    name: '3',
    data: reactive({
      ...formData
    })
  }
])
const handleTabsEdit = (targetName: TabPaneName | undefined, action: 'remove' | 'add') => {
  if (action === 'add') {
    const newTabName = `${++tabIndex}`
    editableTabs.push({
      title: '案例' + tabIndex,
      name: newTabName,
      data: formData
    })
    editableTabsValue.value = newTabName
  } else if (action === 'remove') {
    const tabs = editableTabs
    let activeName = editableTabsValue.value
    if (activeName === targetName) {
      tabs.forEach((tab, index) => {
        if (tab.name === targetName) {
          const nextTab = tabs[index + 1] || tabs[index - 1]
          if (nextTab) {
            activeName = nextTab.name
          }
        }
      })
    }
    editableTabsValue.value = activeName
    editableTabs = tabs.filter((tab) => tab.name !== targetName)
  }
}

function saveAllData() {
  storeData.marketMethodData = JSON.parse(JSON.stringify(editableTabs))
  useStore.updateReportData(storeData)
  ElMessage({
    message: '保存数据成功',
    type: 'success',
    plain: true
  })
}
</script>
<style lang="scss" scoped>
.market-method {
  .demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }
  height: 700px;
  overflow: auto;
}
</style>
