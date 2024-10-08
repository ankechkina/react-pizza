import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	currentSorting: 'rating',
};

const sortingSlice = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    sortByPrice: (state, action) => ({
      ...state,
      currentChannelId: action.payload,
    }),
    sortByRating: (state, action) => ({
      ...state,
      isModalOpen: true,
      modalWindowType: action.payload.type,
      modalProps: action.payload.props,
    }),
    sortByAlphabet: (state) => ({
      ...state,
      isModalOpen: false,
      modalWindowType: null,
      modalProps: null,
    }),
  },
});

export const { sortByPrice, sortByRating, sortByAlphabet } = sortingSlice.actions;

export default sortingSlice.reducer;