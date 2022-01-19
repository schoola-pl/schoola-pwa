import UserSidebar from 'components/organisms/UserSidebar/UserSidebar';
import TopBar from 'components/organisms/TopBar/TopBar';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 12rem;
`;

const UserTemplate: React.FC = ({ children }) => (
  <>
    <TopBar />
    <Wrapper>{children}</Wrapper>
    <UserSidebar />
  </>
);

export default UserTemplate;
