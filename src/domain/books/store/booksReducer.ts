import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Book } from '../Book';

export interface BooksState {
  books: Book[];
}

export const intialBooksState: BooksState = {
  books: [],
};

export type AddBookAction = PayloadAction<Book[]>;

const booksSlice = createSlice({
  name: 'books',
  initialState: intialBooksState,
  reducers: {
    addBooks: (state: BooksState, action: AddBookAction): BooksState => ({
      ...state,
      books: [...action.payload],
    }),
  },
});

export const { addBooks } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
