import React, { useEffect, useState } from 'react';
import { students as studentsData } from 'data/data';
import StudentsListItem from 'components/molecules/StudentsListItem/StudentsListItem';
import { Wrapper } from './StudentsList.styles';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (studentsData) {
        resolve([...studentsData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [isLoading, setLoadingState] = useState(false);

  const deleteStudent = (name) => {
    const filteredStudents = students.filter((student) => student.name !== name);
    setStudents(filteredStudents);
  };

  useEffect(() => {
    setLoadingState(true);
    mockAPI()
      .then((data) => {
        setStudents(data);
        setLoadingState(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Wrapper>
      <h3>{isLoading ? 'Loading...' : null}</h3>
      <ul>
        {students.map((studentData) => (
          <StudentsListItem deleteStudent={deleteStudent} key={studentData.name} studentsData={studentData} />
        ))}
      </ul>
    </Wrapper>
  );
};

export default StudentsList;
