<template>
  <div p-6 flex flex-row justify-between>
    <div flex flex-row>
      <NButton v-show="showArrow" @click="router.back" h-auto font-size-6 class="i-solar-round-alt-arrow-left-linear" />
      <h1 ml-3>{{ title }}</h1>
    </div>
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();

defineProps({
  title: String,
  showArrow: Boolean
})
</script>