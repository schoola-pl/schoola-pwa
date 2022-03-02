import styled from 'styled-components';
import React from 'react';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';

type Props = {
  icon?: string;
  isSpotted: boolean;
};

interface ToggleMenuProps {
  icon?: string;
  onClick?: () => void;
}

interface WrapperProps {
  ref?: React.Ref<HTMLDivElement>;
}

export const QuestionWrapper = styled.div<WrapperProps>`
  position: relative;
  display: grid;
  min-height: 200px;
  grid-template-rows: 7rem 1fr 4rem;
  grid-gap: 1rem;
  align-items: center;
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 1.5rem;
  padding: 1rem;
  width: 100%;

  &:not(:last-child) {
    margin-bottom: 3rem;
  }
`;

export const StyledPicture = styled.div<{ random?: number }>`
  height: 5rem;
  width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10rem;
  background: linear-gradient(
    ${({ random }) => (random ? `${((Math.ceil(Math.random() * 360) * random) / random) * 2}deg` : `${Math.ceil(Math.random() * 360)}deg`)},
    rgba(184, 208, 252, 1) 0%,
    rgba(91, 117, 166, 1) 0%,
    rgba(85, 171, 103, 1) 100%
  );
`;

export const ProfilePicture = styled.div<Props>`
  width: 87%;
  height: 87%;
  border-radius: inherit;
  border: none;
  overflow: hidden;

  img {
    min-width: 100%;
    background-color: white;
    height: 100%;
    object-fit: cover;
    padding: ${({ isSpotted }) => (isSpotted ? '0.5rem' : 0)};
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 6.5rem 1fr 6.5rem;
  align-items: center;
  justify-content: center;
`;

export const QuestionInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  p,
  h1 {
    margin: 0;
  }

  h1 {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }
`;

export const QuestionInnerWrapper = styled.div`
  border-left: 3px solid ${({ theme }) => theme.colors.accentGreen};
  padding: 0.5rem 2.2rem 0.5rem 1rem;
  margin-left: 2.2rem;
  text-align: justify;
  height: max-content;

  p {
    margin: 0;
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  form {
    display: flex;
  }
`;

export const StyledComments = styled.div`
  color: black;
  text-decoration: none;
  justify-content: center;
  display: flex;
  align-items: center;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  width: 4.5rem;
  height: 4.5rem;
  position: relative;

  &::after {
    position: absolute;
    content: attr(data-comments-count);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -60%);
    color: white;
  }

  * {
    background-size: 100%;
  }
`;

export const LikeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input`
  border-radius: 1rem;
  padding: 0.5rem;
  background-color: #f7f8fa;
  border: 2px solid ${({ theme }) => theme.colors.lightGrey};
  margin-right: 0.5rem;
  color: black;

  &:focus {
    outline: none;
  }
`;

export const SendMessageButton = styled(SidebarLink)`
  height: 4rem;
  width: 4rem;
  margin: 0;
  background-color: ${({ theme }) => theme.colors.lightBlue};
`;

export const ToggleMenu = styled.button<ToggleMenuProps>`
  position: absolute;
  top: 1rem;
  right: 1rem;
  height: 5rem;
  width: 5rem;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-color: transparent;
  border-radius: 1.5rem;
  border: none;
  display: block;
  background-size: 75%;
  background-position: center;
  cursor: pointer;
  margin: 1rem;
`;
