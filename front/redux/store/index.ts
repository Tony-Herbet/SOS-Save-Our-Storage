import { configureStore } from '@reduxjs/toolkit';
import connectionReducer from 'redux/reducers/connection';
import inscriptionReducer from 'redux/reducers/inscription';
import storageReducer from 'redux/reducers/storage';
import productReducer from 'redux/reducers/product';

const store = configureStore({
  reducer: {
    connection: connectionReducer,
    inscription: inscriptionReducer,
    storage: storageReducer,
    product: productReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
