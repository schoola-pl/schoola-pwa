import AdminSidebar from 'components/organisms/AdminSidebar/AdminSidebar';

const AdminTemplate: React.FC = ({ children }) => (
  <>
    <AdminSidebar />
    {children}
  </>
);

export default AdminTemplate;
