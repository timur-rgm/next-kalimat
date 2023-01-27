import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchWords = createAsyncThunk<any, string>(
  'data/fetchWords',
  async (arg) => {
    const response = await fetch(
      `https://kalimat.io/api/dictionary/search?searchQuery=${arg}&mode=exact
      `
    );
    const data = response.json();

    return data;
  }
);