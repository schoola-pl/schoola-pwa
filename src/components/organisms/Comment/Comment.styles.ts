import styled from 'styled-components';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';

export const CommentWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
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
  padding: 2rem;
  z-index: 9999999;
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const QuestionInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 0.75rem;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  p {
    transform: translateY(-100%);
    padding-bottom: 0.75rem;
  }
`;

export const ToggleMenu = styled(SidebarLink)`
  transform: translateY(16%);
  margin-left: 11rem;
  height: 4rem;
  width: 4rem;
  background-color: transparent;
`;

export const CommentInnerWrapper = styled.div`
  display: grid;
  width: 80%;
  grid-template-columns: 10% 90%;
  grid-gap: 5rem;
  margin-left: 0rem;
  height: 6rem;
  transform: translateY(-45%);
  align-content: center;

  div {
    display: flex;
    align-items: center;
  }

  p {
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;
