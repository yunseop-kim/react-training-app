import React, { useState } from 'react';
import { generateGreetings } from './constants';

const Greetings: React.FC = () => {
  const [userName, setUserName] = useState('React');
  const [greetings, setGreetings] = useState(generateGreetings());
  const changeGreetings = (): void => {
    setGreetings(generateGreetings());
  };
  return (
    <div>
      <h2>Greetings</h2>
      <h4>What is your name?</h4>
      <div>
        <label>
          Name:
          <input
            data-testid="username"
            type="text"
            aria-label="username"
            value={userName}
            onChange={event => setUserName(event.target.value)}
          />
        </label>
        <input type="button" value="입력" onClick={changeGreetings} />
        <div data-testid="greetings">
          {greetings}, {userName}!
        </div>
      </div>
    </div>
  );
};

export default Greetings;
