import styled from 'styled-components';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { storeRoot, useGetInterestedsQuery, useGetSocialsQuery } from 'store';
import { useAvatar } from 'hooks/useAvatar';
import { useUser } from 'hooks/useUser';

export const PageWrapper = styled.div`
  //   transform: translateY(-10%);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

// const ProfilePicture = styled.div`
//   width: 10rem;
//   height: 10rem;
//   border-radius: 10rem;
//   border: none;
//   overflow: hidden;

//   img {
//     min-width: 100%;
//     background-color: white;
//     height: 100%;
//     object-fit: cover;
//   }
// `;

export const StyledPicture = styled.div`
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

export const Wrapper = styled.div`
  width: 90%;
  height: 90%;
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
      <StyledPicture>
        <Wrapper>
          <img
            src="https://cdn.galleries.smcloud.net/t/galleries/gf-S4wc-WrGJ-zerP_dwayne-johnson-the-rock-664x442-nocrop.jpg"
            alt="https://cdn.galleries.smcloud.net/t/galleries/gf-S4wc-WrGJ-zerP_dwayne-johnson-the-rock-664x442-nocrop.jpg"
          />
        </Wrapper>
      </StyledPicture>
      <input type="file" />
      <h1>EditProfile</h1>
    </PageWrapper>
  );
};

export default EditProfile;
