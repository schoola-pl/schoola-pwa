import React from 'react';
import { upperFirstLetter } from 'helpers/text';
import { getDayOfWeek, translateDayToPolish } from 'helpers/week';
import { Wrapper } from './DayLink.styles';
import { storeRoot, useGetMeetingsCountQuery } from 'store';
import { useSelector } from 'react-redux';

interface props {
  name: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday';
}

const DayLink: React.FC<props> = ({ name }) => {
  const user = useSelector((state: storeRoot) => state.user);
  const count = useGetMeetingsCountQuery({
    pId: user?.id || null,
    date: getDayOfWeek(name)
  });

  return (
    <Wrapper to={`/psycho/week/${name}`}>
      <h1>{upperFirstLetter(translateDayToPolish(name))}</h1>
      <p>
        liczba spotkań - <strong>{count.isLoading ? '-' : count.data}</strong>
      </p>
    </Wrapper>
  );
};

export default DayLink;
