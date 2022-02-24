import React, { useEffect, useState } from 'react';
import { Grid, Wrapper } from 'views/auth/User/Profile/Profile.styles';
import ProfileClass from 'components/molecules/ProfileClass/ProfileClass';
import Roles from 'components/atoms/Roles/Roles';
import Person from 'components/atoms/Person/Person';
import Interests from 'components/atoms/Interests/Interests';
import Links from 'components/molecules/Links/Links';
import { useSelector } from 'react-redux';
import { storeRoot, useGetInterestedsQuery } from 'store';
import { useAvatar } from 'hooks/useAvatar';
import { useUser } from 'hooks/useUser';

const Home: React.FC = () => {
  const user = useSelector((state: storeRoot) => state.user);
  const { getAvatarById } = useAvatar();
  const { findInterested, socials } = useUser();
  const [image, setImage] = useState('');
  const interesteds = useGetInterestedsQuery({});

  useEffect(() => {
    if (user) {
      (async () => {
        const avatar = await getAvatarById(user.avatar);
        setImage(avatar);
      })();
    }
  }, [user]);

  if (!user || !interesteds.data) return <p>Pobieranie danych...</p>;

  return (
    <Wrapper>
      <Grid>
        <ProfileClass userClass={user.TextClassName} />
        <Roles role={user.TextRole === 'Moderator' ? 'Samorząd' : 'Uczeń'} />
        <Person userName={`${user.first_name} ${user.last_name}`} userProfilePicture={image} description={user.description} />
      </Grid>
      <Interests interests={findInterested(user.TextInteresteds.split(';'), interesteds.data)} />
      {socials.length > 0 && <Links socials={socials} />}
    </Wrapper>
  );
};

export default Home;
