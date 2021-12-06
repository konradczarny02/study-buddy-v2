import React from 'react';
import '@testing-library/jest-dom';
import { renderWithProviders } from 'helpers/renderWithProviders';
import FormField from 'components/molecules/FormField/FormField';

describe('Form Field', () => {
  it('Renders the component', () => {
    renderWithProviders(<FormField label="Name" name="name" id="name" />);
  });
});
