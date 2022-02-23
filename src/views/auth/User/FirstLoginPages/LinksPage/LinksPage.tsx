import React, { useEffect, useState } from 'react';
import AddIcon from 'assets/icons/AddIcon.svg';
import { Form, LinkWrapper, StyledButton, StyledInput, StyledSelect, Wrapper } from './Links.styles';
import { useForm } from 'react-hook-form';
import { useUser } from 'hooks/useUser';
import { options } from 'views/auth/User/FirstLoginPages/LinksPage/options';

interface props {
  setReadyState: React.Dispatch<React.SetStateAction<boolean>>;
}

interface linkInterface {
  id?: number;
  platform: string;
  url: string;
}

const LinksPage: React.FC<props> = ({ setReadyState }) => {
  const [links, setLink] = useState<linkInterface[]>([]);
  const { register, handleSubmit, reset } = useForm();
  const { addSocial, deleteSocial } = useUser();

  useEffect(() => {
    setReadyState(true);
  }, []);

  const handleAddLink = ({ platform, url }: { [k: string]: string }) => {
    if (links.length > 5) return;
    reset();
    const link: linkInterface = {
      id: links.length + 1,
      platform,
      url
    };
    setLink([link, ...links]);
    addSocial(link, links);
  };

  const deleteLink = (link: { id?: number; platform: string; url: string }) => {
    const { id } = link;
    deleteSocial(link, links);
    setLink(links.filter((link) => link.id !== id));
  };

  return (
    <Wrapper>
      <h1>Dodaj linki społecznościowe</h1>
      <Form onSubmit={handleSubmit(handleAddLink)}>
        <StyledSelect
          placeholder="Wybierz"
          {...register('platform', {
            required: true
          })}
        >
          {options.map((option) => (
            <option value={option.name}>{option.label}</option>
          ))}
        </StyledSelect>
        <StyledInput
          type="url"
          placeholder="Link URL do twojego profilu!"
          {...register('url', {
            required: true,
            pattern: /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi
          })}
        />
        <StyledButton icon={AddIcon} type="submit" />
      </Form>
      {links.map(({ id, platform, url }) => (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <LinkWrapper key={id} as="a" href={url} target="_blank" rel="noopener noreferrer">
            <h1>{platform}</h1>
            <p>{url}</p>
          </LinkWrapper>
          <p style={{ margin: '0 0 0 1rem', width: 'fit-content', fontSize: '2rem' }} onClick={() => deleteLink({ id, platform, url })}>
            X
          </p>
        </div>
      ))}
    </Wrapper>
  );
};

export default LinksPage;
