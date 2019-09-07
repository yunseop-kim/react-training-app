import React, { useState } from 'react';

const Greetings: React.FC = () => {
  const [userName, setUserName] = useState('React');
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
        <input type="button" value="입력" />
        <div>Nice to meet you, {userName}!</div>
      </div>
    </div>
  );
};

export default Greetings;
