import { Book } from '../../../../domain/books';
import { useTheme } from '../../../../theme';
import { OnBookSelected } from '../../OnBookSelected';

export interface BookListItemProps {
  book: Book;
  onBookSelected: OnBookSelected;
}

export const BookListItem: React.FC<BookListItemProps> = ({ book, onBookSelected }) => {
  const { primaryColor } = useTheme();

  return (
    <div
      style={{
        color: primaryColor,
      }}
    >
      {book.title} -{' '}
      <span
        onClick={() => onBookSelected(book)}
        role="link"
        style={{
          color: 'blue',
          cursor: 'pointer',
        }}
      >
        Details
      </span>
    </div>
  );
};
