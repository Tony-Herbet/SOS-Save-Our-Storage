import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  email: '',
  password: '',
  isPasswordHidden: true,
};

const connectionSlice = createSlice({
  name: 'connection',
  initialState: { ...initialState },

  reducers: {
    setEmail: (state, action) => {
      state.email = action.payload;
    },

    setPassword: (state, action) => {
      state.password = action.payload;
    },

    setIsPasswordHidden: (state) => {
      state.isPasswordHidden = !state.isPasswordHidden;
    },

    resetForm: () => {
      return initialState;
    },
  },
});

export default connectionSlice.reducer;
export const { setEmail, setPassword, setIsPasswordHidden, resetForm } = connectionSlice.actions;
