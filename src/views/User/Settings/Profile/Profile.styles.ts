import styled from 'styled-components';
import IconDiv from 'components/atoms/IconDiv/IconDiv';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  h1 {
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
  }
`;

export const ProfilePictureWrapper = styled.div`
  height: 10rem;
  width: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 10rem;
  background: linear-gradient(rgba(184, 208, 252, 1) 0%, rgba(91, 117, 166, 1) 0%, rgba(85, 171, 103, 1) 100%);

  &:hover {
    cursor: default;
  }
`;

export const ImageWrapper = styled.div`
  width: 9rem;
  height: 9rem;
  border-radius: inherit;
  border: none;
  overflow: hidden;

  &:hover {
    cursor: default;
  }

  img {
    min-width: 100%;
    background-color: white;
    height: 100%;
    object-fit: cover;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  h1 {
    margin: 1rem 0 0;
  }

  input {
    visibility: hidden;
  }

  label {
    font-size: ${({ theme }) => theme.fontSize.xs};
    color: ${({ theme }) => theme.colors.accentBlue};
    text-decoration: underline;
  }
`;

export const LinksWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const LinkWrapper = styled.div<{ useToggle?: boolean }>`
  position: relative;
  text-decoration: none;
  color: black;
  background-color: white;
  font-size: 1.48rem;
  height: 6rem;
  width: 100%;
  margin-bottom: 2rem;
  border-radius: 1.5rem;
  display: grid;
  grid-template-columns: ${({ useToggle }) => (useToggle ? '65px 170px 1fr' : '65px 170px 1fr')};
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.innerStyles.box};

  label {
    margin-left: auto;
    margin-right: 2rem;
  }

  &::after {
    content: '${({ useToggle }) => (useToggle ? null : '>')}';
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const StyledIconDiv = styled(IconDiv)`
  display: block;
  margin-left: 1.5rem;
  background-color: ${({ theme }) => theme.colors.lightPurple};
  height: 4.75rem;
  width: 4.75rem;
  border-radius: 1.5rem;
  background-size: 70%;
  position: relative;
`;
