<template>
  <NConfigProvider :theme="appStore.isDark ? darkTheme : undefined">
    <NMessageProvider>
      <NDialogProvider>
        <NModalProvider>
          <NLoadingBarProvider>
            <RouterView />
          </NLoadingBarProvider>
        </NModalProvider>
      </NDialogProvider>
    </NMessageProvider>
  </NConfigProvider>
</template>

<script setup lang="ts">
import { darkTheme } from 'naive-ui';
import { useAppStore } from '@/stores/appStore';

const appStore = useAppStore()
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