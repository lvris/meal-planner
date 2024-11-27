/// <reference types="vite/client" />

/// <reference types="pinia-plugin-persistedstate" />

/// <reference types="naive-ui/volar" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}