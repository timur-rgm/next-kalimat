import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import processSlice from './process/slice';
import dataSlice from './data/slice';

export const store = configureStore({
  reducer: {
    process: processSlice,
    data: dataSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
