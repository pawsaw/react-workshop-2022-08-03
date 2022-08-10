import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { countSelector, decrement, increment } from '../../domain/counter/store';
import { State } from '../../store';

export const Counter: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector<State, number>(countSelector);

  return (
    <div>
      <button onClick={() => dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => dispatch(increment())}>+</button>
    </div>
  );
};
