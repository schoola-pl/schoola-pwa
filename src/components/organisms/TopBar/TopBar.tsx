import { InnerWrapper, Logo, StyledSidebarLink, UserPicture, Wrapper } from './TopBar.styles';
import NotificationList from 'components/organisms/NotificationList/NotificationList';
import SettingsIcon from 'assets/icons/SettingsIcon.png';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { storeRoot } from 'store';
import { useAvatar } from 'hooks/useAvatar';
import { useEffect, useState } from 'react';

const TopBar = () => {
  const user = useSelector((state: storeRoot) => state.user);
  const { getAvatarById } = useAvatar();
  const [image, setImage] = useState('');

  useEffect(() => {
    if (user) {
      (async () => {
        const image = await getAvatarById(user?.avatar, 'thumbnail');
        setImage(image);
      })();
    }
  }, [user]);

  return (
    <Wrapper>
      <Logo>schoola</Logo>
      <InnerWrapper>
        <NotificationList />
        <StyledSidebarLink as={Link} to="/student/settings" icon={SettingsIcon} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default TopBar;
