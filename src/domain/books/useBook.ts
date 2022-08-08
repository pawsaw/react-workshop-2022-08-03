import { useState, useEffect } from 'react';
import { Book, ISBN } from './Book';

export interface UseBookResult {
  book: Book | null;
  reload: () => Promise<void>;
}

export const useBook = (isbn: ISBN): UseBookResult => {
  const [book, setBook] = useState<Book | null>(null);

  const fetchData = async (isbn: ISBN) => {
    const response = await fetch(`http://localhost:4730/books/${isbn}`);
    const _book = await response.json();
    setBook(_book);
  };

  useEffect(() => {
    fetchData(isbn);
  }, [isbn]);

  return {
    book,
    reload: async () => {
      fetchData(isbn);
    },
  };
};
