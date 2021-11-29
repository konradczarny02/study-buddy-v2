import React from 'react';
import { students } from 'data/data';
import StudentsListItem from '../../molecules/StudentsListItem/StudentsListItem';

const StudentsList = () => {
  return (
    <div>
      <ul>
        {students.map((studentData) => (
          <StudentsListItem studentsData={studentData} />
        ))}
      </ul>
    </div>
  );
};

export default StudentsList;
