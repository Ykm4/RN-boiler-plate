import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleType } from '../../../services/news';

export const initialState: ArticleType[] = [];

const slice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    addNews: (state, { payload }: PayloadAction<ArticleType[]>) => {
      return payload;
    },
  },
});

export default slice.reducer;
export const { addNews } = slice.actions;
