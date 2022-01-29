import { ClassesWrapper } from 'views/auth/SchoolAdmin/ManageClasses/ManageClasses.styles';
import RoleSection from 'components/molecules/RoleSection/RoleSection';

const Roles = () => {
  return (
    <ClassesWrapper isCenter columns={2}>
      <RoleSection role="Student" title="Uczniowie" />
      <RoleSection role="Moderator" title="Samorząd Uczniowski" />
    </ClassesWrapper>
  );
};

export default Roles;
