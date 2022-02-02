import UserTemplate from 'components/templates/UserTemplate/UserTemplate';
import { PageWrapper } from './Spotted.styles';
import AskQuestionInput from 'components/molecules/AskQuestionInput/AskQuestionInput';

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
