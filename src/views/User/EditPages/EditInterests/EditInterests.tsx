import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useUser } from 'hooks/useUser';
import { storeRoot, useGetInterestedsQuery } from 'store';
import styled from 'styled-components';
import Interests from 'components/atoms/Interests/Interests';

const Heading = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;

const EditInterests = () => {
  const user = useSelector((state: storeRoot) => state.user);
  const { findInterested } = useUser();
  const interesteds = useGetInterestedsQuery({});

  return (
    <div>
      <Heading>Twoje zainteresowania</Heading>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/*@ts-ignore */}
      <Interests interests={findInterested(user?.TextInteresteds.split(';'), interesteds?.data)} />
    </div>
  );
};
export default EditInterests;
