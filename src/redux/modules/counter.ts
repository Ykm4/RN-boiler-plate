import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { addTodo } from './app';

type counterType = {
  number: number;
};

const initialState: counterType = {
  number: 0,
};

const incrementBy = createAction('incrementBy');

const slice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.number++;
    },
    decrement: (state) => {
      state.number--;
    },
    incrementByAmount: (state, { payload }: PayloadAction<number>) => {
      state.number = payload;
    },
  },
  extraReducers: {
    [incrementBy.type]: (state, action) => {
      return state + action.payload;
    },
    [addTodo.type]: (state) => {
      return state;
    },
    'some/other/action': (state, action) => {},
  },
});

export default slice.reducer;
export const { increment, decrement, incrementByAmount } = slice.actions;
export const {} = slice.caseReducers;
