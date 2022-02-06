import UserSidebar from 'components/organisms/UserSidebar/UserSidebar';
import TopBar from 'components/organisms/TopBar/TopBar';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100rem;
  width: 95%;
  margin-top: 10rem;
  z-index: -1;
  overflow-x: hidden;
  overflow-y: scroll !important;
`;

const UserTemplate: React.FC = ({ children }) => (
  <>
    <TopBar />
    <Wrapper>{children}</Wrapper>
    <UserSidebar />
  </>
);

export default UserTemplate;
