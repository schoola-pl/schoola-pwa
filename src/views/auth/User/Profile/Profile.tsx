import { Wrapper, Grid } from './Profile.styles';
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
import Links from 'components/molecules/Links/Links';

const userData = [
  {
    id: '8219730',
    userName: 'Krzysztof Ibisz',
    userProfilePicture:
      'https://s7.tvp.pl/images2/7/8/e/uid_78ea317e92356f6cd75b0ad95c3fbd7e1634707736779_width_1280_play_0_pos_0_gs_0_height_720_kuba-wojewodzki-fot-papmarcin-kmiecinski.jpg',
    description: 'Matematyczny geniusz',
    role: 'Uczeń',
    userClass: '2A',
    interests: ['Imprezy 🎉', 'Technologia 💻', 'Fizyka ⚛️', 'Gotowanie 🥘', 'Medytacja 🧘‍♂️'],
    socials: [
      {
        link: 'https://spotify.com/',
        icon: SpotifyIcon
      },
      {
        link: 'https://instagram.com/',
        icon: InstagramIcon
      },
      {
        link: 'https://website.com/',
        icon: WebsiteIcon
      },
      {
        link: 'https://facebook.com/',
        icon: FacebookIcon
      },
      {
        link: 'https://github.com/',
        icon: GithubIcon
      }
    ]
  }
];

const Profile = () => {
  return (
    <UserTemplate>
      {userData.map(({ userName, userProfilePicture, description, role, interests, userClass, socials }) => (
        <Wrapper>
          <Grid>
            <ProfileClass userClass={userClass} />
            <Roles role={role} />
            <Person userName={userName} userProfilePicture={userProfilePicture} description={description} />
          </Grid>
          <Interests interests={interests} />
          <Links socials={socials} />
        </Wrapper>
      ))}
    </UserTemplate>
  );
};

export default Profile;
