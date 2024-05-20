import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  addStorage: {
    name: '',
    isModalOpen: false,
  },
  underStorage: {
    name: '',
    isUnderStorageModalOpen: false,
  },
};

const storageSlice = createSlice({
  name: 'storage',
  initialState: { ...initialState },

  reducers: {
    setAddStorageName: (state, action) => {
      state.addStorage.name = action.payload;
    },

    setIsModalOpen: (state, action) => {
      state.addStorage.isModalOpen = action.payload;
    },

    setUnderStorageName: (state, action) => {
      state.underStorage.name = action.payload;
    },

    setIsUnderStorageModalOpen: (state, action) => {
      state.underStorage.isUnderStorageModalOpen = action.payload;
    },

    resetAddStorage: (state) => {
      state.addStorage = initialState.addStorage;
    },

    resetUnderStorage: (state) => {
      state.underStorage = initialState.underStorage;
    },
  },
});

export default storageSlice.reducer;
export const {
  setAddStorageName,
  setIsModalOpen,
  resetAddStorage,
  setUnderStorageName,
  setIsUnderStorageModalOpen,
  resetUnderStorage,
} = storageSlice.actions;
