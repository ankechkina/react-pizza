import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './entities/filterSlice';
import cartReducer from './entities/cartSlice';

export default configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
  },
});
