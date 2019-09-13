import React, { useState, Dispatch, SetStateAction } from 'react';

const PrintDoubleQuote: React.FC = () => {
  const [quote, setQuote]: [
    string,
    Dispatch<SetStateAction<string>>
  ] = useState("These aren't the droids you're looking for.");
  const [name, setName]: [string, Dispatch<SetStateAction<string>>] = useState(
    'Obi-Wan Kenobi'
  );
  return (
    <div>
      <input
        type="text"
        id="quote-input"
        name="quote-input"
        placeholder="What is the quote?"
        data-testid="quote-input"
        value={quote}
        onChange={event => setQuote(event.target.value)}
      />
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Who said it?"
        data-testid="name"
        value={name}
        onChange={event => setName(event.target.value)}
      />
      <h5 data-testid="wise-saying">
        {name} says, "{quote}"
      </h5>
    </div>
  );
};

export default PrintDoubleQuote;
