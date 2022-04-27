import styled from 'styled-components';
import { PageWrapper, Heading, LinksList, InfoWrapper } from './EditSocialLinks.styles';
import { useSelector } from 'react-redux';
import { storeRoot, useGetSocialsQuery } from 'store';
import SocialLinkCard from 'components/atoms/SocialLinkCard/SocialLinkCard';
import { useModal } from 'hooks/useModal';
import Button from 'components/atoms/Button/Button';
import { options } from 'views/User/FirstLoginPages/LinksPage/options';
import Input from 'components/atoms/Input/Input';
import Select from 'components/atoms/Select/Select';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    align-items: center;
    width: 80%;
  }

  div > button {
    margin-left: 0.5rem;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  width: 80%;
`;

const StyledSelect = styled(Select)`
  width: 100%;
  margin-bottom: 1.5rem;
`;

const EditSocialLinks = () => {
  const user = useSelector((state: storeRoot) => state.user);
  const socials = useGetSocialsQuery({
    userId: user?.TextSocials || null
  });
  const { closeModal, openModal } = useModal();

  return (
    <PageWrapper>
      <InfoWrapper>
        <Heading>Edytuj linki społecznościowe</Heading>
        <button
          onClick={() =>
            openModal(
              <ModalWrapper>
                <StyledForm>
                  <StyledSelect>
                    {options.map((option) => (
                      <option value={option.name}>{option.label}</option>
                    ))}
                  </StyledSelect>
                  <Input type="url" placeholder="Podaj link do platformy" />
                </StyledForm>
                <div>
                  <Button>Dodaj</Button>
                  <Button isRed onClick={closeModal}>
                    Anuluj
                  </Button>
                </div>
              </ModalWrapper>,
              'Nowy link'
            )
          }
        >
          Dodaj
        </button>
      </InfoWrapper>
      {socials.data && socials.data?.length > 0 ? (
        <>
          {socials.data.map((social) => (
            <LinksList>
              <SocialLinkCard social={social} />
            </LinksList>
          ))}
        </>
      ) : (
        <Heading small>brak linków społecznościowych</Heading>
      )}
    </PageWrapper>
  );
};
export default EditSocialLinks;
