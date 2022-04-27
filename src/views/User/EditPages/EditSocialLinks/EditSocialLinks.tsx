import styled from 'styled-components';
import { PageWrapper, Heading, LinksList, InfoWrapper } from './EditSocialLinks.styles';
import { useSelector } from 'react-redux';
import { storeRoot, useGetSocialsQuery } from 'store';
import SocialLinkCard from 'components/atoms/SocialLinkCard/SocialLinkCard';
import { useModal } from 'hooks/useModal';
import Button from 'components/atoms/Button/Button';
import { options } from 'views/User/FirstLoginPages/LinksPage/options';
import Select from 'components/atoms/Select/Select';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    align-items: center;
  }

  div > button {
    margin-left: 0.5rem;
  }
`;

const StyledForm = styled.form``;

// const Select = styled.select`
//   border-radius: 1rem;
//   border: none;
//   box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
//   margin-right: 1rem;
//   background-color: white;
//   height: 4.25rem;
// `;

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
                  <Select>
                    {options.map((option) => (
                      <option value={option.name}>{option.label}</option>
                    ))}
                  </Select>
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
        <h1>
          brak linków społecznościowych - <button>dodaj</button>
        </h1>
      )}
    </PageWrapper>
  );
};
export default EditSocialLinks;
