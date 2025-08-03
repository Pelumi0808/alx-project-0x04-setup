// store/index.ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import { asyncCounterReducer } from "@/pages/counter-async"; // import reducer

const store = configureStore({
  reducer: {
    counter: counterReducer,
    asyncCounter: asyncCounterReducer, // add async reducer here
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
