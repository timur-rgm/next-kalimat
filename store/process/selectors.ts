import { RootState } from '../store';

export const getSearchValue = (state: RootState): string =>
  state.process.searchInputValue;
