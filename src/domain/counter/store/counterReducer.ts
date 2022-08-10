export interface CounterState {
  count: number;
}

export const intialBooksState: CounterState = {
  count: 0,
};

export type AllCounterActions = unknown;

export const counterReducer = (
  state: CounterState = intialBooksState,
  action: AllCounterActions,
): CounterState => {
  return state;
};
