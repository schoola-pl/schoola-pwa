import { upperFirstLetter } from 'helpers/text';
import React from 'react';
import { DateWrapper, Day, Logo, Wrapper } from './PsychoTopBar.styles';
interface Props {
  number: number;
  day: string;
  month: string;
  year: number;
}

const PsychoTopBar: React.FC<Props> = ({ number, day, month, year }) => {
  return (
    <Wrapper>
      <Logo>schoola</Logo>
      <DateWrapper>
        <h1>{number}</h1>
        <div>
          <Day>{day}</Day>
          <p>
            {upperFirstLetter(month)} {year}
          </p>
        </div>
      </DateWrapper>
    </Wrapper>
  );
};
export default PsychoTopBar;
