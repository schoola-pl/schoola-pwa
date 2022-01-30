import { AddButton, ContentWrapper, Heading, HeadingLink, InnerWrapper, Links, Wrapper } from './ManageClasses.styles';
import AddIcon from 'assets/icons/AddIcon.svg';
import { Route, Routes, useNavigate } from 'react-router';
import Classes from 'components/organisms/Classes/Classes';
import Roles from 'components/organisms/Roles/Roles';
import Error404 from 'views/Error404/Error404';
import AllAccounts from 'components/organisms/AllAccounts/AllAccounts';

const ManageClasses = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <InnerWrapper>
        <Heading>Zarządzaj użytkownikami</Heading>
        <AddButton as="a" onClick={() => navigate('/school-admin/manage/add-class')} icon={AddIcon} />
      </InnerWrapper>
      <ContentWrapper>
        <Links>
          <HeadingLink to={'/school-admin/manage/classes'}>klasy</HeadingLink>
          <HeadingLink to={'/school-admin/manage/roles'}>role</HeadingLink>
          <HeadingLink to={'/school-admin/manage/find-student'}>Szukaj ucznia</HeadingLink>
        </Links>
        <Routes>
          <Route path={'/classes'} element={<Classes />} />
          <Route path={'/roles'} element={<Roles />} />
          <Route path={'/find-student'} element={<AllAccounts />} />
          <Route path={'*'} element={<Error404 />} />
        </Routes>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ManageClasses;
