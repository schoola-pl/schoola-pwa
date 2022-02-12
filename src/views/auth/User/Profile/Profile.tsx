import styled from 'styled-components';
import UserTemplate from 'components/templates/UserTemplate/UserTemplate';
import Person from 'components/atoms/Person/Person';
import Interests from 'components/atoms/Interests/Interests';
import Roles from 'components/atoms/Roles/Roles';
import ProfileClass from 'components/molecules/ProfileClass/ProfileClass';
import SpotifyIcon from 'assets/icons/SocialMediaIcons/SpotifyIcon.svg';
import InstagramIcon from 'assets/icons/SocialMediaIcons/InstagramIcon.svg';
import GithubIcon from 'assets/icons/SocialMediaIcons/GithubIcon.svg';
import FacebookIcon from 'assets/icons/SocialMediaIcons/FacebookIcon.svg';
import WebsiteIcon from 'assets/icons/SocialMediaIcons/WebsiteIcon.svg';

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

const LinkWrapper = styled.div`
  display: flex;
  text-align: left;
  width: 100%;
  flex-direction: column;
  transform: translateY(-40%);
`;

interface Props {
  icon: string;
}

const SocialMediaLink = styled.a<Props>`
  height: 4rem;
  width: 4rem;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: 75%;
  background-position: center;
  cursor: pointer;
  border: none;
  display: block;
`;

const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const LinksHeading = styled.h1`
  padding-left: 2.5rem;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
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
        <LinkWrapper>
          <LinksHeading>Linki</LinksHeading>
          <SocialMediaWrapper>
            <SocialMediaLink target="_blank" rel="noopener noreferrer" href="https://spotify.com" icon={SpotifyIcon} />
            <SocialMediaLink target="_blank" rel="noopener noreferrer" href="https://instagram.com" icon={InstagramIcon} />
            <SocialMediaLink target="_blank" rel="noopener noreferrer" href="https://github.com" icon={GithubIcon} />
            <SocialMediaLink target="_blank" rel="noopener noreferrer" href="https://facebook.com" icon={FacebookIcon} />
            <SocialMediaLink target="_blank" rel="noopener noreferrer" href="https://website.com" icon={WebsiteIcon} />
          </SocialMediaWrapper>
        </LinkWrapper>
      </Wrapper>
    </UserTemplate>
  );
};

export default Profile;
