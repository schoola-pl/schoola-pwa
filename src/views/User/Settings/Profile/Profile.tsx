import {
  EditImageWrapper,
  ImageWrapper,
  InfoWrapper,
  LinksWrapper,
  LinkWrapper,
  PageWrapper,
  ProfilePictureWrapper,
  StyledIconDiv
} from './Profile.styles';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { storeRoot } from 'store';
import { useAvatar } from 'hooks/useAvatar';
import { Link } from 'react-router-dom';
import ToggleSwitch from 'components/atoms/ToggleSwitch/ToggleSwitch';
import KeyIcon from 'assets/icons/KeyIcon.svg';
import NotificationIcon from 'assets/icons/NotificationIcon.svg';
import LinkIcon from 'assets/icons/LinkIcon.svg';
import PersonEditInterests from 'assets/icons/PersonEditInterests.svg';
import { StyledInput } from '../../FirstLoginPages/PhotoPage/PhotoPage.styles';
import Button from 'components/atoms/Button/Button';
import ErrorParagraph from 'components/atoms/ErrorParagraph/ErrorParagraph';

const Settings = () => {
  const user = useSelector((state: storeRoot) => state.user);
  const { saveAvatar, getAvatarById, uploadProgress } = useAvatar();
  const [isNotified, setIsNotified] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [image, setImage] = useState('');
  const [newImage, setNewImage] = useState<FormData | null>(null);
  const [isEditingImage, setIsEditingImage] = useState(false);

  useEffect(() => {
    if (Notification.permission === 'granted' && localStorage.getItem('notification_sub')) {
      setIsNotified(true);
    } else {
      setIsNotified(false);
    }
  }, []);

  useEffect(() => {
    (async () => {
      const avatar = await getAvatarById(user?.avatar);
      setImage(avatar);
    })();
  }, [user]);

  const handleNotifications = (e: any) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      Notification.requestPermission().then((permission) => {
        if (permission === 'granted') {
          setIsNotified(true);
        }
      });
    } else {
      alert('Aby wyłączyć powiadomienia, musisz wejść w ustawienia przeglądarki!');
    }
  };

  const getPhotoFromForm = (event: any) => {
    setNewImage(null);
    setError(null);
    const target = event.target as HTMLInputElement;
    const files = target.files;
    if (!target || !files || !user) return setError('Nie udało się pobrać zdjęcia!');
    if (files && /^.+\.(jpg|png|webp|jpeg)$/i.test(files[0].name)) {
      const fd = new FormData();
      fd.append('files', files[0], `avatar-${user.username}-${user.id}`);
      console.log(fd);
      setNewImage(fd);
    } else {
      setNewImage(null);
      setError('Dozwolone rozszerzenia: jpg, png, webp, jpeg!');
    }
  };

  const handleChangePhoto = async () => {
    if (newImage) {
      setError(null);
      await saveAvatar(newImage);
      setIsEditingImage(false);
      setNewImage(null);
    } else setError('Najpierw wybierz zdjęcie!');
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
        {!isEditingImage ? (
          <p className="info" onClick={() => setIsEditingImage(true)}>
            Zmień zdjęcie profilowe
          </p>
        ) : (
          <div>
            {uploadProgress && newImage ? (
              <p className="info" style={{ textDecoration: 'none' }}>
                Zmienianie zdjęcia... {uploadProgress}%
              </p>
            ) : (
              <EditImageWrapper>
                <StyledInput type="file" onChange={getPhotoFromForm} accept=".jpg,.jpeg,.png,.webp" />
                <div>
                  <Button onClick={handleChangePhoto}>Potwierdź</Button>
                  <Button isRed onClick={() => setIsEditingImage(false)}>
                    Anuluj
                  </Button>
                </div>
                {error && <ErrorParagraph style={{ marginTop: '1rem', marginBottom: '0' }}>{error}</ErrorParagraph>}
              </EditImageWrapper>
            )}
          </div>
        )}
      </InfoWrapper>
      <LinksWrapper>
        <LinkWrapper as={Link} to="interests">
          <StyledIconDiv icon={PersonEditInterests} />
          <p>Zainteresowania</p>
        </LinkWrapper>
        <LinkWrapper as={Link} to="social-links">
          <StyledIconDiv icon={LinkIcon} />
          <p>Linki społecznościowe</p>
        </LinkWrapper>
        <LinkWrapper as={Link} to="security">
          <StyledIconDiv icon={KeyIcon} />
          <p>Bezpieczeństwo</p>
        </LinkWrapper>
        <LinkWrapper useToggle={true}>
          <StyledIconDiv icon={NotificationIcon} />
          <p>Powiadomienia</p>
          <ToggleSwitch onChange={handleNotifications} initial={isNotified} />
        </LinkWrapper>
      </LinksWrapper>
    </PageWrapper>
  );
};

export default Settings;
