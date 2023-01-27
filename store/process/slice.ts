import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface ProcessState {
  searchInputValue: string;
}

const initialState: ProcessState = {
  searchInputValue: '',
};

export const processSlice = createSlice({
  name: 'process',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchInputValue = action.payload;
    },
  },
});

export const { setSearchValue } = processSlice.actions;

export default processSlice.reducer;
