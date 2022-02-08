import styled from 'styled-components';

interface Props {
  isOpened: boolean;
  accountType?: string;
}

export const Wrapper = styled.div<Props>`
  display: ${({ isOpened }) => (isOpened ? 'flex' : 'none')};
  position: absolute;
  bottom: 65%;
  right: 15%;
  z-index: 999;
  height: 4rem;
  width: 9rem;
  border-radius: 1rem;
  background-color: #f7f8fa;
`;

export const ActionButton = styled.button`
  background-color: ${({ theme }) => theme.colors.accentRed};
  height: 100%;
  width: 100%;
  border: none;
  border-radius: 1rem;
`;
