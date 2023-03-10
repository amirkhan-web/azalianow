import { configureStore } from '@reduxjs/toolkit';
import favourite from './favourite/favouriteSlice';

const store = configureStore({
  reducer: {
    favourite
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch

export default store