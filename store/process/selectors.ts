import { RootState } from '../store';

export const getSearchValue = (state: RootState): string =>
  state.process.search;

export const getModeArabic = (state: RootState): string =>
  state.process.modeArabic;

export const getModeCyrillic = (state: RootState): string =>
  state.process.modeCyrillic;
