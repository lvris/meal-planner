<template>
  <NaiveWrapper>
    <div flex="~ col" h-vh w-vw>
      <div flex-1 h-auto class="main-content">
        <RouterView />
      </div>
      <div v-show="appStore.showMenu">
        <MenuBar />
      </div>
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
.main-content {
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>