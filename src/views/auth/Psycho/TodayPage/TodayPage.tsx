import { PageWrapper, MeetingWrapper } from './TodayPage.styles';
import PsychoTemplate from 'components/templates/PsychoTemplate/PsychoTemplate';
import PsychoGreet from 'components/molecules/PsychoGreet/PsychoGreet';
import Meeting from 'components/molecules/Meeting/Meeting';

const TodayPage = () => (
  <PsychoTemplate>
    <PageWrapper>
      <PsychoGreet />
      <MeetingWrapper>
        <Meeting />
      </MeetingWrapper>
    </PageWrapper>
  </PsychoTemplate>
);

export default TodayPage;
