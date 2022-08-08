import './App.css';
import { BookDetail } from './components/BookDetail';

function App() {
  return (
    <div className="App">
      {/* <BookList books={book} onBookSelected={onBookSelected} /> */}
      <BookDetail />
    </div>
  );
}

export default App;
