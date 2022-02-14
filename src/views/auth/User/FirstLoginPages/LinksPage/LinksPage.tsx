import React, { useEffect, useState, useRef } from 'react';
import AddIcon from 'assets/icons/AddIcon.svg';
import GithubIcon from 'assets/icons/SocialMediaIcons/GithubIcon.svg';
import { options } from './options';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';
import { Wrapper, Form, StyledInput, StyledSelect, StyledButton, LinkWrapper } from './Links.styles';
interface props {
  setReadyState: React.Dispatch<React.SetStateAction<boolean>>;
}

const LinksPage: React.FC<props> = ({ setReadyState }) => {
  const [isVisible, setVisibility] = useState(false);
  const [link, setLink] = useState<any>([]);
  const [selectedValue, setSelectedValue] = useState('');
  const inputRef = useRef<any>(null);

  useEffect(() => {
    setReadyState(true);
  }, []);

  const handleChange = (e: any) => {
    setSelectedValue(e.value);
    console.log(selectedValue);
  };

  const handleAddLink = (e: any) => {
    e.preventDefault();
    setLink({ selectedOption: selectedValue, link: inputRef.current.value });
  };

  return (
    <Wrapper>
      <h1>Dodaj linki społecznościowe</h1>
      <Form>
        <StyledSelect placeholder="Wybierz" options={options} onChange={handleChange} />
        <StyledInput type="text" ref={inputRef} placeholder="Link" />
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
