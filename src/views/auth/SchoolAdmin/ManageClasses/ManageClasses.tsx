import { AddButton, AmountWrapper, ContentWrapper, Heading, HeadingLink, InnerWrapper, Links, Wrapper } from './ManageClasses.styles';
import AddIcon from 'assets/icons/AddIcon.svg';
import { storeRoot, useGetClassesCountQuery } from 'store';
import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router';
import Classes from 'components/organisms/Classes/Classes';
import Roles from 'components/organisms/Roles/Roles';
import Error404 from 'views/Error404/Error404';

const ManageClasses = () => {
  const user = useSelector((store: storeRoot) => store.user);
  const classesCount = useGetClassesCountQuery({ schoolId: user?.schoolId || null });
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
          <HeadingLink to={'roles'}>role</HeadingLink>
          {/*<HeadingLink to={'/school-admin/manage/all-accounts'}>wszystkie konta</HeadingLink>*/}
        </Links>
        <AmountWrapper>
          <h1>
            Łączna liczba klas: <span>{classesCount.isLoading ? 'Liczenie...' : classesCount.data.data.length}</span>
          </h1>
        </AmountWrapper>
        <Routes>
          <Route path={'/'} element={<Classes />} />
          <Route path={'/roles'} element={<Roles />} />
          <Route path={'*'} element={<Error404 />} />
        </Routes>
      </ContentWrapper>
    </Wrapper>
  );
};

export default ManageClasses;
