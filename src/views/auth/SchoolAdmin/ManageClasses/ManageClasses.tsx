import { AddButton, ContentWrapper, Heading, InnerWrapper, Wrapper } from './ManageClasses.styles';
import AddIcon from 'assets/icons/AddIcon.svg';
import { Route, Routes, useNavigate } from 'react-router';
import Classes from 'components/organisms/Classes/Classes';
import Roles from 'components/organisms/Roles/Roles';
import Error404 from 'views/Error404/Error404';
import AllAccounts from 'components/organisms/AllAccounts/AllAccounts';
import ManageLinks from 'components/molecules/ManageLinks/ManageLinks';

const ManageClasses = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <InnerWrapper>
        <Heading>Zarządzaj użytkownikami</Heading>
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '1rem',
            fontSize: '1.4rem'
          }}
        >
          Dodaj nową klasę <AddButton as="a" onClick={() => navigate('/school-admin/manage/add-class')} icon={AddIcon} />
        </span>
      </InnerWrapper>
      <ContentWrapper>
        <ManageLinks />
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
