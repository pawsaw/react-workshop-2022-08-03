import { State } from '../../../store';

export const counterFeatureSelector = (state: State) => state.counter;
export const countSelector = (state: State) => state.counter.count;
