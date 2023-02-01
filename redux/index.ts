import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import favouriteSlice from './favourite/favouriteSlice';

const store = configureStore({
  reducer: {
    favourite:favouriteSlice,
  },
  middleware:getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck:false
  })
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   RootState,
   unknown,
   Action<any>
 >;

export default store