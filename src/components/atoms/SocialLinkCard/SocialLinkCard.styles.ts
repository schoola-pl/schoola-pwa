import styled from 'styled-components';
import IconDiv from 'components/atoms/IconDiv/IconDiv';
import ActionBox from 'components/atoms/ActionBox/ActionBox.styles';

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const PlatformInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledIconDiv = styled(IconDiv)`
  padding: 1.8rem;
  margin-right: 3rem;
`;

export const SocialMediaLink = styled.a<{ icon: string }>`
  min-height: 4.25rem;
  min-width: 4.25rem;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-color: transparent;
  background-size: 75%;
  background-position: center;
  cursor: pointer;
  border: none;
  display: block;
`;

export const SocialPlatformHeading = styled.a`
  margin: 1.5rem 0 1.5rem 1rem;
  font-size: 1.9rem;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: black;
  text-decoration: none;
`;

export const StyledInput = styled.input`
  width: 100%;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.lightGrey};
  outline: none;
`;

export const LittleCard = styled.div`
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.innerStyles.box};
  background-color: white;
  width: 100%;
  display: grid;
  position: relative;
  grid-template-columns: 65% 35%;
  align-items: center;
  margin-bottom: 0;

  & > div:first-child {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 1.5rem;
    font-size: 1.15rem;
  }
`;

export const DeleteButton = styled(ActionBox)`
  height: 4.25rem;
  width: 4.25rem;
  background-color: ${({ theme }) => theme.colors.lightRed};
`;

export const EditButton = styled(ActionBox)`
  height: 4.25rem;
  width: 4.25rem;
  background-color: ${({ theme }) => theme.colors.veryLightGreen};
`;
