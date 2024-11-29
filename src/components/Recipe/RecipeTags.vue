<template>
  <div flex="~ row" gap-1>
    <NTag v-for="tag in tags" :key="tag" :tag="tag" round :bordered="false">
      {{ tag }}
    </NTag>
  </div>
</template>

<script setup lang="ts">
import { NFlex, NTag } from 'naive-ui'
import { defineProps } from 'vue'

const props = defineProps({
  tags: Array<string>,
})
</script>