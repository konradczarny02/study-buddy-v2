import React from 'react';
import AddStudent from 'views/AddStudent';
import Dashboard from 'views/Dashboard';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Add student', () => {
  it('Adds new student to the list', () => {
    renderWithProviders(
      <>
        <AddStudent />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Andrzej Kowalski' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '70%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.2' } });
    fireEvent.click(screen.getByTestId('Consent'));
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Andrzej Kowalski');
  });
  it('Prevents adding new student if the consent is not checked', () => {
    renderWithProviders(
      <>
        <AddStudent />
        <Dashboard />
      </>
    );
    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Andrzej Kowalski' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '70%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.2' } });
    fireEvent.click(screen.getByText('Add'));
    const newUser = screen.queryByText('Andrzej Kowalski');
    expect(newUser).not.toBeInTheDocument();
  });
});
