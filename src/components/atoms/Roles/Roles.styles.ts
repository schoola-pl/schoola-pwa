import styled from 'styled-components';

export const RoleWrapper = styled.div`
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 2rem;
  height: 11rem;
  width: 14rem;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-left: 1.5rem;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    &::after {
      content: '👨‍🎓';
      padding-left: 1rem;
    }
  }

  p {
    transform: translateY(15%);
    font-size: ${({ theme }) => theme.fontSize.s};
    color: grey;
  }
`;
