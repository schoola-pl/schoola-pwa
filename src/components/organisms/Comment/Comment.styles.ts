import styled from 'styled-components';

export const CommentWrapper = styled.div`
  position: relative;
  display: grid;
  min-height: 150px;
  grid-template-rows: 7rem 1fr;
  grid-gap: 1rem;
  align-items: center;
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 1.5rem;
  padding: 1rem;
  width: 90%;

  &:not(:last-child) {
    margin-bottom: 2rem;
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

interface Props {
  icon?: string;
}

export const ProfilePicture = styled.div<Props>`
  width: 87%;
  height: 87%;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 6.5rem 1fr 6.5rem;
  align-items: center;
  justify-content: center;
`;

export const CommentInfo = styled.div`
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

interface ToggleMenuProps {
  icon?: string;
  onClick?: any;
}

export const ToggleMenu = styled.button<ToggleMenuProps>`
  background-color: transparent;
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

export const CommentInnerWrapper = styled.div`
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
