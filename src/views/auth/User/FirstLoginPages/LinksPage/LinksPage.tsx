import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import GithubIcon from 'assets/icons/SocialMediaIcons/GithubIcon.svg';

interface props {
  setReadyState: React.Dispatch<React.SetStateAction<boolean>>;
}

const Form = styled.form<{ isVisible: boolean }>`
  display: ${({ isVisible }) => (isVisible ? 'block' : 'none')};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LinksPage: React.FC<props> = ({ setReadyState }) => {
  const [isVisible, setVisibility] = useState(false);
  const [link, setLink] = useState([]);

  useEffect(() => {
    setReadyState(true);
  }, []);

  const handleAddLink = () => {
    setVisibility(!isVisible);
  };

  return (
    <Wrapper>
      <h1>Dodaj linki społecznościowe</h1>
      <Form isVisible={isVisible}>
        <select name="" id=""></select>
        <input type="text" />
        <button onClick={handleAddLink}>dodaj</button>
      </Form>
      <button onClick={handleAddLink}>Dodaj</button>
    </Wrapper>
  );
};

export default LinksPage;
