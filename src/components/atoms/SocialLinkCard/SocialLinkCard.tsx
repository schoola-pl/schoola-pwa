import { useState } from 'react';
import {
  SocialPlatformHeading,
  DeleteButton,
  EditButton,
  LittleCard,
  StyledInput,
  IconsWrapper,
  PlatformInfo,
  SocialMediaLink
} from './SocialLinkCard.styles';
import FacebookIcon from 'assets/icons/SocialMediaIcons/FacebookIcon.svg';
import InstagramIcon from 'assets/icons/SocialMediaIcons/InstagramIcon.svg';
import BlogIcon from 'assets/icons/SocialMediaIcons/BlogIcon.svg';
import GithubIcon from 'assets/icons/SocialMediaIcons/GithubIcon.svg';
import SpotifyIcon from 'assets/icons/SocialMediaIcons/SpotifyIcon.svg';
import TikTokIcon from 'assets/icons/SocialMediaIcons/TikTokIcon.svg';
import WebsiteIcon from 'assets/icons/SocialMediaIcons/WebsiteIcon.svg';
import TwitterIcon from 'assets/icons/SocialMediaIcons/TwitterIcon.svg';
import DeleteIcon from '../../../assets/icons/DeleteIcon.svg';
import EditIcon from '../../../assets/icons/EditIcon.png';

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

const SocialLinkCard: React.FC<Props> = ({ social }) => {
  const [isEdit, setEdition] = useState(false);
  return (
    <LittleCard>
      {isEdit === true ? (
        <StyledInput placeholder={`podaj link do ${social.platform}`} />
      ) : (
        <PlatformInfo>
          <SocialMediaLink target="_blank" rel="noopener noreferrer" key={social.id} href={social.url} icon={getIconForPlatform(social.platform)} />
          <SocialPlatformHeading href={social.url} target="_blank" rel="noopener noreferrer">
            {social.platform}
          </SocialPlatformHeading>
        </PlatformInfo>
      )}
      <IconsWrapper>
        <EditButton onClick={() => setEdition(!isEdit)} icon={EditIcon} />
        <DeleteButton icon={DeleteIcon} />
      </IconsWrapper>
    </LittleCard>
  );
};

export default SocialLinkCard;
