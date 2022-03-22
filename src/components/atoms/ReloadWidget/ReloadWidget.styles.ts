import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 11rem;
  width: 5.75rem;
  height: 5.75rem;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.accentBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0.2rem;

  img {
    width: 100%;
    color: white;
  }
`;
