import React from 'react';
import { Wrapper } from 'components/organisms/StudentsList/StudentsList.styles';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';

const Form = ({ handleAddStudent, formValue, handleInputChange }) => {
  return (
    <Wrapper as="form" onSubmit={handleAddStudent}>
      <h3>Add new student</h3>
      <FormField name="name" id="name" label="Name" value={formValue.name} onChange={handleInputChange} />
      <FormField name="attendance" id="attendance" label="Attendance" value={formValue.attendance} onChange={handleInputChange} />
      <FormField name="average" id="average" label="Average" value={formValue.average} onChange={handleInputChange} />
      <Button type="submit">Add</Button>
    </Wrapper>
  );
};

export default Form;
