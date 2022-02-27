import styled from 'styled-components';
import PsychoSidebar from 'components/organisms/PsychoSidebar/PsychoSidebar';
import PsychoTopBar from 'components/organisms/PsychoTopBar/PsychoTopBar';

const Wrapper = styled.div`
  margin-top: 12rem;
`;

const PsychoTemplate: React.FC = ({ children }) => (
  <>
    <PsychoTopBar />
    <Wrapper>{children}</Wrapper>
    <PsychoSidebar />
  </>
);

export default PsychoTemplate;
