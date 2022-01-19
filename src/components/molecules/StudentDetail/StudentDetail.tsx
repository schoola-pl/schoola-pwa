import EditIcon from 'assets/icons/EditIcon.png';
import blueStudent from 'assets/icons/BlueStudent.svg';
import DeleteIcon from 'assets/icons/DeleteIcon.svg';
import { BoxWrapper, Date, DeleteBox, EditBox, Name, Number, Role, StudentBox, Wrapper } from './StudentDetails.styles';
import React from 'react';

interface props {
  students: { id: string; attributes: { first_name: string; last_name: string; blocked: boolean; avatar: string; Birthday: string } }[];
}

const StudentDetail: React.FC<props> = ({ students }) => (
  <>
    {students.map(({ id, attributes: { first_name, last_name, Birthday } }) => (
      <Wrapper key={id}>
        <StudentBox icon={blueStudent} />
        <Name>{`${first_name} ${last_name}`}</Name>
        <Role>Uczeń</Role>
        <Date>{Birthday}</Date>
        <Number>{id}</Number>
        <BoxWrapper>
          <EditBox icon={EditIcon} />
          <DeleteBox icon={DeleteIcon} />
        </BoxWrapper>
      </Wrapper>
    ))}
  </>
);

export default StudentDetail;
