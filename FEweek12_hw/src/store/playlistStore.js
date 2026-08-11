import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';

export const usePlaylistStore = create(
  devtools(
    persist(
      (set, get) => ({
        items: [],

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
      { name: 'fancam-playlist' } // localStorage에 저장될 키 이름
    ),
    { name: 'PlaylistStore' }
  )
);