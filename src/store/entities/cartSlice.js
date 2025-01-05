import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice: 0,
  totalItemsCount: 0,
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const foundItem = state.items.find((obj) => obj.id === action.payload.id);
      if (foundItem) {
        foundItem.count++;
      } else {
        state.items.push({
          ...action.payload,
          count: 1,
        });
      }
      state.totalPrice += action.payload.price;
      state.totalItemsCount += 1;
    },
    minusItem: (state, action) => {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      const foundItem = state.items.find((obj) => obj.id === action.payload.id);
      if (foundItem) {
        foundItem.count--;
      }
      state.totalPrice -= action.payload.price;
      state.totalItemsCount -= 1;
    },
    removeItem: (state, action) => {
      const foundItem = state.items.find((obj) => obj.id === action.payload.id);
      if (foundItem) {
        foundItem.count = 0;
      }
      const removedPrice = action.payload.price * action.payload.count;
      const removedCount = action.payload.count;
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalItemsCount -= removedCount;
      state.totalPrice -= removedPrice;
    },
    clearItems: (state) => {
      state.items = [];
      state.totalPrice = 0;
      state.totalItemsCount = 0;
    },
  },
});

export const { addItem, minusItem, removeItem, clearItems } = cartSlice.actions;

export default cartSlice.reducer;
