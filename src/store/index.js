import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './entities/filterSlice';

export default configureStore({
  reducer: {
    filter: filterReducer,
  },
});
