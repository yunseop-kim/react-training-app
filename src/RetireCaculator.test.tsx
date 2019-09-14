import React from 'react';
import { render, RenderResult, fireEvent } from '@testing-library/react';
import RetireCaculator, {
  getCurrentYear,
  getReaminingYear
} from './RetireCaculator';

describe('<RetireCaculator />', () => {
  it('나이, 은퇴나이를 입력받는다.', () => {
    const utils: RenderResult = render(<RetireCaculator />);
    utils.getByTestId('my-age');
    utils.getByTestId('retire-age');
  });

  it('정년까지 몇 년 남았는지, 퇴직하는 해는 몇 년이 되는지를 보여준다.', () => {
    const utils: RenderResult = render(<RetireCaculator />);
    utils.getByTestId('time-remaining');
    utils.getByTestId('retirement-year');
  });

  it('정년까지 몇 년 남았는지, 퇴직하는 해는 몇 년이 되는지를 계산한다.', () => {
    const myAgeValue: string = '25';
    const myRetireAgeValue: string = '65';
    const currentYear: number = getCurrentYear();
    const remainingYear: number = getReaminingYear(
      myRetireAgeValue,
      myAgeValue
    );
    const utils: RenderResult = render(<RetireCaculator />);
    const myAge: HTMLInputElement = utils.getByTestId(
      'my-age'
    ) as HTMLInputElement;
    const retireAge: HTMLInputElement = utils.getByTestId(
      'retire-age'
    ) as HTMLInputElement;
    const timeRemaining: HTMLElement = utils.getByTestId('time-remaining');
    const retirementYear: HTMLElement = utils.getByTestId('retirement-year');
    fireEvent.change(myAge, { target: { value: myAgeValue } });
    fireEvent.change(retireAge, { target: { value: myRetireAgeValue } });

    expect(timeRemaining.textContent).toBe(
      `You have ${remainingYear} years left until you can retire.`
    );
    expect(retirementYear.textContent).toBe(
      `It's ${currentYear}, so you can retire in ${currentYear +
        remainingYear}.`
    );
  });

  //   it('이미 퇴직했을 나이를 입력하면 음수 값이 출력되는 상황이 발생하는데, 이 상황을 해결하도록 프로그램을 수정해보자.', () => {});
});
