import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 1rem;

  * {
    font-size: 2.1rem;
    margin: 0;
  }

  h3 {
    color: ${({ theme }) => theme.colors.accentGreen};
  }
`;

export const MeetingWrapper = styled.div`
  display: flex;
  width: 90%;
  flex-direction: column;
  align-items: center;
`;
