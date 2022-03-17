import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  right: 2rem;
  bottom: 11rem;
  width: 60px;
  height: 60px;
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
