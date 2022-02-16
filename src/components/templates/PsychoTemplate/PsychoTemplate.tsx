import styled from 'styled-components';
import PsychoSidebar from 'components/organisms/PsychoSidebar/PsychoSidebar';

const Wrapper = styled.div``;

const PsychoTemplate: React.FC = ({ children }) => (
  <>
    <Wrapper>{children}</Wrapper>
    <PsychoSidebar />
  </>
);

export default PsychoTemplate;
