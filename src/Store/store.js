import { configureStore } from '@reduxjs/toolkit';
import moivesReducer from '../Features/movieSlice';

export default configureStore({
  reducer: {
    movies: moivesReducer
  }
});