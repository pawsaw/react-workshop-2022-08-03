import React from 'react';
import { useContext } from 'react';
import { noop } from '../../util/noop';
import { Counter } from './Counter';

const CounterContext = React.createContext<Counter>({
  count: 0,
  increment: noop,
  decrement: noop,
  reset: noop,
});

export interface CounterProviderProps {
  counter: Counter;
  children: React.ReactNode;
}

export const CounterProvider: React.FC<CounterProviderProps> = ({ counter, children }) => {
  return <CounterContext.Provider value={counter}>{children}</CounterContext.Provider>;
};

export const useCounter = () => useContext(CounterContext);
