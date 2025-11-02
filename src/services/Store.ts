import { configureStore } from "@reduxjs/toolkit";
import { cardReducer } from './CardSlice'
import {
  useDispatch as dispatchHook,
  useSelector as selectorHook
} from 'react-redux';
import type {
  TypedUseSelectorHook
} from 'react-redux';

const store = configureStore({
    reducer: {
        card: cardReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useDispatch: () => AppDispatch = () => dispatchHook();
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;

export default store
