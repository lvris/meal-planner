<template>
  <HeaderBar title="Statistic" show-arrow />

  <div p-4>
    <NStatistic label="TotalPlans" :value="99" />
    <NStatistic label="TotalPlans" :value="99" />
    <NStatistic label="TotalPlans" :value="99" />
  </div>
</template>

<script setup lang="ts">
import HeaderBar from '@/components/Layouts/HeaderBar.vue';
</script>