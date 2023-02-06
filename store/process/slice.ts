import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SearchModesArabic } from '@/const';

export interface ProcessState {
  searchValue: string;
  modeArabic: string;
}

const initialState: ProcessState = {
  searchValue: '',
  modeArabic: '',
};

export const processSlice = createSlice({
  name: 'process',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.searchValue = action.payload;
    },
    setModeArabic: (state, action: PayloadAction<SearchModesArabic>) => {
      state.modeArabic = action.payload;
    },
  },
});

export const { setSearchValue, setModeArabic } = processSlice.actions;

export default processSlice.reducer;
