import styled from 'styled-components';
import PsychoSidebar from 'components/organisms/PsychoSidebar/PsychoSidebar';
import PsychoTopBar from 'components/organisms/PsychoTopBar/PsychoTopBar';

const Wrapper = styled.div`
  height: 83vh;
  width: 95%;
  margin-top: 8rem;
  z-index: -1;
  overflow-x: hidden;
  overflow-y: scroll !important;

  @media (min-height: 740px) {
    height: 75vh;
  }
  @media (min-height: 800px) {
    height: 78vh;
  }
  ::-webkit-scrollbar {
    background-color: transparent;
  }
`;

const PsychoTemplate: React.FC = ({ children }) => (
  <>
    <PsychoTopBar />
    <Wrapper>{children}</Wrapper>
    <PsychoSidebar />
  </>
);

export default PsychoTemplate;
