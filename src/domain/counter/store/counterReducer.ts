import { createSlice } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { State } from '../../../store';

export interface CounterState {
  count: number;
}

export const intialCounterState: CounterState = {
  count: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: intialCounterState,
  reducers: {
    increment: (state: CounterState) => ({
      ...state,
      count: state.count + 1,
    }),
    decrement: (state: CounterState) => ({
      ...state,
      count: state.count - 1,
    }),
    reset: (state: CounterState) => intialCounterState,
  },
});

export const counterReducer = counterSlice.reducer;
export const { increment, decrement, reset } = counterSlice.actions;
