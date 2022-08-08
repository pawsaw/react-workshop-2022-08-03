import './App.css';
import { BookDetail } from './components/BookDetail';
import { useBook } from './domain/books';

function App() {
  // const { books, reload } = useBooks();
  const { book } = useBook('1001606140805');

  return (
    <div className="App">
      {/* {books ? <BookList books={books} /> : <span>Loading books...</span>}
      <button onClick={reload}>Reload Books</button> */}
      {book ? <BookDetail book={book} /> : <span>Loading</span>}
    </div>
  );
}

export default App;
