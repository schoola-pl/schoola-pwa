import styled from 'styled-components';
import { PageWrapper, Heading, LinksList, InfoWrapper } from './EditSocialLinks.styles';
import { useSelector } from 'react-redux';
import { storeRoot, useGetSocialsQuery } from 'store';
import SocialLinkCard from 'components/atoms/SocialLinkCard/SocialLinkCard';
import { useModal } from 'hooks/useModal';
import Button from 'components/atoms/Button/Button';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
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
                <div>lolek</div> <Button onClick={closeModal}>zamknij</Button>
              </ModalWrapper>,
              'dodaj nowy link społ'
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
