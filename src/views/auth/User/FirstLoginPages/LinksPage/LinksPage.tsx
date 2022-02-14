import React, { useEffect, useState, useRef } from 'react';
import AddIcon from 'assets/icons/AddIcon.svg';
import { Wrapper, Form, StyledInput, StyledSelect, StyledButton, LinkWrapper } from './Links.styles';
import GithubIcon from 'assets/icons/SocialMediaIcons/GithubIcon.svg';
import FacebookIcon from 'assets/icons/SocialMediaIcons/FacebookIcon.svg';
import WebsiteIcon from 'assets/icons/SocialMediaIcons/WebsiteIcon.svg';
import InstagramIcon from 'assets/icons/SocialMediaIcons/InstagramIcon.svg';
import BlogIcon from 'assets/icons/SocialMediaIcons/BlogIcon.svg';
import SpotifyIcon from 'assets/icons/SocialMediaIcons/SpotifyIcon.svg';
import TwitterIcon from 'assets/icons/SocialMediaIcons/TwitterIcon.svg';
import TikTokIcon from 'assets/icons/SocialMediaIcons/TikTokIcon.svg';
interface props {
  setReadyState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const options = [
  {
    label: 'Facebook',
    icon: FacebookIcon,
    name: 'facebook'
  },
  {
    label: 'Instagram',
    icon: InstagramIcon,
    name: 'instagram'
  },
  {
    label: 'Spotify',
    icon: SpotifyIcon,
    name: 'spotify'
  },
  {
    label: 'TikTok',
    icon: TikTokIcon,
    name: 'tikTok'
  },
  {
    label: 'Website',
    icon: WebsiteIcon,
    name: 'website'
  },
  {
    label: 'Blog',
    icon: BlogIcon,
    name: 'blog'
  },
  {
    label: 'Twitter',
    icon: TwitterIcon,
    name: 'twitter'
  },
  {
    label: 'Github',
    icon: GithubIcon,
    name: 'github'
  }
];

const LinksPage: React.FC<props> = ({ setReadyState }) => {
  const [links, setLink] = useState<any>([]);
  const [selectedValue, setSelectedValue] = useState('');
  const inputRef = useRef<any>(null);

  useEffect(() => {
    setReadyState(true);
  }, []);

  const handleChange = (e: any) => {
    setSelectedValue(e.target.name);
    console.log(selectedValue);
  };

  const handleAddLink = (e: any) => {
    e.preventDefault();
    setLink([...links, { selectedOption: selectedValue, link: inputRef.current.value }]);
  };

  return (
    <Wrapper>
      <h1>Dodaj linki społecznościowe</h1>
      <Form onSubmit={handleAddLink}>
        <StyledSelect placeholder="Wybierz" onChange={handleChange}>
          {options.map((option) => (
            <option value={option.name}>{option.name}</option>
          ))}
        </StyledSelect>
        <StyledInput type="text" ref={inputRef} placeholder="Link" />
        <StyledButton icon={AddIcon} type="submit" />
      </Form>
      <>
        {links.map((link: any) => (
          <LinkWrapper as="a" href={link.link} target="_blank" rel="noopener noreferrer">
            <h1>{link.selectedOption}</h1>
            <p>{link.link}</p>
          </LinkWrapper>
        ))}
      </>
    </Wrapper>
  );
};

export default LinksPage;
