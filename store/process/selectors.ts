import { SearchModesArabic } from '@/const';
import { RootState } from '../store';

export const getSearchValue = (state: RootState): string =>
  state.process.searchValue;

export const getModeArabic = (state: RootState): string =>
  state.process.modeArabic;
