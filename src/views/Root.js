import React, { useState } from 'react';
import Dashboard from 'views/Dashboard';
import AddStudent from 'views/AddStudent';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { students as studentsData } from 'data/data';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const Root = () => {
  const [students, setStudents] = useState(studentsData);
  const [formValue, setFormValue] = useState(initialFormState);

  const handleInputChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddStudent = (e) => {
    e.preventDefault();
    const newUser = {
      name: formValue.name,
      attendance: formValue.attendance,
      average: formValue.average,
    };
    setStudents([...students, newUser]);
    setFormValue(initialFormState);
  };

  const deleteStudent = (name) => {
    const filteredStudents = students.filter((student) => student.name !== name);
    setStudents(filteredStudents);
  };

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MainTemplate>
          <Wrapper>
            <Routes>
              <Route path="/" element={<Dashboard deleteStudent={deleteStudent} students={students} />} />
              <Route
                path="/add-student"
                element={<AddStudent handleAddStudent={handleAddStudent} formValue={formValue} handleInputChange={handleInputChange} />}
              />
            </Routes>
          </Wrapper>
        </MainTemplate>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Root;
