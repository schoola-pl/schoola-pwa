import UserSidebar from 'components/organisms/UserSidebar/UserSidebar';
import TopBar from 'components/organisms/TopBar/TopBar';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 70vh;
  width: 95%;
  margin-top: 10rem;
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

const UserTemplate: React.FC = ({ children }) => (
  <>
    <TopBar />
    <Wrapper>{children}</Wrapper>
    <UserSidebar />
  </>
);

export default UserTemplate;
