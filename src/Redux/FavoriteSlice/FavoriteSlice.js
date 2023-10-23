import { createSlice } from '@reduxjs/toolkit';
const favoriteSlice = createSlice({
  name: 'favourites',
  initialState: {isTrue:false},
  reducers: {
    handleAddRemove: (state, action) => {
      state.isTrue = action.payload;
    },
}
});

export const {handleAddRemove} = favoriteSlice.actions;

export default favoriteSlice.reducer;
