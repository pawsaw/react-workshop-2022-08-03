import { useParams } from 'react-router-dom';
import { ISBN, useBook } from '../../domain/books';
import { BookDetail } from './BookDetail/BookDetail';

export interface BookDetailScreenParams {
  isbn: ISBN;
}

export const BookDetailScreen: React.FC = () => {
  const { isbn } = useParams<BookDetailScreenParams>();
  const { book } = useBook(isbn);

  return (
    <div>
      <h2>Book with ISBN: {isbn}</h2>
      {book ? <BookDetail book={book} /> : <span>Loading ...</span>}
    </div>
  );
};
