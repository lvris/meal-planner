<template>
  <div p-14 flex flex-row justify-between>
    <h2>{{ props.title }}</h2>
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: String
})
</script>