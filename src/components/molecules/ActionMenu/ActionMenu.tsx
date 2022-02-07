import React from 'react';
import { Wrapper, ActionButton } from './ActionMenu.styles';
interface Props {
  isOpened: boolean;
  accountType?: string;
}

const ActionMenu: React.FC<Props> = ({ isOpened, accountType }) => {
  return (
    <Wrapper isOpened={isOpened}>{accountType === 'spottedAdmin' ? <ActionButton>Usuń</ActionButton> : <ActionButton>Zgłoś</ActionButton>}</Wrapper>
  );
};

export default ActionMenu;
