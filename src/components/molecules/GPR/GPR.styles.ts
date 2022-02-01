import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

export const PasswordInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0rem;
`;

export const Signature = styled.p`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  font-size: ${({ theme }) => theme.fontSize.s};
`;

export const SignatureWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1.2rem;
  justify-content: center;
  align-items: center;
`;

export const PasswordInfoHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.m};
  transform: translateY(25%);
  font-weight: ${({ theme }) => theme.fontWeight.semibold};
`;
