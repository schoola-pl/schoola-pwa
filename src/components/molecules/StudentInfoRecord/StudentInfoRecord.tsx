import React, { useState } from 'react';
import { BoxWrapper, Date, DeleteBox, EditBox, Name, Number, Role, StudentBox, Wrapper } from '../StudentDetail/StudentDetails.styles';
import blueStudent from '../../../assets/icons/BlueStudent.svg';
import EditIcon from '../../../assets/icons/EditIcon.png';
import DeleteIcon from '../../../assets/icons/DeleteIcon.svg';
import Input from '../../atoms/Input/Input';
import { Select } from '../../../views/auth/SchoolAdmin/AddClass/AddClass.styles';

interface props {
  info: {
    id: string;
    attributes: {
      first_name: string;
      last_name: string;
      TextRole: string;
      Birthday: string;
      blocked: boolean;
    };
  };
}

const StudentInfoRecord: React.FC<props> = ({
  info: {
    id,
    attributes: { first_name, Birthday, last_name, TextRole, blocked }
  }
}) => {
  const [isEdit, setEditState] = useState(false);

  return (
    <Wrapper isBlocked={blocked}>
      <StudentBox icon={blueStudent} />
      {!isEdit ? <Name>{`${first_name} ${last_name}`}</Name> : <Input placeholder={`${first_name} ${last_name}`} small />}
      {!isEdit ? (
        <Role>{TextRole === 'Student' ? 'Uczeń' : 'Samorząd Uczniowski'}</Role>
      ) : (
        <Select small>
          <option value="Student">Uczeń</option>
          <option value="Moderator">Samorząd Uczniowski</option>
        </Select>
      )}
      {!isEdit ? <Date>{Birthday}</Date> : <Input type="date" small />}
      <Number>{id}</Number>
      <BoxWrapper>
        {!blocked && <EditBox onClick={() => setEditState((prev) => !prev)} icon={EditIcon} />}
        <DeleteBox icon={DeleteIcon} />
      </BoxWrapper>
    </Wrapper>
  );
};

export default StudentInfoRecord;
