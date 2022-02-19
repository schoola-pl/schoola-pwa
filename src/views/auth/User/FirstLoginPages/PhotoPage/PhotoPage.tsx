import { StyledInput, Wrapper } from './PhotoPage.styles';
import React, { useState } from 'react';
import { storeRoot } from 'store';
import { useSelector } from 'react-redux';
import Button from 'components/atoms/Button/Button';
import ErrorParagraph from 'components/atoms/ErrorParagraph/ErrorParagraph';
import { useAvatar } from 'hooks/useAvatar';

interface props {
  setReadyState: React.Dispatch<React.SetStateAction<boolean>>;
}

const PhotoPage: React.FC<props> = ({ setReadyState }) => {
  const user = useSelector((state: storeRoot) => state.user);
  const [photo, setPhoto] = useState<FormData | null>(null);
  const [description, setDescription] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const { saveAvatar } = useAvatar();

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
        // Parameters below are optional, add them if STRAPI ISSUE #11957 is resolved
        // --------------------------------------------------
        // fd.append('refId', user.id);
        // fd.append('ref', 'plugin::users-permissions.user');
        // fd.append('field', 'avatar');
        setPhoto(fd);
      } else {
        setPhoto(null);
        setError('Rozszerzenia dozwolone: .jpg, .png, .webp, .jpeg');
      }
    }
  };

  const sendPhoto = async () => {
    if (photo) {
      setError(null);
      saveAvatar(photo);
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
        isDisabled={!photo || !description || !!error || isSuccess || description.length < 20}
        onClick={confirmChanges}
        style={{ marginTop: '1rem' }}
      >
        {isSuccess ? 'Zapisano zmiany!' : 'Zapisz zmiany'}
      </Button>
    </Wrapper>
  );
};

export default PhotoPage;
