import { useBooks } from '../../domain/books';
import { BookList } from './BookList';

export const BooksScreen: React.FC = () => {
  const { books } = useBooks();

  return (
    <div>
      <h2>Books</h2>
      {books ? <BookList books={books} /> : <span>Loading...</span>}
    </div>
  );
};
