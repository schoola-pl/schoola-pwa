import ClassCard from 'components/molecules/ClassCard/ClassCard';
import { ClassesWrapper } from 'views/auth/SchoolAdmin/ManageClasses/ManageClasses.styles';

const Classes = () => {
  return (
    <ClassesWrapper>
      <ClassCard classYear="Klasy pierwsze" classLevel={1} />
      <ClassCard classYear="Klasy drugie" classLevel={2} />
      <ClassCard classYear="Klasy trzecie" classLevel={3} />
    </ClassesWrapper>
  );
};

export default Classes;
