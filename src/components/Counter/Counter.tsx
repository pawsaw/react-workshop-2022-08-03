import React, { useState } from 'react';
import { noop } from '../../util/noop';

export interface OnValueChanged {
  (value: number): void;
}

export interface CouterProps {
  value?: number;
  onValueChanged?: OnValueChanged;
}

export const Counter: React.FC<CouterProps> = ({ value = 100, onValueChanged = noop }) => {
  const decrement = () => {
    const newValue = value - 1;
    onValueChanged(newValue);
  };

  const increment = () => {
    const newValue = value + 1;
    onValueChanged(newValue);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <span>{value}</span>
      <button onClick={increment}>+</button>
    </div>
  );
};
