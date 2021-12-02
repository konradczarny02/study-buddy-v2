import React from 'react';
import StudentsListItem from 'components/molecules/StudentsListItem/StudentsListItem';
import { Wrapper } from './StudentsList.styles';

const StudentsList = ({ students, deleteStudent }) => {
  return (
    <Wrapper>
      <ul>
        {students.map((studentData) => (
          <StudentsListItem deleteStudent={deleteStudent} key={studentData.name} studentsData={studentData} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default StudentsList;
