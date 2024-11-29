<template>
  <div>
    <NButtonGroup gap-3>
      <NButton text>
        <div class="i-solar-heart-linear font-size-6" />
      </NButton>
      <NButton text @click="router.push('/recipe/' + id)">
        <div class="i-solar-square-share-line-linear font-size-6" />
      </NButton>
    </NButtonGroup>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
  id: Number,
});
</script>