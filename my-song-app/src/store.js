// app/store.js
import { configureStore } from '@reduxjs/toolkit';
import musicReducer from '../src/musicSlice';

export const store = configureStore({
  reducer: {
    music: musicReducer,
  },
});
