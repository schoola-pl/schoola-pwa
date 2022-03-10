import { GoBack, InnerWrapper, Logo, Wrapper } from './TopBar.styles';
import SettingsIcon from 'assets/icons/SettingsIcon.png';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { storeRoot } from 'store';
import { useAvatar } from 'hooks/useAvatar';
import { useEffect, useState } from 'react';
import NotificationList from 'components/organisms/NotificationList/NotificationList';
import BackIcon from 'assets/icons/UserSidebarIcons/BackIcon.svg';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';

const TopBar = () => {
  const url = window.location.pathname;
  const isComments = url.includes('/comments');
  const user = useSelector((state: storeRoot) => state.user);
  const { getAvatarById } = useAvatar();
  const [image, setImage] = useState('');
  const navigate = useNavigate();

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
        <GoBack icon={BackIcon} isComments={isComments} onClick={() => navigate(-1)} />
        <NotificationList />
        <SidebarLink style={{ margin: 0 }} as={Link} to="/student/settings" icon={SettingsIcon} />
      </InnerWrapper>
    </Wrapper>
  );
};

export default TopBar;
