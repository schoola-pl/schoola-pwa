import styled from 'styled-components';

interface Props {
  isOpened: boolean;
  accountType?: string;
  isComment?: boolean;
}

export const Wrapper = styled.div<Props>`
  display: ${({ isOpened }) => (isOpened ? 'flex' : 'none')};
  position: absolute;
  left: calc(100% - 12.5rem);
  top: 2.4rem;
  border-radius: 1rem;
`;

export const ActionButton = styled.button`
  background-color: ${({ theme }) => theme.colors.accentRed};
  height: 100%;
  width: fit-content;
  padding: 1rem 1.5rem;
  border: none;
  color: white;
  border-radius: 1rem;
`;
