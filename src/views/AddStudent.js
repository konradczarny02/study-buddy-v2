import React, { useState, useContext } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import { StudentsContext } from 'providers/StudentsProvider';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const AddStudent = () => {
  const [formValues, setFormValues] = useState(initialFormState);
  const { handleAddStudent } = useContext(StudentsContext);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitStudent = (e) => {
    e.preventDefault();
    handleAddStudent(formValues);
    setFormValues(initialFormState);
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitStudent}>
      <Title>Add new student</Title>
      <FormField name="name" id="name" label="Name" value={formValues.name} onChange={handleInputChange} />
      <FormField name="attendance" id="attendance" label="Attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField name="average" id="average" label="Average" value={formValues.average} onChange={handleInputChange} />
      <Button type="submit">Add</Button>
    </ViewWrapper>
  );
};

export default AddStudent;
