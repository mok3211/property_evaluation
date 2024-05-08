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
      reportMethod: ''
    }
  }),
  getters: {
    getReportData: (state) => state.reportData
  },
  actions: {
    updateReportData(newData) {
      this.reportData = { ...newData }
      console.log("new data is ")
      console.log(this.reportData)
    }
  }
})
