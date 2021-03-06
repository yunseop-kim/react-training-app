import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Greetings from './Greetings';
import WordCounter from './WordCounter';
import PrintDoubleQuote from './PrintDoubleQuote';
import SimpleMath from './SimpleMath';
import RetireCaculator from './RetireCaculator';

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
            <li>
              <Link to="/math">간단한 수학</Link>
            </li>
            <li>
              <Link to="/retire-calculator">퇴직 계산기</Link>
            </li>
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/greetings" component={Greetings} />
          <Route path="/word-counter" component={WordCounter} />
          <Route path="/print-doublequote" component={PrintDoubleQuote} />
          <Route path="/math" component={SimpleMath} />
          <Route path="/retire-calculator" component={RetireCaculator} />
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
