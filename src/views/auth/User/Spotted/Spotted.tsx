import { useState } from 'react';
import UserTemplate from 'components/templates/UserTemplate/UserTemplate';
import styled from 'styled-components';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';
import SendIcon from 'assets/icons/SendIcon.svg';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  heigth: 100vh;
  justify-content: flex-start;
  align-items: center;
`;

const AskQuestionWrapper = styled.form`
  height: 12rem;
  border-radius: 2rem;
  width: 90%;
  transform: translateY(-20%);
  background-color: white;
  box-shadow: -2px 4px 10px rgba(115, 124, 142, 0.09);
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  overflow: hidden;
`;

const QuestionInput = styled.input`
  border: none;
  padding: 1rem;
  height: 100%;
  width: 100%;

  &:focus {
    outline: none;
  }
`;

const SendMessageButton = styled(SidebarLink)`
  height: 4rem;
  width: 4rem;
  background-color: ${({ theme }) => theme.colors.lightBlue};
`;

const MessageActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledCheckbox = styled.input`
  border-radius: 1px;
  height: 2rem;
  width: 2rem;
`;

const QuestionDiv = styled.div`
  height: 6.5rem;
  width: 100%;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.m};
  border-bottom: 2px solid ${({ theme }) => theme.colors.selectedItemGrey};
`;

const StyledLabel = styled.label`
  margin-left: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  transform: translateX(-10%);

  span {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const StyledName = styled.p`
  color: ${({ theme }) => theme.colors.accentGreen};
  padding-left: 0.2rem;
`;

const Spotted = () => {
  const [selectedRadio, setSelectedRadio] = useState('anonymous');
  const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => setSelectedRadio(e.currentTarget.value);
  const isRadioSelected = (value: string): boolean => selectedRadio === value;

  return (
    <UserTemplate>
      <PageWrapper>
        <AskQuestionWrapper>
          <QuestionDiv>
            <QuestionInput type="text" placeholder="Zadaj pytanie" />
          </QuestionDiv>
          <MessageActionWrapper>
            <StyledLabel>
              <StyledCheckbox onChange={handleRadioClick} checked={isRadioSelected('anonymous')} value="anonymous" name="anonymous" type="radio" />
              <span>Anonimowo</span>
            </StyledLabel>
            <StyledLabel>
              <StyledCheckbox
                onChange={handleRadioClick}
                checked={isRadioSelected('not-anonymous')}
                value="not-anonymous"
                name="not-anonymous"
                type="radio"
              />
              <span>
                Wyślij jako <StyledName>Jacek Gad</StyledName>
              </span>
            </StyledLabel>
            <SendMessageButton icon={SendIcon} />
          </MessageActionWrapper>
        </AskQuestionWrapper>
      </PageWrapper>
    </UserTemplate>
  );
};

export default Spotted;
