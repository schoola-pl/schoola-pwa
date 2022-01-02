import AdminSidebar from 'components/organisms/AdminSidebar/AdminSidebar';
import { Wrapper } from './AdminTemplate.styles';

const AdminTemplate: React.FC = ({ children }) => (
  <Wrapper>
    <AdminSidebar />
    {children}
  </Wrapper>
);

export default AdminTemplate;
