import { Dispatch } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Book, useBooks } from '../../domain/books';
import { AddBookAction, addBooks, booksSelector } from '../../domain/books/store';
import { State } from '../../store';
import { noop } from '../../util/noop';
import { BookList } from './BookList';
import { OnBookSelected } from './OnBookSelected';

export interface BooksScreenProps {
  onBookSelected?: OnBookSelected;
}

export const BooksScreen: React.FC<BooksScreenProps> = ({ onBookSelected = noop }) => {
  const dispatch = useDispatch<Dispatch<AddBookAction>>();
  const books = useSelector<State, Book[]>(booksSelector);
  const reload = async () => {
    const response = await fetch(`http://localhost:4730/books`);
    const _books = await response.json();
    dispatch(addBooks(_books));
  };

  useEffect(() => {
    if (!books.length) {
      reload();
    }
  }, [books.length]);

  return (
    <div>
      <h2>Books</h2>
      <BookList books={books} onBookSelected={onBookSelected} />
    </div>
  );
};
