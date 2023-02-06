import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import processSlice from './process/slice';

export const store = configureStore({
  reducer: {
    process: processSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
