import { LinksHeading, LinkWrapper, MediaWrapper } from './NoLinks.styles';

const NoLinks = () => (
  <LinkWrapper data-testid="profile-no-links">
    <LinksHeading>Linki społecznościowe</LinksHeading>
    <MediaWrapper>Brak linków społecznościowych!</MediaWrapper>
  </LinkWrapper>
);

export default NoLinks;
