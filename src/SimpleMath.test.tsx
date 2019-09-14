import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import SimpleMath from './SimpleMath';

const componentGetter = () => {
  const utils: RenderResult = render(<SimpleMath />);
  const first: HTMLInputElement = utils.getByTestId(
    'first-number'
  ) as HTMLInputElement;
  const second: HTMLInputElement = utils.getByTestId(
    'second-number'
  ) as HTMLInputElement;
  const addResult: HTMLElement = utils.getByTestId('add-result');
  const subResult: HTMLElement = utils.getByTestId('sub-result');
  const mulResult: HTMLElement = utils.getByTestId('mul-result');
  const divResult: HTMLElement = utils.getByTestId('div-result');

  return {
    first,
    second,
    addResult,
    subResult,
    mulResult,
    divResult
  };
};

describe('<SimpleMath />', () => {
  it('has two number input elements.', () => {
    const { first, second } = componentGetter();
    expect(Number(first.value)).toBe(0);
    expect(Number(second.value)).toBe(0);
  });

  it('print out Arithmetic results', () => {
    const { addResult, subResult, mulResult, divResult } = componentGetter();
    expect(Number(addResult.textContent)).toBe(0);
    expect(Number(subResult.textContent)).toBe(0);
    expect(Number(mulResult.textContent)).toBe(0);
    expect(Number(divResult.textContent)).toBe(0);
  });

  it('문자열로 입력 받도록 할 것.', () => {
    const { first, second } = componentGetter();
    fireEvent.change(first, {
      target: {
        value: '10'
      }
    });
    fireEvent.change(second, {
      target: {
        value: '5'
      }
    });
    expect(typeof first.value).toBe('string');
    expect(typeof second.value).toBe('string');
  });

  //   it('이렇게 받은 문자열 값은 사칙연산을 하기 전에 숫자 값으로 변환시켜야 한다.', () => {});
  it('숫자만 입력되도록 프로그램을 수정해보자. 숫자가 아닌 값이 입력된 경우 진행되면 안 된다.', () => {
    const {
      first,
      second,
      addResult,
      subResult,
      mulResult,
      divResult
    } = componentGetter();
    fireEvent.change(first, {
      target: {
        value: 'invalid input'
      }
    });
    fireEvent.change(second, {
      target: {
        value: 'invalid input 2'
      }
    });
    expect(Number(addResult.textContent)).toBe(0);
    expect(Number(subResult.textContent)).toBe(0);
    expect(Number(mulResult.textContent)).toBe(0);
    expect(Number(divResult.textContent)).toBe(0);
  });

  it('음수를 넣을 수 없도록 하라.', () => {
    const {
      first,
      second,
      addResult,
      subResult,
      mulResult,
      divResult
    } = componentGetter();
    fireEvent.change(first, {
      target: {
        value: -1
      }
    });
    fireEvent.change(second, {
      target: {
        value: -15
      }
    });
    expect(Number(addResult.textContent)).toBe(0);
    expect(Number(subResult.textContent)).toBe(0);
    expect(Number(mulResult.textContent)).toBe(0);
    expect(Number(divResult.textContent)).toBe(0);
  });
});
