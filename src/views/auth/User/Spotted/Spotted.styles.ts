import styled from 'styled-components';

export const PageWrapper = styled.div`
  transform: translateY(-2%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export const Info = styled.p`
  margin: 0;
  font-size: 1.6rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.accentBlue};
  padding-inline: 2rem;
  text-align: center;
  opacity: 0.6;
  letter-spacing: 1px;
`;
