import styled from 'styled-components';

const Info = styled.p`
  margin: 0;
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.accentBlue};
  padding-inline: 2rem;
  text-align: center;
  opacity: 0.6;
`;

export default Info;
