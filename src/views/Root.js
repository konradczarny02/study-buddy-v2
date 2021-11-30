import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import StudentsList from 'components/organisms/StudentsList/StudentsList';
import { Wrapper } from './Root.styles';
import { GlobalStyles } from 'assets/styles/GlobalStyles';

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Wrapper>
        <StudentsList />
      </Wrapper>
    </ThemeProvider>
  );
};

export default Root;
