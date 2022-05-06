import { useSelector } from 'react-redux';
import { useUser } from 'hooks/useUser';
import { storeRoot, useGetInterestedsQuery } from 'store';
import styled from 'styled-components';

const Heading = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

const Interests = () => {
  const user = useSelector((state: storeRoot) => state.user);
  const { findInterested } = useUser();
  const interesteds = useGetInterestedsQuery({});

  return (
    <div>
      <Heading>Twoje zainteresowania</Heading>
    </div>
  );
};
export default Interests;
