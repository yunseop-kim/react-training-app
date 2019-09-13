import React from 'react';
import { render, RenderResult, fireEvent } from '@testing-library/react';
import PrintDoubleQuote from './PrintDoubleQuote';

describe('<Greetings />', () => {
  it('인용구를 입,출력할수 있는 Element들이 있습니다.', () => {
    const utils: RenderResult = render(<PrintDoubleQuote />);
    utils.getByTestId('quote-input');
    utils.getByTestId('name');
    utils.getByTestId('wise-saying');
  });

  it('디폴트로 설정한 인용구, 이름, 결과가 잘 나오는지 확인합니다.', () => {
    const utils: RenderResult = render(<PrintDoubleQuote />);
    const quoteInput: HTMLElement = utils.getByTestId('quote-input');
    const nameInput: HTMLElement = utils.getByTestId('name');
    const result: HTMLElement = utils.getByTestId('wise-saying');
    expect(quoteInput.value).toEqual(
      "These aren't the droids you're looking for."
    );
    expect(nameInput.value).toEqual('Obi-Wan Kenobi');
    expect(result.textContent).toEqual(
      `Obi-Wan Kenobi says, "These aren't the droids you're looking for."`
    );
  });

  it('인용구를 직접 입력하여 올바른 결과를 출력받습니다.', () => {
    const utils: RenderResult = render(<PrintDoubleQuote />);
    const quoteInput: HTMLElement = utils.getByTestId('quote-input');
    const nameInput: HTMLElement = utils.getByTestId('name');
    const result: HTMLElement = utils.getByTestId('wise-saying');

    fireEvent.change(quoteInput, {
      target: { value: '많은 사람이 재능의 부족보다 결심의 부족으로 실패한다.' }
    });
    fireEvent.change(nameInput, { target: { value: '빌리 선데이' } });

    expect(quoteInput.value).toEqual(
      '많은 사람이 재능의 부족보다 결심의 부족으로 실패한다.'
    );
    expect(nameInput.value).toEqual('빌리 선데이');
    expect(result.textContent).toEqual(
      '빌리 선데이 says, "많은 사람이 재능의 부족보다 결심의 부족으로 실패한다."'
    );
  });
});
