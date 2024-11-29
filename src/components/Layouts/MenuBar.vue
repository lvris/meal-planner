<template>
  <NMenu p-3 mb-3 b-t-solid justify-evenly @update:value="handleUpdateValue" mode="horizontal" :options="menuOptions"
    :iconSize="24" />

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
      <NMenu mode="vertical" :options="sideMenuOptions" @click="showDrawer = false" />
    </NDrawerContent>
  </NDrawer>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/stores/appStore';
import { type MenuOption } from 'naive-ui'
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

const sideMenuOptions: MenuOption[] = [
  {
    key: 'home',
    label: () => h(RouterLink, {
      to: "/",
    }, [
      h('div', { class: "i-solar-home-smile-angle-linear" }),
      'Dashboard'
    ])
  },
  {
    key: 'plan',
    label: () => h(RouterLink, {
      to: "/plan",
    }, [
      h('div', { class: "i-solar-notebook-linear" }),
      'Plan'
    ])
  },
  {
    key: 'recipe',
    label: () => h(RouterLink, {
      to: "/recipe",
    }, [
      h('div', { class: "i-solar-chef-hat-linear" }),
      'Recipe'
    ])
  },
  {
    key: 'divider',
    type: 'divider',
  },
]

</script>
<style lang="css">
.n-menu {
  border-color: var(--n-divider-color);

  .n-menu-item-content__icon:has(.router-link-active) {
    color: var(--n-item-icon-color-active);
  }
}

.n-drawer .n-drawer-content .n-drawer-body-content-wrapper {
  padding: 0;
}

.n-drawer .n-drawer-body .n-menu .n-menu-item-content a {
  display: flex;
  align-items: center;
  font-size: 18px;

  div {
    margin-right: 10px;
  }
}
</style>