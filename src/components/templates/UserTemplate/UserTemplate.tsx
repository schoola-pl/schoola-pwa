import UserSidebar from 'components/organisms/UserSidebar/UserSidebar';

const UserTemplate: React.FC = ({ children }) => (
  <>
    <UserSidebar />
    {children}
  </>
);

export default UserTemplate;
