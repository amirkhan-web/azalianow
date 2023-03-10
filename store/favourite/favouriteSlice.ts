import { getFromToLocalStorage } from './../../utils/getFromToLocalStorage';
import { TypeItems } from '../../types/index';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TypeInitialList = {
  favourite:TypeItems[] 
}

const initialState:TypeInitialList = {
  favourite: getFromToLocalStorage(),
};

const favouriteSlice = createSlice({
  name:'favourite',
  initialState,
  reducers: {
    addToFavourite(state, action:PayloadAction<TypeItems>) {
      const foundItems = state.favourite.find(item => item.id === action.payload.id)

      if (foundItems) {
        return;
      } else {
        state.favourite.push(action.payload)
        alert('Товар был добавлен на страницу favourites')
      }
    }
  },
})

export const {addToFavourite} = favouriteSlice.actions

export default favouriteSlice.reducer