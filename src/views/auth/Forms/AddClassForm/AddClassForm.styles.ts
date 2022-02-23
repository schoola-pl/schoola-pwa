import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: -2rem;
  border-right: 2px solid #eceff7;
  @media (max-width: ${({ theme }) => theme.screenSize.tabletMD}) {
    border: none;
    padding-inline: 1rem;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  width: 30rem;
  margin-top: 3rem;
  @media (max-width: ${({ theme }) => theme.screenSize.tabletMD}) {
    height: fit-content;
    margin-bottom: 5rem;
  }
`;

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-bottom: 2rem;
`;
