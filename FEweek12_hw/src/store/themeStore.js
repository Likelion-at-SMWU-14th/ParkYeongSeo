// src/store/themeStore.js
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const useThemeStore = create(
  devtools(
    (set) => ({
      themeColor: '#ACD7F0',
      setThemeColor: (color) =>
        set({ themeColor: color }, false, 'theme/setThemeColor'),
    }),
    { name: 'ThemeStore' }
  )
);