import { configureStore } from '@reduxjs/toolkit';
import connectionReducer from 'redux/reducers/connection';
import inscriptionReducer from 'redux/reducers/inscription';

const store = configureStore({
  reducer: {
    connection: connectionReducer,
    inscription: inscriptionReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
