import React, { useReducer, useContext, useRef } from 'react';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import FormField from 'components/molecules/FormField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { Title } from 'components/atoms/Title/Title';
import { StudentsContext } from 'providers/StudentsProvider';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  error: '',
};

const actionTypes = {
  inputChange: 'INPUT CHANGE',
  clearValues: 'CLEAR VALUES',
  consentToggle: 'CONSENT TOGGLE',
  throwError: 'THROW ERROR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.inputChange:
      return {
        ...state,
        [action.field]: action.value,
      };
    case actionTypes.clearValues:
      return initialFormState;
    case actionTypes.consentToggle:
      return {
        ...state,
        consent: !state.consent,
      };
    case actionTypes.throwError:
      return {
        ...state,
        error: action.errorValue,
      };
    default:
      return state;
  }
};

const AddStudent = () => {
  const [formValues, dispatch] = useReducer(reducer, initialFormState);
  const { handleAddStudent } = useContext(StudentsContext);

  const handleInputChange = (e) => {
    dispatch({
      type: actionTypes.inputChange,
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmitStudent = (e) => {
    e.preventDefault();
    if (formValues.consent) {
      handleAddStudent(formValues);
      dispatch({ type: actionTypes.clearValues });
    } else {
      dispatch({ type: actionTypes.throwError, errorValue: 'You need to give consent' });
    }
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitStudent}>
      <Title>Add new student</Title>
      <FormField name="name" id="name" label="Name" value={formValues.name} onChange={handleInputChange} />
      <FormField name="attendance" id="attendance" label="Attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField name="average" id="average" label="Average" value={formValues.average} onChange={handleInputChange} />
      <FormField
        name="consent"
        id="consent"
        label="Consent"
        type="checkbox"
        value={formValues.consent}
        onChange={() => dispatch({ type: actionTypes.consentToggle })}
      />
      <Button type="submit">Add</Button>
      {formValues.error ? <p>{formValues.error}</p> : null}
    </ViewWrapper>
  );
};

export default AddStudent;
