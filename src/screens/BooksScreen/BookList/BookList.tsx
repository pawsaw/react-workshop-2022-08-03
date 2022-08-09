import { Book } from '../../../domain/books';
import { useCounter } from '../../../domain/counter';
import { noop } from '../../../util/noop';
import { BookListItem } from './BookListItem/BookListItem';
import { OnBookSelected } from '../OnBookSelected';

export interface BookListProps {
  books: Book[];
  onBookSelected?: OnBookSelected;
}

export const BookList: React.FC<BookListProps> = ({ books, onBookSelected = noop }) => {
  const { count } = useCounter();

  return (
    <div>
      <p>BookList - counter: {count}</p>
      {books.map((book) => (
        <BookListItem key={book.title} book={book} onBookSelected={onBookSelected} />
      ))}
    </div>
  );
};
