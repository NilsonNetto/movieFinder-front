import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movieData',
  initialState: {
    data: {},
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    }
  }
});

export const { setData } = movieSlice.actions;

export const selectMovieData = (state) => state.movies.data;

export default movieSlice.reducer;