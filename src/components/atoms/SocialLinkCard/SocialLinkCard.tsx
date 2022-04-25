import { useState } from 'react';
import styled from 'styled-components';
import IconDiv from 'components/atoms/IconDiv/IconDiv';
import BlueEditIcon from 'assets/icons/BlueEditIcon.svg';
import FacebookIcon from 'assets/icons/SocialMediaIcons/FacebookIcon.svg';
import InstagramIcon from 'assets/icons/SocialMediaIcons/InstagramIcon.svg';
import BlogIcon from 'assets/icons/SocialMediaIcons/BlogIcon.svg';
import GithubIcon from 'assets/icons/SocialMediaIcons/GithubIcon.svg';
import SpotifyIcon from 'assets/icons/SocialMediaIcons/SpotifyIcon.svg';
import TikTokIcon from 'assets/icons/SocialMediaIcons/TikTokIcon.svg';
import WebsiteIcon from 'assets/icons/SocialMediaIcons/WebsiteIcon.svg';
import TwitterIcon from 'assets/icons/SocialMediaIcons/TwitterIcon.svg';

const getIconForPlatform = (platform: string) => {
  switch (platform) {
    case 'facebook':
      return FacebookIcon;
    case 'twitter':
      return TwitterIcon;
    case 'instagram':
      return InstagramIcon;
    case 'spotify':
      return SpotifyIcon;
    case 'tiktok':
      return TikTokIcon;
    case 'website':
      return WebsiteIcon;
    case 'blog':
      return BlogIcon;
    case 'github':
      return GithubIcon;
    default:
      return FacebookIcon;
  }
};

interface Props {
  social: {
    platform: string;
    id: number;
    url: string;
  };
}

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledIconDiv = styled(IconDiv)`
  padding: 1.8rem;
  margin-right: 3rem;
`;

const SocialMediaLink = styled.a<{ icon: string }>`
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

  @media (min-width: 400px) {
    height: 5rem;
    width: 5rem;
  }
`;

const SocialLinkCard: React.FC<Props> = ({ social }) => {
  const [isEdit, setEdition] = useState(false);
  return (
    <li>
      {isEdit === true ? <input placeholder={`podaj link do ${social.platform}`} /> : <h1>{social.platform}</h1>}
      <IconsWrapper>
        <StyledIconDiv as="button" onClick={() => setEdition(!isEdit)} icon={BlueEditIcon} />
        <SocialMediaLink target="_blank" rel="noopener noreferrer" key={social.id} href={social.url} icon={getIconForPlatform(social.platform)} />
      </IconsWrapper>
    </li>
  );
};

export default SocialLinkCard;
