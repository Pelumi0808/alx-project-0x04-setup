import React from "react";
import { useCounter } from "@/hooks/useCounter";

const CounterHookPage = () => {
  const { count, increment, decrement } = useCounter(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4 p-6">
      <h1 className="text-3xl font-bold">Counter with Custom Hook</h1>
      <p className="text-2xl">{count}</p>
      <div>
        <button
          onClick={increment}
          className="bg-green-500 px-6 py-3 text-white rounded mr-4"
        >
          Increment
        </button>
        <button
          onClick={decrement}
          className="bg-red-500 px-6 py-3 text-white rounded"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default CounterHookPage;
