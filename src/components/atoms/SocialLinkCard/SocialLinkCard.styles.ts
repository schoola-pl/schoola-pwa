import styled from 'styled-components';
import IconDiv from 'components/atoms/IconDiv/IconDiv';
import ActionBox from 'components/atoms/ActionBox/ActionBox.styles';

export const IconsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const PlatformInfo = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
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
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  color: black;
  text-decoration: none;
`;

export const StyledInput = styled.input`
  margin: 2.1rem 0 2.1rem 1rem;
  width: 75%;
  border: none;
  outline: none;
`;

export const LittleCard = styled.div`
  border-radius: 1rem;
  box-shadow: ${({ theme }) => theme.innerStyles.box};
  background-color: white;
  width: 100%;
  display: grid;
  position: relative;
  grid-template-columns: 50% 50%;
  align-items: center;
  margin-bottom: 0rem;
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
