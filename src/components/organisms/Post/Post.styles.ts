import styled from 'styled-components';
import ActionMenu from 'components/molecules/ActionMenu/ActionMenu';

type Props = {
  icon?: string;
  isPublic?: boolean;
};

interface ToggleMenuProps {
  icon?: string;
  onClick?: any;
}

interface WrapperProps {
  ref?: any;
}

export const QuestionWrapper = styled.div<WrapperProps>`
  position: relative;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  height: 20rem;
  width: 90%;
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  border-radius: 1.5rem;
  margin-bottom: 3rem;
`;

export const StyledPicture = styled.div`
  transform: translateY(10%);
  margin: 1rem 1rem 1rem;
  height: 5rem;
  width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10rem;
  background: linear-gradient(90deg, rgba(184, 208, 252, 1) 0%, rgba(91, 117, 166, 1) 0%, rgba(85, 171, 103, 1) 100%);
`;

export const ProfilePicture = styled.div<Props>`
  width: 87%;
  height: 87%;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-color: white;
  border-radius: inherit;
  border: none;
  background-size: ${({ isPublic }) => (isPublic ? 'contain' : '70%')};
  background-position: center;
  z-index: 9999999;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  section {
    display: flex;
    align-items: center;
  }
`;

export const QuestionInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  transform: translateY(15%);

  h1 {
    font-size: ${({ theme }) => theme.fontSize.s};
    font-weight: ${({ theme }) => theme.fontWeight.medium};
  }

  p {
    transform: translateY(-150%);
  }
`;

export const QuestionInnerWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: 3.5rem;
  height: 6rem;
  margin-bottom: 0.75rem;
  border-left: 3px solid ${({ theme }) => theme.colors.accentGreen};

  p {
    padding: 1rem;
    font-weight: ${({ theme }) => theme.fontWeight.semibold};
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
`;

export const StyledComments = styled.div`
  color: black;
  text-decoration: none;
  display: flex;
  align-items: center;
  height: 4rem;
  border-radius: 1rem;
  background-color: ${({ theme }) => theme.colors.lightBlue};
  max-width: 13rem;
  margin-right: 0.5rem;

  p {
    display: flex;
    padding-right: 0.5rem;

    strong {
      padding-right: 0.5rem;
    }
  }
`;

export const LikeWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input`
  border-radius: 1rem;
  padding: 1rem;
  border: none;
  background-color: #f7f8fa;
  margin-right: 0.5rem;
  color: black;
  &:focus {
    outline: none;
  }
`;

export const ToggleMenu = styled.button<ToggleMenuProps>`
  transform: translateY(16%);
  margin-left: 7rem;
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

export const StyledActionMenu = styled(ActionMenu)`
  position: relative;
`;
