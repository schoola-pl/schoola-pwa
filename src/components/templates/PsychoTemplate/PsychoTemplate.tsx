import styled from 'styled-components';
import PsychoSidebar from 'components/organisms/PsychoSidebar/PsychoSidebar';
import PsychoTopBar from 'components/organisms/PsychoTopBar/PsychoTopBar';

const Wrapper = styled.div`
  height: 70vh;
  width: 95%;
  margin-top: 10rem;
  z-index: -1;
  overflow-x: hidden;
  overflow-y: auto !important;

  @media (min-height: 740px) {
    height: 75vh;
  }

  ::-webkit-scrollbar {
    background-color: transparent;
  }
`;

const PsychoTemplate: React.FC = ({ children }) => (
  <>
    <PsychoTopBar number={9} day="Piątek" month="Marzec" year={2020} />
    <Wrapper>{children}</Wrapper>
    <PsychoSidebar />
  </>
);

export default PsychoTemplate;
