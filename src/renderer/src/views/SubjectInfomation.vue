<template>
  <div class="subject">
    <el-form :mode="subjectInfoData">
      <el-divider content-position="center">位置状况</el-divider>
      <el-form-item label="坐落:" prop="localtionDetailInfo">
        <el-col :span="12"
          ><el-input v-model="subjectInfoData.localtionDetailInfo"></el-input
        ></el-col>
      </el-form-item>
      <el-form-item label="方位:" prop="directionInfo">
        <el-col :span="12"><el-input v-model="subjectInfoData.directionInfo"></el-input></el-col>
      </el-form-item>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="房屋朝向:" prop="houseOrientation"
            ><el-input v-model="subjectInfoData.houseOrientation"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="临街状况:" prop="streetConditionInfo"
            ><el-input v-model="subjectInfoData.streetConditionInfo"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="楼层:" prop="floorConditionInfo"
            ><el-input v-model="subjectInfoData.floorConditionInfo"></el-input></el-form-item
        ></el-col>
      </el-row>
      <el-divider content-position="center">交通状况</el-divider>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="道路:" prop="streetInfo"
            ><el-input v-model="subjectInfoData.streetInfo"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="公共交通:" prop="transportInfo"
            ><el-input v-model="subjectInfoData.transportInfo"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="停车便利度:" prop="carParkingInfo"
            ><el-input v-model="subjectInfoData.carParkingInfo"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="人文环境:" prop="peopleInfo"
            ><el-input v-mode="subjectInfoData.peopleInfo"></el-input></el-form-item
        ></el-col>
      </el-row>
      <el-divider content-position="center">外部配套设施</el-divider>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="基础设施:" prop="infrastructureInfo"
            ><el-input v-model="subjectInfoData.infrastructureInfo"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="公共服务设施:" prop="publicServiceInfo"
            ><el-input v-model="subjectInfoData.publicServiceInfo"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="建筑物维修状况:" prop="buildingRepairInfo"
            ><el-input v-model="subjectInfoData.buildingRepairInfo"></el-input></el-form-item
        ></el-col>
      </el-row>
      <el-divider content-position="left">装饰装修,设备设施状况</el-divider>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="外墙:" prop="outerWallInfo"
            ><el-input v-model="subjectInfoData.outerWallInfo"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="入户门:" prop="doorInfo"
            ><el-input v-model="subjectInfoData.doorInfo"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="窗户:" prop="windowInfo"
            ><el-input v-model="subjectInfoData.windowInfo"></el-input></el-form-item
        ></el-col>
      </el-row>
      <el-divider content-position="center">室内客厅</el-divider>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="墙面:" prop="roomInWallInfo"
            ><el-input v-model="subjectInfoData.roomInWallInfo"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="地板砖:" prop="roomInFloorInfo"
            ><el-input v-model="subjectInfoData.roomInFloorInfo"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="顶棚:" prop="roomInTopInfo"
            ><el-input v-model="subjectInfoData.roomInTopInfo"></el-input></el-form-item
        ></el-col>
        <el-divider content-position="center">卧室</el-divider>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="墙面:" prop="bedRoomWallInfo"
            ><el-input v-model="subjectInfoData.roomInTopInfo"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="地板砖:" prop="bedRoomFloorInfo"
            ><el-input v-model="subjectInfoData.bedRoomFloorInfo"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="顶棚:" prop="bedRoomTopInfo"
            ><el-input v-model="subjectInfoData.bedRoomTopInfo"></el-input></el-form-item
        ></el-col>
      </el-row>
      <el-divider></el-divider>
      <el-col :span="5"
        ><el-form-item label="设备设施:" prop="bedRoomEquipment"
          ><el-input v-model="subjectInfoData.bedRoomEquipment"></el-input></el-form-item
      ></el-col>
      <el-divider content-position="left">估价对象权益状况描述--不动产权证</el-divider>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="权利人:" prop="rightsHolder"
            ><el-input v-model="subjectInfoData.rightsHolder"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="共有情况:" prop="ownershipInfo"
            ><el-input v-model="subjectInfoData.ownershipInfo"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="不动产证号:" prop="propertyNumber"
            ><el-input v-model="subjectInfoData.propertyNumber"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="不动产单元号:" prop="realUnitNumber"
            ><el-input v-model="subjectInfoData.realUnitNumber"></el-input></el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="权利类型:" prop="rightTypes"
            ><el-input v-model="subjectInfoData.rightTypes"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="权利性质:" prop="rightNature"
            ><el-input v-model="subjectInfoData.rightNature"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="用途:" prop="purpose"
            ><el-input v-model="subjectInfoData.purpose"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="面积:" prop="area"
            ><el-input v-model="subjectInfoData.area"></el-input></el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="使用期限:" prop="serviceLife"
            ><el-input v-model="subjectInfoData.serviceLife"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="房屋结构:" prop="houseStruct"
            ><el-input v-model="subjectInfoData.houseStruct"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="所在层数/总层数:" prop="atFloorInfo"
            ><el-input v-model="subjectInfoData.atFloorInfo"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="建成年代:" prop="buildingYear"
            ><el-input v-model="subjectInfoData.buildingYear"></el-input></el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8"
          ><el-form-item label="他项权利权利状况:" prop="statusOfAncillaryRights"
            ><el-input v-model="subjectInfoData.statusOfAncillaryRights"></el-input></el-form-item
        ></el-col>
        <el-col :span="8"
          ><el-form-item label="其他特殊情况:" prop="otherSpecialInfo"
            ><el-input v-model="subjectInfoData.otherSpecialInfo"></el-input></el-form-item
        ></el-col>
        <el-col :span="8"
          ><el-form-item label="权益状况分析:" prop="rightsAnalysis"
            ><el-input v-model="subjectInfoData.rightsAnalysis"></el-input></el-form-item
        ></el-col>
      </el-row>
      <el-divider content-position="left">估价对象权益状况描述--房屋所有权证</el-divider>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="房屋所有权人:" prop="houseBelogner"
            ><el-input v-model="subjectInfoData.houseBelogner"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="共有情况:" prop="ownershipInfo"
            ><el-input v-model="subjectInfoData.ownershipInfo"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="房屋所有权证号:" prop="propertyNumber"
            ><el-input v-model="subjectInfoData.propertyNumber"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="规划用途:" prop="purpose"
            ><el-input v-model="subjectInfoData.purpose"></el-input></el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="面积:" prop="area"
            ><el-input v-model="subjectInfoData.area"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="房屋结构:" prop="houseStruct"
            ><el-input v-model="subjectInfoData.houseStruct"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="登记时间:" prop="registerTime"
            ><el-input v-model="subjectInfoData.registerTime"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="房屋性质:" prop="purpose"
            ><el-input v-model="subjectInfoData.purpose"></el-input></el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="5"
          ><el-form-item label="所在层数/总层数:" prop="atFloorInfo"
            ><el-input v-model="subjectInfoData.atFloorInfo"></el-input></el-form-item
        ></el-col>
        <el-col :span="5"
          ><el-form-item label="建成年代:" prop="buildingYear"
            ><el-input v-model="subjectInfoData.buildingYear"></el-input></el-form-item
        ></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8"
          ><el-form-item label="他项权利权利状况:" prop="statusOfAncillaryRights"
            ><el-input v-model="subjectInfoData.statusOfAncillaryRights"></el-input></el-form-item
        ></el-col>
        <el-col :span="8"
          ><el-form-item label="其他特殊情况:" prop="otherSpecialInfo"
            ><el-input v-model="subjectInfoData.otherSpecialInfo"></el-input></el-form-item
        ></el-col>
        <el-col :span="8"
          ><el-form-item label="权益状况分析:" prop="rightsAnalysis"
            ><el-input v-model="subjectInfoData.rightsAnalysis"></el-input></el-form-item
        ></el-col>
      </el-row>
      <el-button type="primary" @click="saveSubjectInfomationData">保存</el-button>
    </el-form>
  </div>
</template>
<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { reactive } from 'vue'
import { useReportDataStore } from '../store/store'
const useStore = useReportDataStore()
const storeData = useStore.getReportData

const subjectInfoData = reactive({
  localtionDetailInfo: '',
  directionInfo: '',
  houseOrientation: '',
  streetConditionInfo: '',
  floorConditionInfo: '',
  streetInfo: '',
  transportInfo: '',
  carParkingInfo: '',
  peopleInfo: '',
  infrastructureInfo: '',
  publicServiceInfo: '',
  buildingRepairInfo: '',
  outerWallInfo: '',
  doorInfo: '',
  windowInfo: '',
  roomInWallInfo: '',
  roomInFloorInfo: '',
  roomInTopInfo: '',
  bedRoomFloorInfo: '',
  bedRoomTopInfo: '',
  bedRoomEquipment: '',
  rightsHolder: '',
  ownershipInfo: '',
  propertyNumber: '',
  realUnitNumber: '',
  rightTypes: '',
  rightNature: '',
  purpose: '',
  area: '',
  serviceLife: '',
  houseStruct: '',
  atFloorInfo: '',
  buildingYear: '',
  statusOfAncillaryRights: '',
  otherSpecialInfo: '',
  rightsAnalysis: '',
  houseBelogner: '',
  registerTime: ''
})

function saveSubjectInfomationData() {
  storeData.subjectInfoData = JSON.parse(JSON.stringify(subjectInfoData))
  useStore.updateReportData(storeData)
  ElMessage({
    message: '保存数据成功',
    type: 'success',
    plain: true
  })
}
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
