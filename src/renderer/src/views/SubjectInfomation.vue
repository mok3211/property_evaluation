<template>
  <div class="subject">
    <el-form :mode="subjectInfoData">
      <el-divider content-position="center">位置状况</el-divider>
      <el-form-item label="坐落:" prop="caseName">
        <el-col :span="16"><el-input v-model="subjectInfoData.transactionPrice"></el-input></el-col>
      </el-form-item>
      <el-form-item label="方位:" prop="caseName">
        <el-col :span="16"><el-input v-model="subjectInfoData.transactionPrice"></el-input></el-col>
      </el-form-item>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="房屋朝向:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="临街状况:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="楼层:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
      </el-row>
      <el-divider content-position="center">交通状况</el-divider>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="道路:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="公共交通:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="停车便利度:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="人文环境:" prop="houseOrientation"
            ><el-input v-mode="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
      </el-row>
      <el-divider content-position="center">外部配套设施</el-divider>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="基础设施:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="公共服务设施:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="建筑物维修状况:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
      </el-row>
      <el-divider content-position="left">装饰装修,设备设施状况</el-divider>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="外墙:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="入户门:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="窗户:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
      </el-row>
      <el-divider content-position="center">室内客厅</el-divider>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="墙面:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="地板砖:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="顶棚:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-divider content-position="center">卧室</el-divider>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="墙面:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="地板砖:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="顶棚:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
      </el-row>
      <el-divider></el-divider>
      <el-col :span="5"
        ><el-form-item label="设备设施:" prop="houseOrientation"
          ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
      ></el-col>
      <el-divider content-position="left">估价对象权益状况描述--不动产权证</el-divider>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="权利人:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="共有情况:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="不动产证号:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="不动产单元号:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="权利类型:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="权利性质:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="用途:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="面积:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="使用期限:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="房屋结构:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="所在层数/总层数:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="建成年代:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8"
          ><el-form-item label="他项权利权利状况:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="8"
          ><el-form-item label="其他特殊情况:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="8"
          ><el-form-item label="权益状况分析:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
      </el-row>
      <el-divider content-position="left">估价对象权益状况描述--房屋所有权证</el-divider>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="房屋所有权人:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="共有情况:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="房屋所有权证号:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="规划用途:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="面积:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="房屋结构:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="登记时间:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="房屋性质:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="所在层数/总层数:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="建成年代:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8"
          ><el-form-item label="他项权利权利状况:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="8"
          ><el-form-item label="其他特殊情况:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="8"
          ><el-form-item label="权益状况分析:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
      </el-row>
      <el-button type="primary">保存</el-button>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue'

const subjectInfoData = reactive({
  caseName: '',
  houseOrientation: '',
  transactionPrice: '待估',
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
</script>
<style lang="scss" scoped>
.subject {
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
