import React, { useState } from 'react';
import { students as studentsData } from '../data/data';

export const StudentsContext = React.createContext({
  students: [],
  handleAddStudent: () => {},
  deleteStudent: () => {},
});

const StudentsProvider = ({ children }) => {
  const [students, setStudents] = useState(studentsData);

  const handleAddStudent = (formValues) => {
    const newUser = {
      name: formValues.name,
      attendance: formValues.attendance,
      average: formValues.average,
    };
    setStudents([...students, newUser]);
  };

  const deleteStudent = (name) => {
    const filteredStudents = students.filter((student) => student.name !== name);
    setStudents(filteredStudents);
  };
  return (
    <StudentsContext.Provider
      value={{
        students,
        handleAddStudent,
        deleteStudent,
      }}
    >
      {children}
    </StudentsContext.Provider>
  );
};

export default StudentsProvider;
