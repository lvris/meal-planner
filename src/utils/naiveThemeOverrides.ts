import type { GlobalThemeOverrides } from 'naive-ui'

export const baseThemeOverrides: GlobalThemeOverrides = {
  common: {
    borderRadius: '8px'
  }
}

export const lightThemeOverrides: GlobalThemeOverrides = {
  ...baseThemeOverrides,
  common: {
    ...baseThemeOverrides.common
  }
}

export const darkThemeOverrides: GlobalThemeOverrides = {
  ...baseThemeOverrides,
  common: {
    ...baseThemeOverrides.common
  }
}
