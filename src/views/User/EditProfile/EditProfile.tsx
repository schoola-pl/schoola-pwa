import styled from 'styled-components';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { storeRoot, useGetInterestedsQuery, useGetSocialsQuery } from 'store';
import { useAvatar } from 'hooks/useAvatar';
import { useUser } from 'hooks/useUser';

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

const EditProfile = () => {
  const user = useSelector((state: storeRoot) => state.user);
  const { getAvatarById } = useAvatar();
  const { findInterested } = useUser();
  const [image, setImage] = useState('');
  const interesteds = useGetInterestedsQuery({});
  //   const socials = useGetSocialsQuery(
  //     {
  //       userId: customUser?.TextSocials || user?.TextSocials || null
  //     },
  //     {
  //       refetchOnMountOrArgChange: true
  //     }
  //   );
  return (
    <PageWrapper>
      <InfoWrapper>
        <ProfilePictureWrapper>
          <ImageWrapper>
            <img
              src="https://cdn.galleries.smcloud.net/t/galleries/gf-S4wc-WrGJ-zerP_dwayne-johnson-the-rock-664x442-nocrop.jpg"
              alt="https://cdn.galleries.smcloud.net/t/galleries/gf-S4wc-WrGJ-zerP_dwayne-johnson-the-rock-664x442-nocrop.jpg"
            />
          </ImageWrapper>
        </ProfilePictureWrapper>
        <h1>Tomasz Jarosławski</h1>
        <label htmlFor="files">Zmień zdjęcie profilowe</label>
        <input id="files" type="file" />
      </InfoWrapper>
    </PageWrapper>
  );
};

export default EditProfile;
