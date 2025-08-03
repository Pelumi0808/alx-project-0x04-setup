// pages/counter-redux.tsx
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store';
import { increment, decrement } from '@/store/counterSlice';

const CounterRedux = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4">
      <h1 className="text-3xl font-bold">Counter with Redux</h1>
      <p className="text-2xl">{count}</p>
      <div className="flex space-x-4">
        <button
          onClick={() => dispatch(increment())}
          className="bg-green-500 px-4 py-2 text-white rounded"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="bg-red-500 px-4 py-2 text-white rounded"
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default CounterRedux;
