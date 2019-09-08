import React, { useState } from 'react';

const WordCounter: React.FC = () => {
  const [myInput, setMyInput] = useState('initial string');
  const [textResult, setTextResult] = useState(
    `${myInput} has ${myInput.length} characters.`
  );
  const onChangeWord = (value: string) => {
    setMyInput(value);
    const result = value
      ? `${value} has ${value.length} characters.`
      : 'Please Enter anything.';
    setTextResult(result);
  };
  return (
    <div>
      <h2>Word Counter</h2>
      <article>
        <h4>What is the input string?</h4>
        <input
          type="text"
          id="word-input"
          name="word-input"
          data-testid="word-input"
          placeholder="enter any strings..."
          value={myInput}
          onChange={event => onChangeWord(event.target.value)}
        />
        <div>
          <h5 id="text-result" data-testid="text-result">
            {textResult}
          </h5>
        </div>
      </article>
    </div>
  );
};

export default WordCounter;
