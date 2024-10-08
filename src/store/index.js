import { configureStore } from '@reduxjs/toolkit';
import sortingReducer from './entities/sortingSlice';

export default configureStore({
  reducer: {
    sorting: sortingReducer,
  },
});
