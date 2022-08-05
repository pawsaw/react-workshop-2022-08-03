import './App.css';
import { BookList, OnBookSelected } from './components/BookList';
import { book } from './data/books';

function App() {
  const onBookSelected: OnBookSelected = (book) => alert(book.price);

  return (
    <div className="App">
      <BookList books={book} onBookSelected={onBookSelected} />
    </div>
  );
}

export default App;
