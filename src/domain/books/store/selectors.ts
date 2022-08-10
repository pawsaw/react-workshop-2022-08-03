import { State } from '../../../store';
import { ISBN } from '../Book';

export const booksFeatureSelector = (state: State) => state.books;
export const booksSelector = (state: State) => state.books.books;
export const bookSelector = (isbn: ISBN) => (state: State) =>
  state.books.books.find((book) => book.isbn === isbn)!;
