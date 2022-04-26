import { PageWrapper, Heading, LinksList, InfoWrapper } from './EditSocialLinks.styles';
import { useSelector } from 'react-redux';
import { storeRoot, useGetSocialsQuery } from 'store';
import SocialLinkCard from 'components/atoms/SocialLinkCard/SocialLinkCard';
import { useModal } from 'hooks/useModal';

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
              <div>
                <div>lolek</div> <button onClick={closeModal}>zamknij</button>{' '}
              </div>,
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
