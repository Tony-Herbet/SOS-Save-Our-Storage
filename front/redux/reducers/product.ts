import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  product: {
    id: '',
    name: '',
    quantity: '',
    date: '',
    storage: '',
    underStorage: '',
  },
  isAddProductModalOpen: false,
  isEditProductModalOpen: false,
  isDatePickerOpen: false,
  newDate: '',
};

const productSlice = createSlice({
  name: 'product',
  initialState: { ...initialState },

  reducers: {
    setProduct: (state, action) => {
      state.product = action.payload;
    },

    setIsAddProductModalOpen: (state, action) => {
      state.isAddProductModalOpen = action.payload;
    },

    setIsEditProductModalOpen: (state, action) => {
      state.isEditProductModalOpen = action.payload;
    },

    setIsDatePickerOpen: (state, action) => {
      state.isDatePickerOpen = action.payload;
    },

    setNewDate: (state, action) => {
      state.newDate = action.payload;
    },

    resetProduct: () => {
      return initialState;
    },
  },
});

export default productSlice.reducer;
export const {
  setProduct,
  setIsAddProductModalOpen,
  setIsEditProductModalOpen,
  setIsDatePickerOpen,
  setNewDate,
  resetProduct,
} = productSlice.actions;
