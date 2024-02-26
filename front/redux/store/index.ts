import { configureStore } from '@reduxjs/toolkit';
import connectionReducer from '../reducers/connection';
import inscriptionReducer from '../reducers/inscription';

const store = configureStore({
  reducer: {
    connection: connectionReducer,
    inscription: inscriptionReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
