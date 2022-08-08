import React from 'react';
import { Book } from '../../domain/books';

export interface BookDetailProps {
  book: Book;
}

export const BookDetail: React.FC<BookDetailProps> = ({ book }) => {
  return (
    <div>
      <h2>
        Book with ISBN: {book.isbn} - {book.title}
      </h2>
      <p>{book.abstract}</p>
    </div>
  );
};
