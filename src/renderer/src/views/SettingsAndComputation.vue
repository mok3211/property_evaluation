<template>
  <component :is="currentComponent"></component>
</template>
<script setup lang="ts">
import MarketMethodTable from '../components/MarketMethodTable.vue'
import CostMethodTable from '../components/CostMethodTable.vue'
import IncomMethod from '../components/IncomeMethod.vue'
import { useReportDataStore } from '../store/store'
import { computed } from 'vue'
const useStore = useReportDataStore()
const currentComponent = computed(() => {
  switch (useStore.getReportData.selectedMethod) {
    case '市场法':
      return MarketMethodTable
    case '成本法':
      return CostMethodTable
    case '收益法':
      return IncomMethod
    default:
      return MarketMethodTable
  }
})
</script>
<style lang="scss" scoped></style>
