import './App.css';
import { BookList } from './components/BookList';
import { useBooks } from './domain/books';

function App() {
  // const [book, setBook] = useState<Book | null>(null);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(`http://localhost:4730/books/1001606140805`);
  //     const _book = await response.json();
  //     setBook(_book);
  //   };

  //   fetchData();
  // }, []);

  const { books, reload } = useBooks();

  return (
    <div className="App">
      {books ? <BookList books={books} /> : <span>Loading books...</span>}
      <button onClick={reload}>Reload Books</button>
      {/* {book ? <BookDetail book={book} /> : <span>Loading</span>} */}
    </div>
  );
}

export default App;
