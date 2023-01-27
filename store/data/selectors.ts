import { RootState } from '../store';

export const getWords = (state: RootState): any =>
  state.data.words;
