import React, { useEffect, useRef, useState } from 'react';
import AddIcon from 'assets/icons/AddIcon.svg';
import { Form, LinkWrapper, StyledButton, StyledInput, StyledSelect, Wrapper } from './Links.styles';
import { options } from './options';

interface props {
  setReadyState: React.Dispatch<React.SetStateAction<boolean>>;
}

interface linkInterface {
  id: number;
  platform: string;
  url: string;
}

const LinksPage: React.FC<props> = ({ setReadyState }) => {
  const [links, setLink] = useState<linkInterface[]>([]);
  const [selectedValue, setSelectedValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setReadyState(true);
  }, []);

  const handleChange = (e: any) => {
    setSelectedValue(e.target.value);
  };

  const handleAddLink = (e: any) => {
    e.preventDefault();
    if (links.length > 10) return;
    const link = {
      id: Math.round(Math.random() * 100),
      platform: selectedValue,
      url: inputRef.current?.value || 'https://app.schoola.pl/'
    };
    setLink([link, ...links]);
  };

  const deleteLink = (id: number) => {
    setLink(links.filter((link) => link.id !== id));
  };

  return (
    <Wrapper>
      <h1>Dodaj linki społecznościowe</h1>
      <Form onSubmit={handleAddLink}>
        <StyledSelect placeholder="Wybierz" onChange={handleChange}>
          {options.map((option) => (
            <option value={option.name}>{option.label}</option>
          ))}
        </StyledSelect>
        <StyledInput type="text" ref={inputRef} placeholder="Link" />
        <StyledButton icon={AddIcon} type="submit" />
      </Form>
      <>
        {links.map(({ id, platform, url }) => (
          <LinkWrapper key={id} as="a" href={url} target="_blank" rel="noopener noreferrer">
            <h1>{platform}</h1>
            <p>{url}</p>
          </LinkWrapper>
        ))}
      </>
    </Wrapper>
  );
};

export default LinksPage;
