import React from 'react';
import StudentInfoRecord from '../StudentInfoRecord/StudentInfoRecord';

interface props {
  students: {
    id: string;
    attributes: { first_name: string; last_name: string; blocked: boolean; avatar: string; Birthday: string; TextRole: string };
  }[];
  userToFind: string;
}

const StudentDetail: React.FC<props> = ({ students, userToFind }) => (
  <>
    {students.map((info) => (
      <StudentInfoRecord key={info.id} info={info} userToFind={userToFind} />
    ))}
  </>
);

export default StudentDetail;
