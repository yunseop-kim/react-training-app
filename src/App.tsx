import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Greetings from './Greetings';

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
          </ul>

          <hr />

          <Route exact path="/" component={Home} />
          <Route path="/greetings" component={Greetings} />
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
