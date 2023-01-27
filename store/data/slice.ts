import { createSlice } from '@reduxjs/toolkit'
import { fetchWords } from './async';
import type { PayloadAction } from '@reduxjs/toolkit'

export interface DataState {
  words: any
}

const initialState: DataState = {
  words: [],
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setWords: (state, action: PayloadAction<any>) => {
      state.words = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWords.pending, (state) => {
      state.words = [];
    });

    builder.addCase(fetchWords.fulfilled, (state, action) => {
      state.words = action.payload;
    });

    builder.addCase(fetchWords.rejected, (state, action) => {
      state.words = [];
    });
  }
})

export const { setWords } = dataSlice.actions

export default dataSlice.reducer