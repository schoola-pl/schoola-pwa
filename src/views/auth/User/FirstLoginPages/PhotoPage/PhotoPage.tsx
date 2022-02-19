import { StyledInput, Wrapper } from './PhotoPage.styles';
import React, { useState } from 'react';
import { storeRoot } from 'store';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { getJWT } from 'helpers/jwt';
import Button from 'components/atoms/Button/Button';
import ErrorParagraph from 'components/atoms/ErrorParagraph/ErrorParagraph';

interface props {
  setReadyState: React.Dispatch<React.SetStateAction<boolean>>;
}

const PhotoPage: React.FC<props> = ({ setReadyState }) => {
  const user = useSelector((state: storeRoot) => state.user);
  const [photo, setPhoto] = useState<FormData | null>(null);
  const [description, setDescription] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const changeDescription = (e: any) => {
    const element = e.target as HTMLInputElement;
    if (element.value.length < 20) setError('Opis musi mieć conajmniej 20 znaków');
    else setError(null);
    setDescription(element.value);
  };

  const getPhotoFromForm = (event: any) => {
    const ev = event as InputEvent;
    if (ev.target && user) {
      setError(null);
      const input = ev.target as HTMLInputElement;
      const files: FileList | null = input.files;
      if (files && /^.+\.(jpg|png|webp|jpeg)$/i.test(files[0].name)) {
        const fd = new FormData();
        fd.append('files', files[0], `avatar-${user.username}-${user.id}`);
        fd.append('refId', user.id);
        fd.append('ref', 'plugin::users-permissions.user');
        fd.append('field', 'avatar');
        setPhoto(fd);
      } else {
        setPhoto(null);
        setError('Rozszerzenia dozwolone: .jpg, .png, .webp, .jpeg');
      }
    }
  };

  const sendPhoto = () => {
    if (photo && user) {
      setError(null);
      axios.post(`${process.env.REACT_APP_BACKEND_BASE_URL}/upload`, photo, {
        headers: {
          Authorization: `Bearer ${getJWT()}`,
          'Content-Type': 'multipart/form-data'
        }
      });
    }
  };

  const confirmChanges = () => {
    if (photo && description) {
      setReadyState(true);
      sendPhoto();
      setIsSuccess(true);
    }
  };

  return (
    <Wrapper>
      <h1>Dodaj swoje zdjęcie profilowe</h1>
      <StyledInput disabled={isSuccess} type="file" onChange={getPhotoFromForm} accept=".jpg,.jpeg,.png,.webp" />
      <textarea disabled={isSuccess} onChange={changeDescription} placeholder={`Opowiedz innym o sobie ${user?.first_name}!`}>
        {description}
      </textarea>
      <ErrorParagraph style={{ marginTop: '0.8rem' }}>{error}</ErrorParagraph>
      <Button
        isDisabled={!photo || !description || error || isSuccess || description.length < 20}
        onClick={confirmChanges}
        style={{ marginTop: '1rem' }}
      >
        {isSuccess ? 'Zapisano zmiany!' : 'Zapisz zmiany'}
      </Button>
    </Wrapper>
  );
};

export default PhotoPage;
