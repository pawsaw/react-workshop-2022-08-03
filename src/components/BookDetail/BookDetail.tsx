import React, { useEffect, useState } from 'react';
import { Book } from '../../domain/books';

export interface BookDetailProps {}

export const BookDetail: React.FC<BookDetailProps> = () => {
  const [book, setBook] = useState<Book | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:4730/books/1001606140805`);
      const _book = await response.json();
      setBook(_book);
    };

    fetchData();
  }, []);

  return (
    <div>
      {book ? (
        <div>
          <h2>
            Book with ISBN: {book.isbn} - {book.title}
          </h2>
          <p>{book.abstract}</p>
        </div>
      ) : (
        <span>Loading...</span>
      )}
    </div>
  );
};
