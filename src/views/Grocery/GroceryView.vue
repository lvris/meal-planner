<template>
  <HeaderBar title="Grocery" show-arrow />

  <div>
    <NList hoverable clickable>
      <NListItem v-for="item in data" :key="item.name">
        <template #prefix>
          <div w-15>
            {{ `${item.amount} ${item.unit}` }}
          </div>
        </template>
        <h3 m-0>{{ item.name }}</h3>
        <template #suffix>
          <NCheckbox size="large" />
        </template>
      </NListItem>
    </NList>
  </div>
</template>

<script setup lang="ts">
import HeaderBar from '@/components/Layouts/HeaderBar.vue';

const data = [
  {
    "name": "Tomato",
    "amount": 5,
    "unit": "pcs"
  },
  {
    "name": "Chicken Breast",
    "amount": 1,
    "unit": "kg"
  }
]
</script>