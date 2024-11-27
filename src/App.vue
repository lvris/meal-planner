<template>
  <NaiveWrapper>
    <RouterView />
  </NaiveWrapper>
</template>

<script setup lang="ts">
import NaiveWrapper from './components/NaiveUI/NaiveWrapper.vue';
</script>

<style>
html {
  font-size: 4px;
}
#app {
  width: 100%;
  height: 100%;
}
</style>