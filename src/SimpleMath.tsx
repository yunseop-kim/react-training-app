import React, { useState, useEffect, Dispatch, SetStateAction } from 'react';

const SimpleMath: React.FC = () => {
  const [addResult, setAddResult]: [
    number,
    Dispatch<SetStateAction<number>>
  ] = useState(0);
  const [subResult, setSubResult]: [
    number,
    Dispatch<SetStateAction<number>>
  ] = useState(0);
  const [mulResult, setMulResult]: [
    number,
    Dispatch<SetStateAction<number>>
  ] = useState(0);
  const [divResult, setDivResult]: [
    number,
    Dispatch<SetStateAction<number>>
  ] = useState(0);
  const [firstNumber, setFirstNumber]: [
    number,
    Dispatch<SetStateAction<number>>
  ] = useState(0);
  const [secondNumber, setSecondNumber]: [
    number,
    Dispatch<SetStateAction<number>>
  ] = useState(0);

  useEffect(() => {
    if (firstNumber && secondNumber && firstNumber > 0 && secondNumber > 0) {
      setAddResult(add(firstNumber, secondNumber));
      setSubResult(sub(firstNumber, secondNumber));
      setMulResult(mul(firstNumber, secondNumber));
      setDivResult(div(firstNumber, secondNumber));
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
          setFirstNumber(Number(e.target.value))
        }
      />
      <input
        data-testid="second-number"
        type="number"
        value={secondNumber}
        min="0"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSecondNumber(Number(e.target.value))
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
