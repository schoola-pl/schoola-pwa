import React from 'react';
import { Grid, Wrapper } from 'views/auth/User/Profile/Profile.styles';
import ProfileClass from 'components/molecules/ProfileClass/ProfileClass';
import Roles from 'components/atoms/Roles/Roles';
import Person from 'components/atoms/Person/Person';
import Interests from 'components/atoms/Interests/Interests';
import Links from 'components/molecules/Links/Links';

const Home: React.FC = () => {
  return (
    <Wrapper>
      <Grid>
        <ProfileClass userClass={'4A'} />
        <Roles role={'Student'} />
        <Person userName={'jakub_fedoszczak'} userProfilePicture={''} description={'Opis usera 122'} />
      </Grid>
      <Interests interests={['fdsdf']} />
      <Links socials={['dsfdas']} />
    </Wrapper>
  );
};

export default Home;
