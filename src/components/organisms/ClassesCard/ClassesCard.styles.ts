import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 50rem;
  overflow: hidden;
  height: 67.2rem;
  background-color: white;
  grid-column: 2 / 2;
  border-radius: 2rem;
  margin-left: 4rem;
  display: flex;
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.accentGreen};
`;

export const Heading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin-top: 2rem;
  margin-left: 2rem;
`;

export const ClassesWrapper = styled.div`
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
