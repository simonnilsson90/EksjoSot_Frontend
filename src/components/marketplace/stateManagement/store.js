// store.js
import {create} from 'zustand';

export const useStore = create(set => ({
    //  state for category filter
  activeCategory: 'all',
  setActiveCategory: (categoryType) => set({ activeCategory: categoryType }),

  //  state for license filter
  activeLicense: 'all',
  setActiveLicense: (license) => set({ activeLicense: license }),

  // State for clicked components
  clicked: false,
  setClicked: (clicked) => set({ clicked }),

  //state when custom license is clicked
  customClicked: false,
  setCustomClicked: (customClicked) => set({ customClicked }),

  // Price range value
  value: [0, 300],
  setValue: value => set({value}),
  
}));


