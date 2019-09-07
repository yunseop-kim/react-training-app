import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Greetings from './Greetings';

describe('<Greetings />', () => {
  // it('matches snapshot', () => {
  //   const utils = render(<Greetings />);
  //   expect(utils.container).toMatchSnapshot();
  // });

  it('shows the props correctly', () => {
    const utils = render(<Greetings />);
    utils.getByText('Greetings');
    utils.getByText('What is your name?');
  });

  it('입력 부분이 따로 있는가?', async () => {
    const utils = render(<Greetings />);
    const input = await utils.findByTestId('username');
  });

  it('문자열 연결(String concatenation) 부분이 따로 있는가?', async () => {
    const utils = render(<Greetings />);
    const input = await utils.findByTestId('username');
    expect(input.value).toBe('React');
    fireEvent.change(input, { target: { value: 'Tester' } });
    expect(input.value).toBe('Tester');
    utils.getByText('Nice to meet you, Tester!');
  });
});
