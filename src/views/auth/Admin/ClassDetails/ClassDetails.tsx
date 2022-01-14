import AdminTemplate from 'components/templates/AdminTemplate/AdminTemplate';
import { Wrapper, InfoWrapper, Heading, ParagraphsWrapper, Paragraph, InnerWrapper } from './ClassDetails.styles';
import StudentDetail from 'components/molecules/StudentDetail/StudentDetail';

const ClassDetails = () => (
  <AdminTemplate>
    <Wrapper>
      <InfoWrapper>
        <Heading>
          Edytuj <span>1A</span>
        </Heading>
        <ParagraphsWrapper>
          <Paragraph>Imię i nazwisko</Paragraph>
          <Paragraph>Rola</Paragraph>
          <Paragraph>Data urodzenia</Paragraph>
          <Paragraph>Numer</Paragraph>
        </ParagraphsWrapper>
      </InfoWrapper>
      <InnerWrapper>
        <StudentDetail />
      </InnerWrapper>
    </Wrapper>
  </AdminTemplate>
);

export default ClassDetails;
