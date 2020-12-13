import { configureStore } from '@reduxjs/toolkit';
import appReducer from './modules/app';
import counterReducer from './modules/counter';
import newsReducer from './modules/News';
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from 'react-redux';

const rootReducer = {
  app: appReducer,
  counter: counterReducer,
  news: newsReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export default store;
