import { ClassesWrapper } from 'views/SchoolAdmin/ManageClasses/ManageClasses.styles';
import RoleSection from 'components/molecules/RoleSection/RoleSection';
import { theme } from 'assets/styles/theme';

const Roles = () => {
  return (
    <>
      <h1
        style={{
          fontSize: '2.6rem',
          textAlign: 'center',
          paddingBottom: '2rem',
          marginBlock: '2rem',
          borderBottom: `3px solid #eceff7`,
          marginInline: '6rem'
        }}
      >
        Uczniowie posegregowani <span style={{ color: theme.colors.accentGreen }}>według roli</span>.
      </h1>
      <ClassesWrapper isCenter columns={2}>
        <RoleSection role="Student" title="Uczniowie" />
        <RoleSection role="Moderator" title="Samorząd Uczniowski" />
      </ClassesWrapper>
    </>
  );
};

export default Roles;
