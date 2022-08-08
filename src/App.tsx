import { useState } from 'react';
import './App.css';
import { BookList } from './components/BookList';
import { Counter } from './components/Counter';
import { useBooks } from './domain/books';
import { CounterProvider } from './domain/counter';
import { ThemeProvider } from './theme';

function App() {
  const { books, reload } = useBooks();
  // const { book } = useBook('1001606140805');

  const [count, setCount] = useState(0);

  return (
    <CounterProvider
      counter={{
        count,
        increment: () => setCount(count + 1),
        decrement: () => setCount(count - 1),
        reset: () => setCount(0),
      }}
    >
      <div className="App">
        <Counter />
        {books ? (
          <ThemeProvider
            theme={{
              primaryColor: 'green',
              secondaryColor: 'green',
            }}
          >
            <BookList books={books} />
          </ThemeProvider>
        ) : (
          <span>Loading books...</span>
        )}
        <button onClick={reload}>Reload Books</button>
        {/* {book ? <BookDetail book={book} /> : <span>Loading</span>} */}
      </div>
    </CounterProvider>
  );
}

export default App;
