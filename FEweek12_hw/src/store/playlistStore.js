// src/store/playlistStore.js
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

export const usePlaylistStore = create(
  devtools(
    (set, get) => ({
      items: [],

      addItem: (video) => {
        const { items } = get();
        const existing = items.find((i) => i.id === video.id);

        if (existing) {
          set(
            {
              items: items.map((i) =>
                i.id === video.id ? { ...i, priority: i.priority + 1 } : i
              ),
            },
            false,
            'playlist/increasePriorityOnDuplicateAdd'
          );
          return;
        }

        set(
          {
            items: [...items, { ...video, priority: 1, liked: false }],
          },
          false,
          'playlist/addItem'
        );
      },

      removeItem: (id) =>
        set(
          { items: get().items.filter((i) => i.id !== id) },
          false,
          'playlist/removeItem'
        ),

      increasePriority: (id) =>
        set(
          {
            items: get().items.map((i) =>
              i.id === id ? { ...i, priority: i.priority + 1 } : i
            ),
          },
          false,
          'playlist/increasePriority'
        ),

      decreasePriority: (id) => {
        const { items } = get();
        const target = items.find((i) => i.id === id);
        if (!target) return;

        if (target.priority <= 1) {
          set(
            { items: items.filter((i) => i.id !== id) },
            false,
            'playlist/decreasePriorityToRemove'
          );
          return;
        }

        set(
          {
            items: items.map((i) =>
              i.id === id ? { ...i, priority: i.priority - 1 } : i
            ),
          },
          false,
          'playlist/decreasePriority'
        );
      },

      toggleLike: (id) =>
        set(
          {
            items: get().items.map((i) =>
              i.id === id ? { ...i, liked: !i.liked } : i
            ),
          },
          false,
          'playlist/toggleLike'
        ),
    }),
    { name: 'PlaylistStore' }
  )
);