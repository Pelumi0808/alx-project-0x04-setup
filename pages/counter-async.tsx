// pages/counter-async.tsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// Async thunk action to increment after 1 second
export const incrementAsync = createAsyncThunk(
  "counter/incrementAsync",
  async () => {
    return new Promise<number>((resolve) =>
      setTimeout(() => resolve(1), 1000)
    );
  }
);

// Slice with async reducer
const asyncCounterSlice = createSlice({
  name: "asyncCounter",
  initialState: { value: 0 },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(incrementAsync.fulfilled, (state, action) => {
      state.value += action.payload;
    });
  },
});

export const asyncCounterReducer = asyncCounterSlice.reducer;

const CounterAsyncPage: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.asyncCounter?.value || 0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4 p-6">
      <h1 className="text-3xl font-bold">Async Counter (Redux Thunk)</h1>
      <p className="text-2xl">{count}</p>
      <button
        onClick={() => dispatch(incrementAsync())}
        className="bg-blue-600 px-6 py-3 text-white rounded hover:bg-blue-700 transition"
      >
        Increment after 1 second
      </button>
    </div>
  );
};

export default CounterAsyncPage;
