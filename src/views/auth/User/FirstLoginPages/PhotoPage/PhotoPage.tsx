import { Wrapper, StyledInput } from './PhotoPage.styles';
import React, { useEffect } from 'react';

interface props {
  setReadyState: React.Dispatch<React.SetStateAction<boolean>>;
}

const PhotoPage: React.FC<props> = ({ setReadyState }) => {
  useEffect(() => {
    setReadyState(true);
  }, []);

  return (
    <Wrapper>
      <h1>Dodaj swoje zdjęcie profilowe</h1>
      <StyledInput type="file" />
      <textarea name="" id="" placeholder="Dodaj swój opis"></textarea>
    </Wrapper>
  );
};

export default PhotoPage;
