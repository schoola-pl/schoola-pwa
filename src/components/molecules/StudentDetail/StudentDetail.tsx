import React from 'react';
import StudentInfoRecord from '../StudentInfoRecord/StudentInfoRecord';

interface props {
  students: {
    id: string;
    attributes: { first_name: string; last_name: string; blocked: boolean; avatar: string; Birthday: string; TextRole: string };
  }[];
}

const StudentDetail: React.FC<props> = ({ students }) => (
  <>
    {students.map((info) => (
      <StudentInfoRecord key={info.id} info={info} />
    ))}
  </>
);

export default StudentDetail;
