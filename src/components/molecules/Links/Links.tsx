import { LinkWrapper, SocialMediaLink, LinksHeading, SocialMediaWrapper } from './Links.styles';
interface Props {
  socials: any;
}

const Links: React.FC<Props> = ({ socials }) => (
  <LinkWrapper>
    <LinksHeading>Linki</LinksHeading>
    <SocialMediaWrapper>
      {socials.map((social: any) => (
        <SocialMediaLink target="_blank" rel="noopener noreferrer" href={social.link} icon={social.icon} />
      ))}
    </SocialMediaWrapper>
  </LinkWrapper>
);

export default Links;
