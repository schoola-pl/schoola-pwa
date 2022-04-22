import { LinksHeading, LinkWrapper, SocialMediaLink, SocialMediaWrapper } from './Links.styles';
import React from 'react';
import FacebookIcon from 'assets/icons/SocialMediaIcons/FacebookIcon.svg';
import InstagramIcon from 'assets/icons/SocialMediaIcons/InstagramIcon.svg';
import BlogIcon from 'assets/icons/SocialMediaIcons/BlogIcon.svg';
import GithubIcon from 'assets/icons/SocialMediaIcons/GithubIcon.svg';
import SpotifyIcon from 'assets/icons/SocialMediaIcons/SpotifyIcon.svg';
import TikTokIcon from 'assets/icons/SocialMediaIcons/TikTokIcon.svg';
import WebsiteIcon from 'assets/icons/SocialMediaIcons/WebsiteIcon.svg';
import TwitterIcon from 'assets/icons/SocialMediaIcons/TwitterIcon.svg';

interface Props {
  socials: { id: number; platform: string; url: string }[];
}

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

const Links: React.FC<Props> = ({ socials }) => (
  <LinkWrapper>
    <LinksHeading>Linki społecznościowe</LinksHeading>
    <SocialMediaWrapper data-testid="profile-links">
      {socials.map((social) => (
        <SocialMediaLink target="_blank" rel="noopener noreferrer" key={social.id} href={social.url} icon={getIconForPlatform(social.platform)} />
      ))}
    </SocialMediaWrapper>
  </LinkWrapper>
);

export default Links;
