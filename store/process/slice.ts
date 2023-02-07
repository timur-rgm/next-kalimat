import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { SearchModesArabic, SearchModesTranslation } from '@/const';

export interface ProcessState {
  search: string;
  modeArabic: string;
  modeCyrillic: string;
}

const initialState: ProcessState = {
  search: '',
  modeArabic: 'exact',
  modeCyrillic: 'keywords',
};

export const processSlice = createSlice({
  name: 'process',
  initialState,
  reducers: {
    setSearchValue: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setModeArabic: (state, action: PayloadAction<SearchModesArabic>) => {
      state.modeArabic = action.payload;
    },
    setModeCyrillic: (state, action: PayloadAction<SearchModesTranslation>) => {
      state.modeCyrillic = action.payload;
    },
  },
});

export const { setSearchValue, setModeArabic, setModeCyrillic } = processSlice.actions;

export default processSlice.reducer;
