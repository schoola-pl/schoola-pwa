import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import AddIcon from 'assets/icons/AddIcon.svg';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';
import GithubIcon from 'assets/icons/SocialMediaIcons/GithubIcon.svg';
import FacebookIcon from 'assets/icons/SocialMediaIcons/FacebookIcon.svg';
import WebsiteIcon from 'assets/icons/SocialMediaIcons/WebsiteIcon.svg';
import InstagramIcon from 'assets/icons/SocialMediaIcons/InstagramIcon.svg';
import BlogIcon from 'assets/icons/SocialMediaIcons/BlogIcon.svg';
import SpotifyIcon from 'assets/icons/SocialMediaIcons/SpotifyIcon.svg';
import TwitterIcon from 'assets/icons/SocialMediaIcons/TwitterIcon.svg';
import TikTokIcon from 'assets/icons/SocialMediaIcons/TikTokIcon.svg';
import Select from 'react-select';

interface props {
  setReadyState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;

const StyledInput = styled.input`
  border: none;
  background-color: white;
  padding: 1.25rem;
  border-radius: 1rem;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  outline: none;
`;

const StyledSelect = styled(Select)`
  border-radius: 4rem;
  border: none;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  margin-right: 1rem;
  background-color: white;
`;

const StyledButton = styled(SidebarLink)`
  background-color: ${({ theme }) => theme.colors.accentGreen};
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 60%;
  height: 5rem;
  justify-content: flex-start;
  background-color: white;
  border-radius: 2rem;
  border: 2px solid ${({ theme }) => theme.colors.accentBlue};
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  margin-bottom: 0.5rem;

  p {
    padding-right: 1rem;
  }
`;

const options = [
  {
    label: 'facebook',
    icon: FacebookIcon,
    value: 1
  },
  {
    label: 'instagram',
    icon: InstagramIcon,
    value: 2
  },
  {
    label: 'spotify',
    icon: SpotifyIcon,
    value: 3
  },
  {
    label: 'tikTok',
    icon: TikTokIcon,
    value: 4
  },
  {
    label: 'website',
    icon: WebsiteIcon,
    value: 5
  },
  {
    label: 'blog',
    icon: BlogIcon,
    value: 6
  },
  {
    label: 'twitter',
    icon: TwitterIcon,
    value: 7
  },
  {
    label: 'github',
    icon: GithubIcon,
    value: 8
  }
];

const LinksPage: React.FC<props> = ({ setReadyState }) => {
  const [isVisible, setVisibility] = useState(false);
  const [link, setLink] = useState([]);
  const [selectedValue, setSelectedValue] = useState();

  useEffect(() => {
    setReadyState(true);
  }, []);

  const handleAddLink = () => {
    setVisibility(!isVisible);
  };

  const handleChange = (e: any) => {
    setSelectedValue(e.value);
    console.log(e.value);
  };

  return (
    <Wrapper>
      <h1>Dodaj linki społecznościowe</h1>
      <Form>
        <StyledSelect placeholder="Wybierz" options={options} onChange={handleChange} value={options.find((obj) => obj.value === selectedValue)} />
        <StyledInput type="text" placeholder="Link" />
        <StyledButton icon={AddIcon} onClick={handleAddLink} />
      </Form>
      <LinkWrapper>
        <SidebarLink as="a" href="link" icon={GithubIcon} />
        <p>github.com/kabubas</p>
      </LinkWrapper>
    </Wrapper>
  );
};

export default LinksPage;
