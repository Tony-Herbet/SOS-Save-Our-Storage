import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  firstname: '',
  lastname: '',
  email: '',
  password: '',
  confirmPassword: '',
  isPasswordHidden: true,
  isConfirmPasswordHidden: true,
};

const inscriptionSlice = createSlice({
  name: 'inscription',
  initialState: { ...initialState },

  reducers: {
    setFirstname: (state, action) => {
      state.firstname = action.payload;
    },
    setLastname: (state, action) => {
      state.lastname = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    setIsPasswordHidden: (state) => {
      state.isPasswordHidden = !state.isPasswordHidden;
    },

    setIsConfirmPasswordHidden: (state) => {
      state.isConfirmPasswordHidden = !state.isConfirmPasswordHidden;
    },
    resetForm: () => {
      return initialState;
    },
  },
});

export default inscriptionSlice.reducer;
export const {
  setFirstname,
  setLastname,
  setEmail,
  setPassword,
  setConfirmPassword,
  setIsPasswordHidden,
  resetForm,
  setIsConfirmPasswordHidden,
} = inscriptionSlice.actions;
