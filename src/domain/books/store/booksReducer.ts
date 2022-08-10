import { Book } from '../Book';

export interface BooksState {
  books: Book[];
}

export const intialBooksState: BooksState = {
  books: [],
};

export type AllBooksActions = unknown;

export const booksReducer = (
  state: BooksState = intialBooksState,
  action: AllBooksActions,
): BooksState => {
  return state;
};
