import React from 'react';
import { ActionButton, Wrapper } from './ActionMenu.styles';
import { useSelector } from 'react-redux';
import { storeRoot } from 'store';

interface Props {
  isOpened: boolean;
  isComment?: boolean;
  onClick?: () => void;
}

const ActionMenu: React.FC<Props> = ({ isOpened, isComment, ...rest }) => {
  const user = useSelector((state: storeRoot) => state.user);

  return (
    <Wrapper isComment={isComment} isOpened={isOpened}>
      {user?.TextRole === 'Moderator' ? <ActionButton {...rest}>Usuń</ActionButton> : <ActionButton {...rest}>Zgłoś</ActionButton>}
    </Wrapper>
  );
};

export default ActionMenu;
