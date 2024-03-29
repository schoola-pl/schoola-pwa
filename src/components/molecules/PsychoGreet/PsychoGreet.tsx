import styled from 'styled-components';
import React from 'react';
import { useSelector } from 'react-redux';
import { storeRoot, useGetMeetingsCountQuery } from 'store';

const GreetWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-left: 4rem;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: ${({ theme }) => theme.fontWeight.regular};

    strong {
      font-weight: ${({ theme }) => theme.fontWeight.medium};
    }
  }

  div {
    display: flex;
    flex-direction: column;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const MeetParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontSize.s};
  transform: translateY(-100%);

  strong {
    background-color: ${({ theme }) => theme.colors.accentBlue};
    border-radius: 5px;
    padding: 0.5px 4px 0.5px 4px;
    color: white;
  }
`;

const PsychoGreet: React.FC = () => {
  const user = useSelector((state: storeRoot) => state.user);
  const count = useGetMeetingsCountQuery({
    pId: user?.id || null,
    date: new Date().toISOString().slice(0, 10)
  });

  return (
    <GreetWrapper>
      <InnerWrapper>
        <h1>
          Dzień dobry <strong>{user?.first_name || 'użytkowniku'}</strong>!
        </h1>
        <MeetParagraph>
          Masz dzisiaj <strong>{count.isLoading ? 'Pobieram...' : count.data}</strong> spotkań
        </MeetParagraph>
      </InnerWrapper>
    </GreetWrapper>
  );
};

export default PsychoGreet;
