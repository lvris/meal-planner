<template>
  <div>
    <NButton text>
      <div class="i-solar-add-circle-linear font-size-6" />
    </NButton>
    <NButton text>
      <div class="i-solar-heart-linear font-size-6" />
    </NButton>
    <NButton text @click="router.push('/recipe/' + id)" v-show="showLink">
      <div class="i-solar-square-share-line-linear font-size-6" />
    </NButton>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const props = defineProps({
  id: Number,
  showLink: Boolean
});
</script>