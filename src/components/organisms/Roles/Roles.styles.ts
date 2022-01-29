import styled from 'styled-components';

export const RoleRecord = styled.div`
  width: 100%;
  padding: 1.3rem 2.3rem;
  background-color: #fff;
  margin: 1.4rem 0;
  font-size: 1.5rem;
  border-radius: 0.8rem;
  opacity: 0.9;
  box-shadow: 0 0 30px -14px rgba(0, 0, 0, 0.3);
  position: relative;
  transition: box-shadow 0.1s ease-in-out, opacity 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 30px -10px rgba(0, 0, 0, 0.3);
    opacity: 1;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0.95rem;
    top: 50%;
    transform: translateY(-50%);
    width: 0.5rem;
    border-radius: 0.3rem;
    height: 60%;
    background-color: ${({ theme }) => theme.colors.accentGreen};
  }
`;

export const EmptyParagraph = styled.p`
  font-size: 1.4rem;
  text-align: center;
  margin-top: 1.6rem;
`;
