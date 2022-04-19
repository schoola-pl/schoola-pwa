import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { storeRoot, useGetSocialsQuery } from 'store';
import FacebookIcon from 'assets/icons/SocialMediaIcons/FacebookIcon.svg';
import InstagramIcon from 'assets/icons/SocialMediaIcons/InstagramIcon.svg';
import BlogIcon from 'assets/icons/SocialMediaIcons/BlogIcon.svg';
import GithubIcon from 'assets/icons/SocialMediaIcons/GithubIcon.svg';
import SpotifyIcon from 'assets/icons/SocialMediaIcons/SpotifyIcon.svg';
import TikTokIcon from 'assets/icons/SocialMediaIcons/TikTokIcon.svg';
import WebsiteIcon from 'assets/icons/SocialMediaIcons/WebsiteIcon.svg';
import TwitterIcon from 'assets/icons/SocialMediaIcons/TwitterIcon.svg';

const LinksList = styled.ul``;

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
  icon: string;
}

export const SocialMediaLink = styled.a<Props>`
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

const EditSocialLinks = () => {
  const user = useSelector((state: storeRoot) => state.user);
  const socials = useGetSocialsQuery({
    userId: user?.TextSocials || null
  });

  return (
    <div>
      <h1>Edytuj linki społecznościowe</h1>
      {socials.data && socials.data?.length > 0 ? (
        <div>
          {socials.data.map((social) => (
            <LinksList>
              <SocialMediaLink
                target="_blank"
                rel="noopener noreferrer"
                key={social.id}
                href={social.url}
                icon={getIconForPlatform(social.platform)}
              />
            </LinksList>
          ))}
        </div>
      ) : (
        <h1>brak linków społecznościowych - dodaj</h1>
      )}
    </div>
  );
};
export default EditSocialLinks;
