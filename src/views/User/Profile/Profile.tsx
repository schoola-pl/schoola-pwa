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
import NoLinks from 'components/atoms/NoLinks/NoLinks';

const Home: React.FC = () => {
  const user = useSelector((state: storeRoot) => state.user);
  const { getAvatarById } = useAvatar();
  const { findInterested } = useUser();
  const [image, setImage] = useState('');
  const interesteds = useGetInterestedsQuery({});
  const socials = useGetSocialsQuery(
    {
      userId: user?.TextSocials || null
    },
    {
      refetchOnMountOrArgChange: true
    }
  );

  useEffect(() => {
    if (user) {
      (async () => {
        const avatar = await getAvatarById(user.avatar, 'thumbnail');
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
      <div>
        <Interests interests={findInterested(user.TextInteresteds.split(';'), interesteds.data)} />
        {socials.data && socials.data?.length > 0 ? <Links socials={socials.data} /> : <NoLinks />}
      </div>
    </Wrapper>
  );
};

export default Home;
