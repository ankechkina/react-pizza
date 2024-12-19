import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  currentSorting: {
    name: 'популярности ↓',
    sortProperty: 'rating&order=desc',
  },
};

const filterSlice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    setCategoryId: (state, action) => ({
      ...state,
      categoryId: action.payload,
    }),
    setCurrentSorting: (state, action) => ({
      ...state,
      currentSorting: action.payload,
    }),
  },
});

export const { setCategoryId, setCurrentSorting } = filterSlice.actions;

export default filterSlice.reducer;
