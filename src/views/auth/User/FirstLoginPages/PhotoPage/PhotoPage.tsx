import { StyledInput, Wrapper } from './PhotoPage.styles';
import React, { useEffect, useState } from 'react';
import { storeRoot, updateUser, useUpdateUserMutation } from 'store';
import { useDispatch, useSelector } from 'react-redux';
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
  const [isLoading, setLoadingState] = useState(false);
  const { saveAvatar, uploadProgress } = useAvatar();
  const [updateUserDB] = useUpdateUserMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    setReadyState(false);
  }, []);

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
      await saveAvatar(photo);
    }
  };

  const confirmChanges = async () => {
    if (photo && description && user) {
      setLoadingState(true);
      await sendPhoto();
      await updateUserDB({
        id: user.id,
        data: {
          description
        }
      });
      dispatch(
        updateUser({
          updated: {
            description
          }
        })
      );
      setLoadingState(false);
      setIsSuccess(true);
      setReadyState(true);
    }
  };

  return (
    <Wrapper>
      <h1>Dodaj swoje zdjęcie profilowe</h1>
      <StyledInput disabled={isSuccess} type="file" onChange={getPhotoFromForm} accept=".jpg,.jpeg,.png,.webp" />
      <textarea disabled={isSuccess} onChange={changeDescription} placeholder={`Opowiedz innym o sobie ${user?.first_name}!`} value={description} />
      <ErrorParagraph style={{ marginTop: '0.8rem' }}>{error}</ErrorParagraph>
      <Button
        isDisabled={!photo || !description || !!error || isSuccess || description.length < 20 || isLoading}
        onClick={confirmChanges}
        style={{ marginTop: '1rem' }}
      >
        {isSuccess ? 'Zapisano zmiany!' : !isLoading ? 'Zapisz zmiany' : `${uploadProgress}%`}
      </Button>
    </Wrapper>
  );
};

export default PhotoPage;
