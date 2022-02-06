import { AddButton, Heading, Wrapper } from './ManageHeading.styles';
import AddIcon from 'assets/icons/AddIcon.svg';
import { useNavigate } from 'react-router';

const ManageHeading = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
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
    </Wrapper>
  );
};

export default ManageHeading;
