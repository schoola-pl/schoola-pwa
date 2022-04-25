import styled from 'styled-components';
import IconDiv from 'components/atoms/IconDiv/IconDiv';

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledIconDiv = styled(IconDiv)`
  padding: 1.8rem;
  margin-right: 3rem;
`;

export const SocialMediaLink = styled.a<{ icon: string }>`
  height: 4rem;
  width: 4rem;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: 75%;
  background-position: center;
  cursor: pointer;
  border: none;
  display: block;

  @media (min-width: 400px) {
    height: 5rem;
    width: 5rem;
  }
`;

export const SocialPlatformHeading = styled.a`
  margin: 1.5rem 0 1.5rem 1rem;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: black;
  text-decoration: none;
`;
