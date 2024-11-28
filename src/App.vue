<template>
  <NaiveWrapper>
    <RouterView />
    <div v-show="appStore.showMenu">
      <MenuBar />
    </div>
  </NaiveWrapper>
</template>

<script setup lang="ts">
import MenuBar from './components/Layouts/MenuBar.vue';
import NaiveWrapper from './components/NaiveUI/NaiveWrapper.vue';
import { useAppStore } from './stores/appStore';

const appStore = useAppStore();
</script>

<style>
html {
  font-size: 16px;
}
#app {
  width: 100%;
  height: 100%;
}
</style>