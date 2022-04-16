import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { storeRoot, useGetInterestedsQuery, useGetSocialsQuery } from 'store';
import { useAvatar } from 'hooks/useAvatar';
import { useUser } from 'hooks/useUser';
import { Link } from 'react-router-dom';
import KeyIcon from 'assets/icons/KeyIcon.svg';
import IconDiv from 'components/atoms/IconDiv/IconDiv';
import NotificationIcon from 'assets/icons/NotificationIcon.svg';
import LinkIcon from 'assets/icons/LinkIcon.svg';
import PersonEditInterests from 'assets/icons/PersonEditInterests.svg';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h1 {
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }
`;

export const ProfilePictureWrapper = styled.div`
  height: 10rem;
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 10rem;
  background: linear-gradient(rgba(184, 208, 252, 1) 0%, rgba(91, 117, 166, 1) 0%, rgba(85, 171, 103, 1) 100%);

  &:hover {
    cursor: default;
  }
`;

export const ImageWrapper = styled.div`
  width: 9rem;
  height: 9rem;
  border-radius: inherit;
  border: none;
  overflow: hidden;

  &:hover {
    cursor: default;
  }

  img {
    min-width: 100%;
    background-color: white;
    height: 100%;
    object-fit: cover;
  }
`;

const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    visibility: hidden;
  }

  label {
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.colors.accentBlue};
  }
`;

const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const LinkWrapper = styled.div`
  text-decoration: none;
  color: black;
  background-color: white;
  font-size: 1.48rem;
  height: 6rem;
  width: 90%;
  margin-bottom: 2rem;
  border-radius: 1.5rem;
  display: grid;
  grid-template-columns: 20% 70% 10%;
  align-items: center;
  box-shadow: ${({ theme }) => theme.innerStyles.box};

  &::after {
    content: '>';
  }
`;

const StyledIconDiv = styled(IconDiv)`
  margin-left: 1.5rem;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  height: 4.75rem;
  width: 4.75rem;
  border-radius: 1.5rem;
  background-size: 70%;
  position: relative;
`;

const EditProfile = () => {
  const user = useSelector((state: storeRoot) => state.user);
  const { getAvatarById } = useAvatar();
  const [image, setImage] = useState('');
  useEffect(() => {
    (async () => {
      const avatar = await getAvatarById(user?.avatar);
      setImage(avatar);
    })();
  }, [user]);

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
        <LinkWrapper as={Link} to="/student/settings">
          <StyledIconDiv icon={NotificationIcon} />
          <p>Zarządzaj powiadomieniami</p>
        </LinkWrapper>
      </LinksWrapper>
    </PageWrapper>
  );
};

export default EditProfile;
