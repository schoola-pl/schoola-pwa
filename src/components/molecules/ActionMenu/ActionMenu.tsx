import React from 'react';
import { Wrapper, ActionButton } from './ActionMenu.styles';
interface Props {
  isOpened: boolean;
  accountType: string;
  isComment?: boolean;
}

const ActionMenu: React.FC<Props> = ({ isOpened, accountType, isComment }) => {
  return (
    <Wrapper isComment={isComment} isOpened={isOpened}>
      {accountType === 'spottedAdmin' ? <ActionButton>Usuń</ActionButton> : <ActionButton>Zgłoś</ActionButton>}
    </Wrapper>
  );
};

export default ActionMenu;
