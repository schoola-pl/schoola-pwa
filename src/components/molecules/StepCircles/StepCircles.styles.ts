import styled from 'styled-components';

export const StepCircleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem;
  margin-left: 3rem;

  > * {
    &:first-child {
       background-color: ${({ theme }) => theme.colors.accentBlue};
    }


`;

export const Circle = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  background-color: #f7f8fa;
  border-radius: 1rem;
  margin-right: 1rem;
`;
