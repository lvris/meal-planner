<template>
  <div flex="~ col" gap-3>
    <NInput v-model:value="filterStore.query" placeholder="Search">
      <template #prefix>
        <div class="font-size-6 mr-3 i-solar-card-search-linear" />
      </template>
    </NInput>
    <div flex="~ row" justify-between px-2>
      <NButton text>
        <div class="i-solar-heart-linear font-size-6" />
      </NButton>
      <NDynamicTags v-model:value="filterStore.tags" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFilterStore } from '@/stores/filterStore';

const filterStore = useFilterStore()
</script>
