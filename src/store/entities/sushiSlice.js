import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSushi = createAsyncThunk(
  'sushi/fetchSushi',
  async ({ currentPage, category, sortType }) => {
    const { data } = await axios.get(
      `https://66b4c00c9f9169621ea4362e.mockapi.io/items?page=${currentPage}${category}&sortBy=${sortType.sortProperty}`,
    );
    return data;
  },
);

const initialState = {
  items: [],
  status: 'loading',
};

const sushiSlice = createSlice({
  name: 'sushi',
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSushi.pending, (state) => {
        state.status = 'loading';
        state.items = [];
      })
      .addCase(fetchSushi.fulfilled, (state, action) => {
        state.items = action.payload;
        state.status = 'success';
      })
      .addCase(fetchSushi.rejected, (state) => {
        state.status = 'error';
        state.items = [];
      });
  },
});

export const { setItems } = sushiSlice.actions;

export default sushiSlice.reducer;
