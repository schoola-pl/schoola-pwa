import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 3rem;
`;
export const Title = styled.h2`
  margin: 0 0 1rem 1rem;

  span {
    color: ${({ theme }) => theme.colors.accentGreen};
    font-weight: bold;
  }
`;
export const Body = styled.div`
  padding-bottom: 2rem;
  border-bottom: 2px solid #000;
`;
