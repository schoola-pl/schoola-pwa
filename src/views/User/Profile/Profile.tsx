import React, { useEffect, useState } from 'react';
import { Grid, Wrapper } from 'views/User/Profile/Profile.styles';
import ProfileClass from 'components/molecules/ProfileClass/ProfileClass';
import Roles from 'components/atoms/Roles/Roles';
import Person from 'components/atoms/Person/Person';
import Interests from 'components/atoms/Interests/Interests';
import Links from 'components/molecules/Links/Links';
import { useSelector } from 'react-redux';
import { storeRoot, useGetInterestedsQuery, useGetSocialsQuery } from 'store';
import { useAvatar } from 'hooks/useAvatar';
import { useUser } from 'hooks/useUser';
import { authUser } from '../../../types/auth';

interface props {
  customUser?: authUser;
}

const Profile: React.FC<props> = ({ customUser }) => {
  const user = useSelector((state: storeRoot) => state.user);
  const { getAvatarById } = useAvatar();
  const { findInterested } = useUser();
  const [image, setImage] = useState('');
  const interesteds = useGetInterestedsQuery({});
  const socials = useGetSocialsQuery(
    {
      userId: customUser?.TextSocials || user?.TextSocials || null
    },
    {
      refetchOnMountOrArgChange: true
    }
  );

  useEffect(() => {
    if (customUser || user) {
      (async () => {
        const avatar = await getAvatarById(customUser?.avatar || user?.avatar);
        setImage(avatar);
      })();
    }
  }, [customUser, user]);

  if (!user || !interesteds.data || !image) return <p>Pobieranie danych...</p>;

  return (
    <Wrapper>
      <Grid>
        <ProfileClass userClass={customUser?.TextClassName || user.TextClassName} />
        <Roles role={(customUser?.TextRole || user.TextRole) === 'Moderator' ? 'Samorząd' : 'Uczeń'} />
        <Person
          userName={`${customUser?.first_name || user.first_name} ${customUser?.last_name || user.last_name}`}
          userProfilePicture={image}
          description={customUser?.description || user.description}
        />
      </Grid>
      <div>
        <Interests interests={findInterested(customUser?.TextInteresteds.split(';') || user.TextInteresteds.split(';'), interesteds.data)} />
        {socials.data && <Links socials={socials.data} />}
      </div>
    </Wrapper>
  );
};

export default Profile;
