import React from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';

const AddStudent = ({ handleAddStudent, formValue, handleInputChange, ...props }) => {
  return (
    <ViewWrapper as="form" onSubmit={handleAddStudent}>
      <Title>Add new student</Title>
      <FormField name="name" id="name" label="Name" value={formValue.name} onChange={handleInputChange} />
      <FormField name="attendance" id="attendance" label="Attendance" value={formValue.attendance} onChange={handleInputChange} />
      <FormField name="average" id="average" label="Average" value={formValue.average} onChange={handleInputChange} />
      <Button type="submit">Add</Button>
    </ViewWrapper>
  );
};

export default AddStudent;
