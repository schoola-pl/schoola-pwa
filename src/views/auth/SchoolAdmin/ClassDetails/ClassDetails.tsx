import { Heading, InfoWrapper, InnerWrapper, Paragraph, ParagraphsWrapper, Wrapper } from './ClassDetails.styles';
import StudentDetail from 'components/molecules/StudentDetail/StudentDetail';

const ClassDetails = () => (
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
);

export default ClassDetails;
