import React from 'react';
import styled from 'styled-components';

interface Props {
  isOpened: boolean;
  accountType?: string;
}

const Wrapper = styled.div<Props>`
  display: ${({ isOpened }) => (isOpened ? 'flex' : 'none')};
  z-index: 999;
  height: 4rem;
  width: 9rem;
  top: 11%;
  left: 64%;
  border-radius: 1rem;
  position: absolute;
  background-color: #f7f8fa;
`;

const ActionButton = styled.button`
  position: relative;
  background-color: ${({ theme }) => theme.colors.accentRed};
  padding: 1rem;
  height: 100%;
  width: 100%;
  border: none;
  border-radius: 1rem;
`;

const ActionMenu: React.FC<Props> = ({ isOpened, accountType }) => {
  return (
    <Wrapper isOpened={isOpened}>
      {accountType === 'spottedAdmin' ? <ActionButton>Usuń post</ActionButton> : <ActionButton>Zgłoś post</ActionButton>}
    </Wrapper>
  );
};

export default ActionMenu;
