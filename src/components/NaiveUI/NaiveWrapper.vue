<template>
  <NConfigProvider :theme="theme" :theme-overrides="themeOverrides">
    <NMessageProvider>
      <NDialogProvider>
        <NModalProvider>
          <NLoadingBarProvider>
            <NThemeEditor v-show="showEditor" />
            <NGlobalStyle />
            <slot />
          </NLoadingBarProvider>
        </NModalProvider>
      </NDialogProvider>
    </NMessageProvider>
  </NConfigProvider>
</template>

<script setup lang="ts">
import { NThemeEditor, darkTheme } from 'naive-ui';
import { useAppStore } from '@/stores/appStore';
import { computed, ref } from 'vue';
import { darkThemeOverrides, lightThemeOverrides } from '@/utils/naiveThemeOverrides';

const appStore = useAppStore();
const theme = computed(() => appStore.isDark ? darkTheme : undefined);
const themeOverrides = computed(() => appStore.isDark ? darkThemeOverrides : lightThemeOverrides)

const showEditor = ref(false);
</script>
