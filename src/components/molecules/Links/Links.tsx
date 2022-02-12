import { LinkWrapper, SocialMediaLink, LinksHeading, SocialMediaWrapper } from './Links.styles';
import SpotifyIcon from 'assets/icons/SocialMediaIcons/SpotifyIcon.svg';
import InstagramIcon from 'assets/icons/SocialMediaIcons/InstagramIcon.svg';
import GithubIcon from 'assets/icons/SocialMediaIcons/GithubIcon.svg';
import FacebookIcon from 'assets/icons/SocialMediaIcons/FacebookIcon.svg';
import WebsiteIcon from 'assets/icons/SocialMediaIcons/WebsiteIcon.svg';

const Links = () => (
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
);

export default Links;
