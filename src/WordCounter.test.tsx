import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import WordCounter from './WordCounter';

describe('<WordCounter />', () => {
  it('shows the props correctly', () => {
    const utils: RenderResult = render(<WordCounter />);
    utils.getByText('What is the input string?');
    utils.getByPlaceholderText('enter any strings...');
    utils.getByText('initial string has 14 characters.');
  });

  it('출력 결과에는 입력 받은 문자열이 그대로 나타나도록 할 것.', async () => {
    const value: string = 'This is my word counter!';
    const utils: RenderResult = render(<WordCounter />);
    const input: HTMLElement = await utils.findByTestId('word-input');
    const result: HTMLElement = await utils.findByTestId('text-result');
    fireEvent.change(input, { target: { value } });
    expect(result.textContent).toBe(
      value + ' has ' + value.length + ' characters.'
    );
  });

  it('사용자가 아무 것도 입력하지 않은 채로 엔터 키를 치면 무엇이라도 입력하라는 메시지를 나타내보자.', async () => {
    //   이 프로그램을 GUI(그래픽 사용자 인터페이스) 버전으로 작성하여 글자를 입력할 때마다 글자 수가 바로 바로 업데이트되도록 하라. 만일 여러분이 사용하는 언어에 GUI 라이브러리가 없다면 HTML과 JavaScript를 사용하라.
    const utils: RenderResult = render(<WordCounter />);
    const input: HTMLElement = await utils.findByTestId('word-input');
    const result: HTMLElement = await utils.findByTestId('text-result');
    fireEvent.change(input, {
      target: {
        value: ''
      }
    });
    expect(result.textContent).toBe('Please Enter anything.');
  });
});
