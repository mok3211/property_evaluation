import { defineStore } from 'pinia'

export const useReportDataStore = defineStore('reportData', {
  state: () => ({
    reportData: {
      reportNumber: '',
      reportProjectName: '',
      appraisalClient: '',
      registeredAppraisers: '',
      valueTime: '',
      purposeOfValuation: '',
      reportDate: '',
      selectedMethod: '市场法',
      marketMethodData: [
        {
          title: '案例1',
          name: '1',
          data: {
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
          }
        }
      ],
      costMethodData: { totalPrice: 0 },
      inComeMethodData: { buildingTotalPrice: 0 },
      subjectInfoData: {},
      judgementData: {}
    }
  }),
  getters: {
    getReportData: (state) => state.reportData
  },
  actions: {
    updateReportData(newData) {
      this.reportData = { ...newData }
      console.log('new data is ')
      console.log(this.reportData)
    }
  }
})
