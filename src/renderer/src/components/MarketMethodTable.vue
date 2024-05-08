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
          <el-form-item label="交易情况:" prop="caseName">
            <el-row :gutter="20">
              <el-col :span="10"
                ><el-input v-model="item.data.transactionPrice" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input v-model="item.data.transactionPrice" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="市场情况:" prop="caseName">
            <el-row :gutter="20">
              <el-col :span="10"
                ><el-input v-model="item.data.transactionPrice" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input v-model="item.data.transactionPrice" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-divider content-position="center">区位状况</el-divider>
          <el-form-item label="位置:" prop="caseName">
            <el-row :gutter="20">
              <el-col :span="10" :offset="2"
                ><el-input v-model="item.data.transactionPrice" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input v-model="item.data.transactionPrice" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="楼层:" prop="caseName">
            <el-row :gutter="20">
              <el-col :span="10" :offset="2"
                ><el-input v-model="item.data.transactionPrice" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input v-model="item.data.transactionPrice" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="朝向:" prop="caseName">
            <el-row :gutter="20">
              <el-col :span="10" :offset="2"
                ><el-input v-model="item.data.transactionPrice" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input v-model="item.data.transactionPrice" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="交通状况:" prop="caseName">
            <el-row :gutter="20">
              <el-col :span="10"
                ><el-input v-model="item.data.transactionPrice" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input v-model="item.data.transactionPrice" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="外部配套:" prop="caseName">
            <el-row :gutter="20">
              <el-col :span="10"
                ><el-input v-model="item.data.transactionPrice" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input v-model="item.data.transactionPrice" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="环境条件:" prop="caseName">
            <el-row :gutter="20">
              <el-col :span="10"
                ><el-input v-model="item.data.transactionPrice" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input v-model="item.data.transactionPrice" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-divider content-position="center">实物状况</el-divider>
          <el-form-item label="外观:" prop="caseName">
            <el-row :gutter="20">
              <el-col :span="10" :offset="2"
                ><el-input v-model="item.data.transactionPrice" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input v-model="item.data.transactionPrice" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="建筑面积:" prop="caseName">
            <el-row :gutter="20">
              <el-col :span="10"
                ><el-input v-model="item.data.transactionPrice" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input v-model="item.data.transactionPrice" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="建筑结构:" prop="caseName">
            <el-row :gutter="20">
              <el-col :span="10"
                ><el-input v-model="item.data.transactionPrice" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input v-model="item.data.transactionPrice" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="设备设施:" prop="caseName">
            <el-row :gutter="20">
              <el-col :span="10"
                ><el-input v-model="item.data.transactionPrice" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input v-model="item.data.transactionPrice" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="装饰装修:" prop="caseName">
            <el-row :gutter="20">
              <el-col :span="10"
                ><el-input v-model="item.data.transactionPrice" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input v-model="item.data.transactionPrice" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="空间布局:" prop="caseName">
            <el-row :gutter="20">
              <el-col :span="10"
                ><el-input v-model="item.data.transactionPrice" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input v-model="item.data.transactionPrice" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="建筑功能:" prop="caseName">
            <el-row :gutter="20">
              <el-col :span="10"
                ><el-input v-model="item.data.transactionPrice" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input v-model="item.data.transactionPrice" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="新旧程度:" prop="caseName">
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
          <el-form-item label="用途:" prop="caseName">
            <el-row :gutter="20">
              <el-col :span="10" :offset="2"
                ><el-input v-model="item.data.transactionPrice" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input v-model="item.data.transactionPrice" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="房产类型:" prop="caseName">
            <el-row :gutter="20">
              <el-col :span="10"
                ><el-input v-model="item.data.transactionPrice" placeholder="信息"></el-input
              ></el-col>
              <el-col :span="10"
                ><el-input v-model="item.data.transactionPrice" placeholder="因素"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-divider content-position="center">修正参数</el-divider>
          <el-form-item label="修正系数:" prop="caseName">
            <el-row :gutter="20">
              <el-col :span="20"
                ><el-input v-model="item.data.transactionPrice" placeholder="信息"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
          <el-form-item label="修正后的房地产价格:" prop="caseName">
            <el-row :gutter="20">
              <el-col :span="20"
                ><el-input v-model="item.data.transactionPrice" placeholder="信息"></el-input
              ></el-col>
            </el-row>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
    <el-button type="primary">保存所有数据</el-button>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { TabPaneName } from 'element-plus'

let tabIndex = 3
const editableTabsValue = ref('1')

const formData = reactive({
  caseName: '',
  transactionPrice: '',
  transactionCondition: '正常',
  marketCondition: '100',
  location: '100',
  trafficCondition: '较优',
  externalSupport: '较齐全',
  regionalCondition: '100',
  facilities: '100',
  environmentCondition: '较好',
  floor: '100',
  orientation: '南北',
  buildingArea: '100',
  buildingStructure: '100',
  equipment: '较齐全',
  decoration: '100',
  spaceLayout: '较好',
  buildingFunction: '住宅',
  appearance: '较好',
  newOldDegree: '100',
  purpose: '住宅',
  propertyType: '商品房'
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
