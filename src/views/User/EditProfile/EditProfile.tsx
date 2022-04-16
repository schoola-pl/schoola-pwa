import { PageWrapper, LinksWrapper, InfoWrapper, ProfilePictureWrapper, ImageWrapper, LinkWrapper, StyledIconDiv } from './EditProfile.styles';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { storeRoot } from 'store';
import { useAvatar } from 'hooks/useAvatar';
import { Link } from 'react-router-dom';
import ToggleSwitch from 'components/atoms/ToggleSwitch/ToggleSwitch';
import KeyIcon from 'assets/icons/KeyIcon.svg';
import NotificationIcon from 'assets/icons/NotificationIcon.svg';
import LinkIcon from 'assets/icons/LinkIcon.svg';
import PersonEditInterests from 'assets/icons/PersonEditInterests.svg';

const EditProfile = () => {
  const user = useSelector((state: storeRoot) => state.user);
  const { getAvatarById } = useAvatar();
  const [image, setImage] = useState('');
  const [notifications, setNotifications] = useState(false);

  useEffect(() => {
    (async () => {
      const avatar = await getAvatarById(user?.avatar);
      setImage(avatar);
    })();
  }, [user]);

  const handleNotifications = () => {
    Notification.requestPermission();

    if (Notification.permission === 'granted') {
      setNotifications(true);
    } else {
      setNotifications(false);
    }
  };

  return (
    <PageWrapper>
      <InfoWrapper>
        <ProfilePictureWrapper>
          <ImageWrapper>
            <img src={image} alt="user" />
          </ImageWrapper>
        </ProfilePictureWrapper>
        <h1>
          {user?.first_name} {user?.last_name}
        </h1>
        <label htmlFor="files">Zmień zdjęcie profilowe</label>
        <input id="files" type="file" />
      </InfoWrapper>
      <LinksWrapper>
        <LinkWrapper as={Link} to="/student/profile/edit/interests">
          <StyledIconDiv icon={PersonEditInterests} />
          <p>Edytuj zainteresowania</p>
        </LinkWrapper>
        <LinkWrapper as={Link} to="/student/profile/edit/social-links">
          <StyledIconDiv icon={LinkIcon} />
          <p>Edytuj linki społecznościowe</p>
        </LinkWrapper>
        <LinkWrapper as={Link} to="/student/settings">
          <StyledIconDiv icon={KeyIcon} />
          <p>Zmień hasło i e-mail</p>
        </LinkWrapper>
        <LinkWrapper useToggle={true}>
          <StyledIconDiv icon={NotificationIcon} />
          <p>Powiadomienia</p>
          <ToggleSwitch onChange={handleNotifications} />
        </LinkWrapper>
      </LinksWrapper>
    </PageWrapper>
  );
};

export default EditProfile;
