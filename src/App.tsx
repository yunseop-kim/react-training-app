import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Greetings from './Greetings';
import WordCounter from './WordCounter';
import PrintDoubleQuote from './PrintDoubleQuote';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/greetings">인사하기</Link>
            </li>
            <li>
              <Link to="/word-counter">글자 수 세기</Link>
            </li>
            <li>
              <Link to="/print-doublequote">따옴표 출력</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/greetings" component={Greetings} />
          <Route path="/word-counter" component={WordCounter} />
          <Route path="/print-doublequote" component={PrintDoubleQuote} />
        </div>
      </Router>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div>
      <h2>Home</h2>
      <article>Hello, React!</article>
    </div>
  );
};

export default App;
