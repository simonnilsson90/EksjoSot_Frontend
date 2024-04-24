// store.js
import {create} from 'zustand';

export const useStore = create(set => ({
    //  state for category filter
  activeCategory: 'all',
  setActiveCategory: (categoryType) => set({ activeCategory: categoryType }),

  //  state for license filter
  activeLicense: 'all',
  setActiveLicense: (license) => set({ activeLicense: license })
}));


