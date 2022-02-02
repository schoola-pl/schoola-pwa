import UserTemplate from 'components/templates/UserTemplate/UserTemplate';
import styled from 'styled-components';
import SidebarLink from 'components/atoms/SidebarLink/SidebarLink';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  heigth: 100vh;
  justify-content: flex-start;
  align-items: center;
`;

const AskQuestionWrapper = styled.div`
  height: 11rem;
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
`;

const SubmitButton = styled.button``;

const Spotted = () => (
  <UserTemplate>
    <PageWrapper>
      <AskQuestionWrapper>
        <div>
          <QuestionInput type="text" placeholder="Zadaj pytanie" />
        </div>
        <div>
          <input type="checkbox" />
          <input type="checkbox" />
          <button>Wyślij</button>
        </div>
      </AskQuestionWrapper>
    </PageWrapper>
  </UserTemplate>
);

export default Spotted;
