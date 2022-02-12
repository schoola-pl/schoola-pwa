import React from 'react';
import { ActionButton, Wrapper } from './ActionMenu.styles';
import { useSelector } from 'react-redux';
import { storeRoot } from 'store';

interface Props {
  isOpened: boolean;
  isComment?: boolean;
}

const ActionMenu: React.FC<Props> = ({ isOpened, isComment }) => {
  const user = useSelector((state: storeRoot) => state.user);

  return (
    <Wrapper isComment={isComment} isOpened={isOpened}>
      {user?.TextRole === 'Moderator' ? <ActionButton>Usuń</ActionButton> : <ActionButton>Zgłoś</ActionButton>}
    </Wrapper>
  );
};

export default ActionMenu;
