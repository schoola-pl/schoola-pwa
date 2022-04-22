import styled from 'styled-components';

export const LinkWrapper = styled.div`
  display: flex;
  text-align: left;
  width: 100%;
  flex-direction: column;
  justify-content: center;
`;

interface Props {
  icon: string;
}

export const SocialMediaLink = styled.a<Props>`
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

export const SocialMediaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export const LinksHeading = styled.h1`
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;
