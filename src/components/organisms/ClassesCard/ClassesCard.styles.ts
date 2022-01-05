import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  max-height: 745px;
  overflow: hidden;
  background-color: white;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.screenSize.tabletMD}) {
    margin-inline: 6rem;
  }
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
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.lightBrown};
  align-items: center;

  &::-webkit-scrollbar {
    background-color: transparent;
    width: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.accentBrown};
    border-radius: 10px;
  }
`;
