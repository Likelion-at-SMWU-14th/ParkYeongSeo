import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const useThemeStore = create(
  devtools(
    persist(
      (set) => ({
        themeColor: '#ACD7F0',
        setThemeColor: (color) =>
          set({ themeColor: color }, false, 'theme/setThemeColor'),
      }),
      { name: 'fancam-theme' }
    ),
    { name: 'ThemeStore' }
  )
);