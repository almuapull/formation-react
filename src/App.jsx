import {useState} from 'react';

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue);
  const increment = () => setCount(Math.min(count + 1, 10)); // Limit to a maximum of 10
  const decrement = () => setCount(Math.max(count - 1, 0)); // Limit to a minimum of 0
  const reset = () => setCount(initialValue);

  return { count, increment, decrement, reset };
};

const App = () => {
  const { count, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
