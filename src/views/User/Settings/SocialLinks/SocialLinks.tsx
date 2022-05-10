import { Heading, InfoWrapper, LinksList, ModalWrapper, PageWrapper, StyledForm, StyledSelect } from './SocialLinks.styles';
import { useSelector } from 'react-redux';
import { storeRoot, useGetSocialsQuery } from 'store';
import SocialLinkCard from 'components/atoms/SocialLinkCard/SocialLinkCard';
import { useModal } from 'hooks/useModal';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import { options } from 'views/User/FirstLoginPages/LinksPage/options';
import { useForm } from 'react-hook-form';
import { useUser } from '../../../../hooks/useUser';

const SocialLinks = () => {
  const user = useSelector((state: storeRoot) => state.user);
  const socials = useGetSocialsQuery({
    userId: user?.TextSocials || null
  });
  const { closeModal, openModal } = useModal();
  const { register, handleSubmit, reset } = useForm();
  const { addSocial } = useUser();

  const handleAddLink = (data: { platform: string; url: string }) => {
    addSocial(data, socials.data);
    closeModal();
    reset();
  };

  return (
    <PageWrapper>
      <InfoWrapper>
        <Heading>Edytuj linki społecznościowe</Heading>
        <button
          onClick={() =>
            openModal(
              <ModalWrapper>
                <StyledForm onSubmit={handleSubmit(handleAddLink)}>
                  <StyledSelect {...register('platform', { required: true })}>
                    {options.map((option) => (
                      <option value={option.name}>{option.label}</option>
                    ))}
                  </StyledSelect>
                  <Input type="url" placeholder="Podaj link do platformy" {...register('url', { required: true })} />
                  <div>
                    <Button isRed onClick={closeModal}>
                      Anuluj
                    </Button>
                    <Button>Dodaj</Button>
                  </div>
                </StyledForm>
              </ModalWrapper>,
              'Dodaj nowy link'
            )
          }
        >
          Dodaj
        </button>
      </InfoWrapper>
      {socials.data && socials.data?.length > 0 ? (
        socials.data.map((social) => (
          <LinksList>
            <SocialLinkCard social={social} socials={socials?.data || []} />
          </LinksList>
        ))
      ) : (
        <Heading small>Brak linków społecznościowych</Heading>
      )}
    </PageWrapper>
  );
};
export default SocialLinks;
