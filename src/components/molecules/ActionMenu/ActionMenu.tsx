import React from 'react';
import { ActionButton, Wrapper } from './ActionMenu.styles';
import { useSelector } from 'react-redux';
import { storeRoot } from 'store';

interface Props {
  isOpened: boolean;
  isComment?: boolean;
  isLoading: boolean;
  onClick?: () => void;
}

const ActionMenu: React.FC<Props> = ({ isOpened, isComment, isLoading, ...rest }) => {
  const user = useSelector((state: storeRoot) => state.user);

  return (
    <Wrapper isComment={isComment} isOpened={isOpened}>
      {user?.TextRole === 'Moderator' ? (
        <ActionButton data-testid={`feed-post-menu-delete`} {...rest}>
          {!isLoading ? 'Usuń' : 'Usuwanie...'}
        </ActionButton>
      ) : (
        <ActionButton data-testid={`feed-post-${user?.username || ''}-menu-dispatch`} {...rest}>
          {!isLoading ? 'Zgłoś' : 'Zgłaszanie...'}
        </ActionButton>
      )}
    </Wrapper>
  );
};

export default ActionMenu;
