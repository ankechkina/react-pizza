import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './entities/filterSlice';
import cartReducer from './entities/cartSlice';
import sushiReducer from './entities/sushiSlice';

export default configureStore({
  reducer: {
    filter: filterReducer,
    cart: cartReducer,
    sushi: sushiReducer,
  },
});
