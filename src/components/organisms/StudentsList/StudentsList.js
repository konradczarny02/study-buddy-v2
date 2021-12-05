import React from 'react';
import PropTypes from 'prop-types';
import StudentsListItem from 'components/molecules/StudentsListItem/StudentsListItem';
import { StudentShape } from 'types';
import { Title } from 'components/atoms/Title/Title';

const StudentsList = ({ students }) => {
  return (
    <>
      <Title>Students list</Title>
      <ul>
        {students.map((studentData) => (
          <StudentsListItem key={studentData.name} studentsData={studentData} />
        ))}
      </ul>
    </>
  );
};

StudentsList.propTypes = {
  students: PropTypes.arrayOf(PropTypes.shape(StudentShape)),
};

export default StudentsList;
