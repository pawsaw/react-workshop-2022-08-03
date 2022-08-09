import { useState } from 'react';
import { Link, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import { CounterProvider } from './domain/counter';
import { BooksScreen } from './screens/BooksScreen';
import { PlaygroundScreen } from './screens/PlaygroundScreen';

function App() {
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
          <Route path="/books" component={BooksScreen} />
          <Redirect to="/books" />
        </Switch>
      </div>
    </CounterProvider>
  );
}

export default App;
