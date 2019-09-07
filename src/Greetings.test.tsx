import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import Greetings from './Greetings';
import { greetingsList } from './constants';

describe('<Greetings />', () => {
  // it('matches snapshot', () => {
  //   const utils: RenderResult = render(<Greetings />);
  //   expect(utils.container).toMatchSnapshot();
  // });

  it('shows the props correctly', () => {
    const utils: RenderResult = render(<Greetings />);
    utils.getByText('Greetings');
    utils.getByText('What is your name?');
  });

  it('입력 부분이 따로 있는가?', async () => {
    const utils: RenderResult = render(<Greetings />);
    const input = await utils.findByTestId('username');
  });

  it('문자열 연결(String concatenation) 부분이 따로 있는가?', async () => {
    const utils: RenderResult = render(<Greetings />);
    const inputName: string = 'Tester';
    const input: HTMLElement = await utils.findByTestId('username');
    fireEvent.change(input, { target: { value: inputName } });
    expect(input.value).toBe(inputName);
    const expected: string[] = greetingsList.map(
      item => item + ', ' + inputName + '!'
    );
    const greet: HTMLElement = await utils.findByTestId('greetings');
    expect(expected).toEqual(expect.arrayContaining([greet.textContent]));
  });
});
