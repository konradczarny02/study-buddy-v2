import React from 'react';
import { students } from 'data/data';
import StudentsListItem from 'components/molecules/StudentsListItem/StudentsListItem';
import { Wrapper } from './StudentsList.styles';

const StudentsList = () => {
  return (
    <Wrapper>
      <ul>
        {students.map((studentData) => (
          <StudentsListItem studentsData={studentData} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default StudentsList;
