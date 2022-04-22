import styled from 'styled-components';

export const LinkWrapper = styled.div`
  display: flex;
  text-align: left;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;

export const LinksHeading = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const MediaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1.5rem;
  font-size: ${({ theme }) => theme.fontSize.s};
`;
