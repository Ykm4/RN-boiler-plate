import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GourmetState } from './declaration';
import { fetchGourmet } from './thunk';

export const initialState: GourmetState = {
  api_version: '',
  results_available: null,
  results_returned: '',
  results_start: null,
  shop: [],
};

const slice = createSlice({
  name: 'gourmet',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      fetchGourmet.fulfilled,
      (state, { payload }: PayloadAction<GourmetState>) => payload,
    );
  },
});

export default slice.reducer;
export const {} = slice.actions;
