import GourmetServices from '../../../services/gourmet';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGourmet = createAsyncThunk('fetchGourmet', async () => {
  const { data } = await GourmetServices.fetchGourmet;
  return data.results;
});
