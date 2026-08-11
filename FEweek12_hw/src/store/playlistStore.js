import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const usePlaylistStore = create(
  devtools(
    (set, get) => ({
      items: [],

      isSaved: (id) => get().items.some((i) => i.id === id),

      // 담겨있으면 빼고, 없으면 담는 토글
      toggleItem: (video) => {
        const { items } = get();
        const exists = items.some((i) => i.id === video.id);

        if (exists) {
          set(
            { items: items.filter((i) => i.id !== video.id) },
            false,
            'playlist/removeViaToggle'
          );
        } else {
          set(
            { items: [...items, { ...video }] },
            false,
            'playlist/addViaToggle'
          );
        }
      },
    }),
    { name: 'PlaylistStore' }
  )
);