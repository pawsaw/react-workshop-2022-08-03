import { useCallback, useState } from 'react';
import { Link, Redirect, Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import { CounterProvider } from './domain/counter';
import { BookDetailScreen } from './screens/BookDetailScreen';
import { BooksScreen, OnBookSelected } from './screens/BooksScreen';
import { PlaygroundScreen } from './screens/PlaygroundScreen';

function App() {
  const [count, setCount] = useState(0);
  const history = useHistory();

  const onBookSelected: OnBookSelected = useCallback(
    (book) => history.push(`/books/${book.isbn}`),
    [history],
  );

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
        <nav>
          <ul>
            <li>
              <Link to="/playground">Playground</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/playground" component={PlaygroundScreen} />
          <Route path="/books/:isbn" component={BookDetailScreen} />
          <Route path="/books" render={() => <BooksScreen onBookSelected={onBookSelected} />} />
          <Redirect to="/books" />
        </Switch>
      </div>
    </CounterProvider>
  );
}

export default App;
