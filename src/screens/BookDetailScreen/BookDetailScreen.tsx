import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Book, ISBN } from '../../domain/books';
import { bookSelector } from '../../domain/books/store';
import { State } from '../../store';
import { BookDetail } from './BookDetail/BookDetail';

export interface BookDetailScreenParams {
  isbn: ISBN;
}

export const BookDetailScreen: React.FC = () => {
  const { isbn } = useParams<BookDetailScreenParams>();
  // const { book } = useBook(isbn);
  const book = useSelector<State, Book>(bookSelector(isbn));

  return (
    <div>
      <h2>Book with ISBN: {isbn}</h2>
      <BookDetail book={book} />
    </div>
  );
};
