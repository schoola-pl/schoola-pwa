import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { storeRoot, useGetSocialsQuery } from 'store';
import SocialLinkCard from 'components/atoms/SocialLinkCard/SocialLinkCard';

const Heading = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

const LinksList = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;

  li {
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.innerStyles.box};
    background-color: white;
    width: 90%;
    display: grid;
    position: relative;
    grid-template-columns: 80% 30%;
    align-items: center;
  }

  h1 {
    margin-left: 1rem;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const EditSocialLinks = () => {
  const user = useSelector((state: storeRoot) => state.user);
  const socials = useGetSocialsQuery({
    userId: user?.TextSocials || null
  });

  return (
    <PageWrapper>
      <Heading>Edytuj linki społecznościowe</Heading>
      {socials.data && socials.data?.length > 0 ? (
        <>
          {socials.data.map((social) => (
            <LinksList>
              <SocialLinkCard social={social} />
            </LinksList>
          ))}
        </>
      ) : (
        <h1>brak linków społecznościowych - dodaj</h1>
      )}
    </PageWrapper>
  );
};
export default EditSocialLinks;
