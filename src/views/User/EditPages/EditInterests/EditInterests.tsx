import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useUser } from 'hooks/useUser';
import { storeRoot, useGetInterestedsQuery } from 'store';
import styled from 'styled-components';
import Interests from 'components/atoms/Interests/Interests';
import Combobox from 'components/molecules/Combobox/Combobox';

const Heading = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

const EditInterests = () => {
  const user = useSelector((state: storeRoot) => state.user);
  const { findInterested } = useUser();
  const interests = useGetInterestedsQuery({});

  return (
    <div>
      <Heading>Twoje zainteresowania</Heading>

      {/* {Array.isArray(interests) ? interests.map((interest) => <div>{findInterested(user.TextInteresteds.split(';'), interesteds.data);}</div>) : <div>{interests.name}</div>} */}
    </div>
  );
};
export default EditInterests;
