import UserTemplate from 'components/templates/UserTemplate/UserTemplate';
import styled from 'styled-components';
import AskQuestionInput from 'components/molecules/AskQuestionInput/AskQuestionInput';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  heigth: 100vh;
  justify-content: flex-start;
  align-items: center;
`;

const Spotted = () => {
  return (
    <UserTemplate>
      <PageWrapper>
        <AskQuestionInput />
      </PageWrapper>
    </UserTemplate>
  );
};

export default Spotted;
