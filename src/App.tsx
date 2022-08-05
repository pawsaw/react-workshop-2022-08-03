import { useState, useCallback } from 'react';
import './App.css';
import { Counter, OnValueChanged } from './components/Counter';

function App() {
  const [count, setCount] = useState(201);

  const onCounterValueChanged: OnValueChanged = useCallback((value: number) => {
    // ...
    setCount(value);
  }, []);

  return (
    <div className="App">
      <Counter value={count} onValueChanged={onCounterValueChanged} />
      <p>Counter says: {count}</p>
    </div>
  );
}

export default App;
