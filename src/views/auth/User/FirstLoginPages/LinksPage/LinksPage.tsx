import React, { useEffect, useState, useRef } from 'react';
import AddIcon from 'assets/icons/AddIcon.svg';
import { Wrapper, Form, StyledInput, StyledSelect, StyledButton, LinkWrapper } from './Links.styles';
import { options } from './options';
interface props {
  setReadyState: React.Dispatch<React.SetStateAction<boolean>>;
}

const LinksPage: React.FC<props> = ({ setReadyState }) => {
  const [links, setLink] = useState<any>([]);
  const [selectedValue, setSelectedValue] = useState('');
  const inputRef = useRef<any>(null);

  useEffect(() => {
    setReadyState(true);
  }, []);

  const handleChange = (e: any) => {
    setSelectedValue(e.target.value);
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
            <option value={option.name}>{option.label}</option>
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
