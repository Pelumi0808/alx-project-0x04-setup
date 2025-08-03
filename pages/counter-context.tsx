// pages/counter-context.tsx
import { CounterProvider, useCounter } from "../context/CounterContext";

const CounterDisplay = () => {
  const { count, increment, decrement } = useCounter();
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="text-2xl font-bold mb-4">Counter with Context</h1>
      <p className="text-lg mb-4">Count: {count}</p>
      <div className="space-x-4">
        <button onClick={increment} className="px-4 py-2 bg-blue-500 text-white rounded">
          +
        </button>
        <button onClick={decrement} className="px-4 py-2 bg-red-500 text-white rounded">
          -
        </button>
      </div>
    </div>
  );
};

export default function CounterContextPage() {
  return (
    <CounterProvider>
      <CounterDisplay />
    </CounterProvider>
  );
}
