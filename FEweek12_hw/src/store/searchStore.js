// src/store/searchStore.js
import { create } from 'zustand';
import { devtools } from 'zustand/middleware';
import { searchVideos } from '../api/youtube';

export const useSearchStore = create(
  devtools(
    (set, get) => ({
      query: '',
      results: [],
      loading: false,
      error: null,

      setQuery: (query) => set({ query }, false, 'search/setQuery'),

      search: async () => {
        const { query } = get();
        if (!query.trim()) return;

        set({ loading: true, error: null }, false, 'search/searchStart');

        try {
          const results = await searchVideos(query);
          set({ results, loading: false }, false, 'search/searchSuccess');
        } catch (err) {
          set(
            { error: err.message, loading: false, results: [] },
            false,
            'search/searchError'
          );
        }
      },
    }),
    { name: 'SearchStore' }
  )
);