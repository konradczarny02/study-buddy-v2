import React from 'react';
import Dashboard from 'views/Dashboard';
import AddStudent from 'views/AddStudent';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentsProvider from 'providers/StudentsProvider';

const Root = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <MainTemplate>
          <StudentsProvider>
            <Wrapper>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/add-student" element={<AddStudent />} />
              </Routes>
            </Wrapper>
          </StudentsProvider>
        </MainTemplate>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Root;
