import React from 'react';
import { Wrapper, Logo, DateWrapper, Day } from './PsychoTopBar.styles';

interface Props {
  number: number;
  day: string;
  month: string;
  year: number;
}

const PsychoTopBar: React.FC<Props> = ({ number, day, month, year }) => (
  <Wrapper>
    <Logo>schoola</Logo>
    <DateWrapper>
      <h1>{number}</h1>
      <div>
        <Day>{day}</Day>
        <p>
          {month} {year}
        </p>
      </div>
    </DateWrapper>
  </Wrapper>
);

export default PsychoTopBar;
