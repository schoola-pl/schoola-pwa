import styled from 'styled-components';
import UserTemplate from 'components/templates/UserTemplate/UserTemplate';
import { PageWrapper } from './Spotted.styles';
import Question from 'components/organisms/Question/Question';
import AskQuestionInput from 'components/molecules/AskQuestionInput/AskQuestionInput';

const Spotted = () => {
  return (
    <UserTemplate>
      <PageWrapper>
        <AskQuestionInput />
        <Question />
      </PageWrapper>
    </UserTemplate>
  );
};

export default Spotted;
