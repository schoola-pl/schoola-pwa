import { RoleWrapper } from './Roles.styles';

interface Props {
  role: string;
}

const Roles: React.FC<Props> = ({ role }) => (
  <RoleWrapper>
    <div>
      <p>Rola:</p>
      <h1>{role}</h1>
    </div>
  </RoleWrapper>
);

export default Roles;
