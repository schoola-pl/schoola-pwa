import { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { storeRoot, useGetSocialsQuery } from 'store';
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

const Heading = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

interface Props {
  icon: string;
}

const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;

  li {
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.innerStyles.box};
    background-color: white;
    width: 90%;
    display: grid;
    position: relative;
    grid-template-columns: 80% 30%;
    align-items: center;
  }

  h1 {
    margin-left: 1rem;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;

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

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledIconDiv = styled(IconDiv)`
  padding: 1.8rem;
  margin-right: 3rem;
`;

const EditSocialLinks = () => {
  const user = useSelector((state: storeRoot) => state.user);
  const socials = useGetSocialsQuery({
    userId: user?.TextSocials || null
  });
  const [isInput, setToInput] = useState({ isEdit: false, id: 0 });
  const handleChangeToInput = (id: number) => {
    setToInput({ isEdit: true, id: id });
  };

  return (
    <PageWrapper>
      <Heading>Edytuj linki społecznościowe</Heading>
      {socials.data && socials.data?.length > 0 ? (
        <>
          {socials.data.map((social) => (
            <LinksList>
              <li>
                {isInput.isEdit === true ? <input placeholder={`podaj link do ${social.platform}`} /> : <h1>{social.platform}</h1>}
                <IconsWrapper>
                  <StyledIconDiv as="button" onClick={() => handleChangeToInput(social.id)} icon={BlueEditIcon} />
                  <SocialMediaLink
                    target="_blank"
                    rel="noopener noreferrer"
                    key={social.id}
                    href={social.url}
                    icon={getIconForPlatform(social.platform)}
                  />
                </IconsWrapper>
              </li>
            </LinksList>
          ))}
        </>
      ) : (
        <h1>brak linków społecznościowych - dodaj</h1>
      )}
    </PageWrapper>
  );
};
export default EditSocialLinks;
