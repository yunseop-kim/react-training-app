import React, { useState } from 'react';

export const getCurrentYear = (): number => new Date().getFullYear();
export const getReaminingYear = (retireAge: string, age: string): number =>
  Number(retireAge) - Number(age);

const RetireCaculator: React.FC = () => {
  const [age, setAge] = useState('');
  const [retireAge, setRetireAge] = useState('');
  const currentYear: number = getCurrentYear();
  let remainingYear: number = getReaminingYear(retireAge, age);
  return (
    <div>
      <input
        type="number"
        name="my-age"
        id="my-age"
        data-testid="my-age"
        value={age}
        onChange={e => setAge(e.target.value)}
        placeholder="What is your current age?"
      />
      <input
        type="number"
        name="retire-age"
        id="retire-age"
        data-testid="retire-age"
        value={retireAge}
        onChange={e => setRetireAge(e.target.value)}
        placeholder="At what age would you like to retire?"
      />
      <h5 data-testid="time-remaining">
        You have {remainingYear} years left until you can retire.
      </h5>
      <h5 data-testid="retirement-year">
        It's {currentYear}, so you can retire in {currentYear + remainingYear}.
      </h5>
    </div>
  );
};

export default RetireCaculator;
