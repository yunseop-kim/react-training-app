import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';

const SimpleMath: React.FC = () => {
  const [addResult, setAddResult]: [
    number | any,
    Dispatch<SetStateAction<number | any>>
  ] = useState('');
  const [subResult, setSubResult]: [
    number | any,
    Dispatch<SetStateAction<number | any>>
  ] = useState('');
  const [mulResult, setMulResult]: [
    number | any,
    Dispatch<SetStateAction<number | any>>
  ] = useState('');
  const [divResult, setDivResult]: [
    number | any,
    Dispatch<SetStateAction<number | any>>
  ] = useState('');
  const [firstNumber, setFirstNumber]: [
    number | any,
    Dispatch<SetStateAction<number | any>>
  ] = useState('');
  const [secondNumber, setSecondNumber]: [
    number | any,
    Dispatch<SetStateAction<number | any>>
  ] = useState('');

  useEffect(() => {
    const first: number = Number(firstNumber);
    const second: number = Number(secondNumber);

    if (first && second && first > 0 && second > 0) {
      setAddResult(add(first, second));
      setSubResult(sub(first, second));
      setMulResult(mul(first, second));
      setDivResult(div(first, second));
    }
  });

  const add = (a: number, b: number): number => a + b;
  const sub = (a: number, b: number): number => a - b;
  const mul = (a: number, b: number): number => a * b;
  const div = (a: number, b: number): number => a / b;

  return (
    <div>
      <input
        data-testid="first-number"
        type="number"
        value={firstNumber}
        min="0"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFirstNumber(e.target.value)
        }
      />
      <input
        data-testid="second-number"
        type="number"
        value={secondNumber}
        min="0"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSecondNumber(e.target.value)
        }
      />
      <h5 data-testid="add-result">{addResult}</h5>
      <h5 data-testid="sub-result">{subResult}</h5>
      <h5 data-testid="mul-result">{mulResult}</h5>
      <h5 data-testid="div-result">{divResult}</h5>
    </div>
  );
};

export default SimpleMath;
