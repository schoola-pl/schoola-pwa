import styled from 'styled-components';
import UserTemplate from 'components/templates/UserTemplate/UserTemplate';
import Person from 'components/atoms/Person/Person';
import Interests from 'components/atoms/Interests/Interests';
import Roles from 'components/atoms/Roles/Roles';
import ProfileClass from 'components/molecules/ProfileClass/ProfileClass';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  heigth: 100vh;
  justify-content: flex-start;
  align-items: center;
`;

export const Grid = styled.div`
  transform: translateY(-10%);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  padding: 3rem;
  grid-gap: 2rem;

  & > div:nth-child(3) {
    grid-row: 1/3;
    grid-column: 1/2;
  }
`;

const Profile = () => {
  return (
    <UserTemplate>
      <Wrapper>
        <Grid>
          <ProfileClass />
          <Roles />
          <Person />
        </Grid>
        <Interests />
      </Wrapper>
    </UserTemplate>
  );
};

export default Profile;
