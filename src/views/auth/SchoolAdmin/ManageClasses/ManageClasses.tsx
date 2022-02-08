import { ContentWrapper, Wrapper } from './ManageClasses.styles';
import { Route, Routes } from 'react-router';
import Classes from 'components/organisms/Classes/Classes';
import Roles from 'components/organisms/Roles/Roles';
import Error404 from 'views/Error404/Error404';
import AllAccounts from 'components/organisms/AllAccounts/AllAccounts';
import ManageLinks from 'components/molecules/ManageLinks/ManageLinks';
import ManageHeading from 'components/organisms/ManageHeading/ManageHeading';

const ManageClasses = () => {
  return (
    <Wrapper>
      <ManageHeading />
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
