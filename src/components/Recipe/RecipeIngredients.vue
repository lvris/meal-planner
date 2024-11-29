<template>
  <div>
    <NDataTable :columns="columns" :data="data" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { NDataTable } from 'naive-ui';

const props = defineProps<{
  ingredients: Record<string, number>
}>()

const data = computed(() => {
  return Object.entries(props.ingredients).map(([ingredient, quantity]) => {
    return {
      ingredient,
      quantity
    }
  })
})

const columns = [
  {
    title: 'Ingredient',
    key: 'ingredient'
  },
  {
    title: 'Quantity',
    key: 'quantity'
  }
]
</script>
