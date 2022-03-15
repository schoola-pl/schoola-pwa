import styled from 'styled-components';

export const LinkWrapper = styled.div`
  display: flex;
  text-align: left;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;

export const LinksHeading = styled.h1`
  padding-left: 2.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;
