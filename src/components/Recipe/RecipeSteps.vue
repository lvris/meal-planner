<template>
  <div>
    <n-steps v-model:current="current" vertical>
      <n-step v-for="[id, title] in Object.entries(props.steps)" :key="id" :title="title" />
    </n-steps>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { type RecipeStep } from "@/interfaces/recipe.interface";

const current = ref<number | undefined>(1)

const props = defineProps<{
  steps: RecipeStep
}>()

</script>