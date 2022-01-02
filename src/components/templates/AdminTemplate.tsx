import AdminSidebar from 'components/organisms/AdminSidebar/AdminSidebar';
import styled from 'styled-components';

const Wrapper = styled.div`
  overflow: hidden;
  height: 100vh;
  width: 100vw;
  background-color: #f2f2f2 !important;
`;

const AdminTemplate: React.FC = ({ children }) => (
  <Wrapper>
    <AdminSidebar />
    {children}
  </Wrapper>
);

export default AdminTemplate;
