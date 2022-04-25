import { PageWrapper, Heading, LinksList } from './EditSocialLinks.styles';
import { useSelector } from 'react-redux';
import { storeRoot, useGetSocialsQuery } from 'store';
import SocialLinkCard from 'components/atoms/SocialLinkCard/SocialLinkCard';

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
