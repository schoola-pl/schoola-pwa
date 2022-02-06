import { StyledLink, Wrapper } from './ManageLinks.styles';

const ManageLinks = () => {
  return (
    <Wrapper>
      <StyledLink to={'/school-admin/manage/classes'}>klasy</StyledLink>
      <StyledLink to={'/school-admin/manage/roles'}>role</StyledLink>
      <StyledLink to={'/school-admin/manage/find-student'}>Szukaj ucznia</StyledLink>
    </Wrapper>
  );
};

export default ManageLinks;
