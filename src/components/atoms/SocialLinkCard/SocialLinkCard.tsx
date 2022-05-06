import React, { useState } from 'react';
import {
  DeleteButton,
  EditButton,
  IconsWrapper,
  LittleCard,
  PlatformInfo,
  SocialMediaLink,
  SocialPlatformHeading,
  StyledInput
} from './SocialLinkCard.styles';
import FacebookIcon from 'assets/icons/SocialMediaIcons/FacebookIcon.svg';
import InstagramIcon from 'assets/icons/SocialMediaIcons/InstagramIcon.svg';
import BlogIcon from 'assets/icons/SocialMediaIcons/BlogIcon.svg';
import GithubIcon from 'assets/icons/SocialMediaIcons/GithubIcon.svg';
import SpotifyIcon from 'assets/icons/SocialMediaIcons/SpotifyIcon.svg';
import TikTokIcon from 'assets/icons/SocialMediaIcons/TikTokIcon.svg';
import WebsiteIcon from 'assets/icons/SocialMediaIcons/WebsiteIcon.svg';
import TwitterIcon from 'assets/icons/SocialMediaIcons/TwitterIcon.svg';
import EditIcon from 'assets/icons/EditIcon.png';
import DeleteIcon from 'assets/icons/DeleteIcon.svg';
import AcceptIcon from 'assets/icons/AcceptIcon.png';
import CancelIcon from 'assets/icons/CancelIcon.png';
import { useForm } from 'react-hook-form';
import { storeRoot, useUpdateSocialMutation } from '../../../store';
import { useSelector } from 'react-redux';
import { upperFirstLetter } from '../../../helpers/text';
import { useUser } from '../../../hooks/useUser';

const getInfoForPlatform = (platform: string) => {
  switch (platform) {
    case 'facebook':
      return { icon: FacebookIcon, url: 'https://facebook.com/' };
    case 'twitter':
      return { icon: TwitterIcon, url: 'https://twitter.com/' };
    case 'instagram':
      return { icon: InstagramIcon, url: 'https://instgram.com/' };
    case 'spotify':
      return { icon: SpotifyIcon, url: 'https://spotify.com/' };
    case 'tiktok':
      return { icon: TikTokIcon, url: 'https://tiktok.com/' };
    case 'website':
      return { icon: WebsiteIcon, url: 'https://' };
    case 'blog':
      return { icon: BlogIcon, url: 'https://' };
    case 'github':
      return { icon: GithubIcon, url: 'https://github.com/' };
    default:
      return { icon: FacebookIcon, url: 'https://facebook.com/' };
  }
};

interface Props {
  social: {
    platform: string;
    id: number;
    url: string;
  };
  socials: {
    platform: string;
    id: number;
    url: string;
  }[];
}

const SocialLinkCard: React.FC<Props> = ({ social, socials }) => {
  const [isEdit, setEdition] = useState(false);
  const [updateLink] = useUpdateSocialMutation();
  const { handleSubmit, register, reset } = useForm();
  const user = useSelector((state: storeRoot) => state.user);
  const { deleteSocial } = useUser();

  const handleChangeLink = async ({ link }: { link: string }) => {
    if (link) {
      const { length, ...results } = socials.filter((s) => s.id === social.id);
      if (length > 0) {
        const result = results[0];
        const newUrl = getInfoForPlatform(social.platform).url + link;
        const newSocials = socials.filter((s) => s.id !== social.id).concat({ ...result, url: newUrl });
        await updateLink({
          socialsId: user?.TextSocials || null,
          data: newSocials
        });
        setEdition(false);
        reset();
      }
    }
  };

  return (
    <LittleCard as="form" onSubmit={handleSubmit(handleChangeLink)}>
      {isEdit ? (
        <div>
          <b>{getInfoForPlatform(social.platform).url}</b>
          <StyledInput placeholder={social.url.split('/')[3]} {...register('link', { required: true })} />
        </div>
      ) : (
        <PlatformInfo>
          <SocialMediaLink
            target="_blank"
            rel="noopener noreferrer"
            key={social.id}
            href={social.url}
            icon={getInfoForPlatform(social.platform).icon}
          />
          <SocialPlatformHeading href={social.url} target="_blank" rel="noopener noreferrer">
            {upperFirstLetter(social.platform)}
          </SocialPlatformHeading>
        </PlatformInfo>
      )}
      <IconsWrapper>
        {!isEdit ? <EditButton onClick={() => setEdition(true)} icon={EditIcon} /> : <EditButton icon={AcceptIcon} />}
        <DeleteButton
          onClick={() =>
            !isEdit
              ? deleteSocial(
                  {
                    platform: social.platform,
                    url: social.url
                  },
                  socials
                )
              : setEdition(false)
          }
          icon={!isEdit ? DeleteIcon : CancelIcon}
        />
      </IconsWrapper>
    </LittleCard>
  );
};

export default SocialLinkCard;
