import styled from 'styled-components';
import ActionMenu from 'components/molecules/ActionMenu/ActionMenu';

export const CommentWrapper = styled.div`
  position: relative;
  display: grid;
  overflow-x: hidden;
  grid-template-rows: repeat(2, 1fr);
  height: 15rem;
  background-color: white;
  border-radius: 2rem;
  width: 90%;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  margin-bottom: 2rem;
`;

export const StyledPicture = styled.div`
  transform: translateY(10%);
  margin: 1rem;
  height: 5rem;
  width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10rem;
  background: linear-gradient(90deg, rgba(184, 208, 252, 1) 0%, rgba(91, 117, 166, 1) 0%, rgba(85, 171, 103, 1) 100%);
`;

interface Props {
  icon?: string;
}

export const ProfilePicture = styled.div<Props>`
  width: 87%;
  height: 87%;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-color: white;
  border-radius: inherit;
  border: none;
  background-size: contain;
  background-position: center;
  z-index: 9999999;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  section {
    display: flex;
    align-items: center;
  }
`;

export const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translateY(13%);

  h1 {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  p {
    transform: translateY(-150%);
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
  display: grid;
  grid-template-columns: 10% 90%;
  grid-gap: 3rem;
  height: 6rem;
  align-content: center;
  transform: translateY(-10%);

  div {
    display: flex;
    align-items: center;
  }

  p {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const StyledActionMenu = styled(ActionMenu)`
  position: relative;
`;
