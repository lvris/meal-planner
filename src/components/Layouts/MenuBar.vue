<template>
  <NMenu fixed bottom="0" p-3 mb-3 b-t-solid justify-evenly @update:value="handleUpdateValue" mode="horizontal"
    :options="menuOptions" :iconSize="24" />

  <NDrawer v-model:show="showDrawer" :width="270" placement="left">
    <NDrawerContent>
      <template #header>
        <div flex justify-between>
          <div h-auto font-size-6 class="i-solar-user-linear" />
          <NButton font-size-6 quaternary circle @click="appStore.toggleDark">
            <div :class="appStore.isDark ? 'i-solar-moon-linear' : 'i-solar-sun-linear'" />
          </NButton>
        </div>
      </template>
    </NDrawerContent>
  </NDrawer>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/appStore';
import { type DrawerPlacement, type MenuOption } from 'naive-ui'
import { h, ref } from 'vue';
import { RouterLink } from 'vue-router';

const appStore = useAppStore();

const showDrawer = ref(false)
function handleUpdateValue(v: string) {
  if (v === "menu")
    showDrawer.value = true
}

const menuOptions: MenuOption[] = [
  {
    key: 'home',
    icon: () => h(RouterLink, {
      to: "/",
      class: "i-solar-home-smile-angle-linear",
    })
  },
  {
    key: 'plan',
    icon: () => h(RouterLink, {
      to: "/plan",
      class: "i-solar-notebook-linear",
    })
  },
  {
    key: 'recipe',
    icon: () => h(RouterLink, {
      to: "/recipe",
      class: "i-solar-chef-hat-linear",
    })
  },
  {
    key: 'menu',
    icon: () => h('div', { class: "i-solar-hamburger-menu-linear" })
  }
]
</script>
<style lang="css" scoped>
.n-menu {
  border-color: var(--n-divider-color);
}
</style>