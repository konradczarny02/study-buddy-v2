import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledInfo } from './StudentsListItem.styles';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import Average from 'components/atoms/Average/Average';
import { StudentShape } from 'types';

const StudentsListItem = ({ deleteStudent, studentsData: { attendance = '0%', average, name } }) => {
  return (
    <Wrapper>
      <Average average={average} />
      <StyledInfo>
        <h3>{name}</h3>
        <p>attendance: {attendance}</p>
      </StyledInfo>
      <DeleteButton onClick={() => deleteStudent(name)} />
    </Wrapper>
  );
};

StudentsListItem.propTypes = {
  studentsData: PropTypes.shape(StudentShape),
  deleteStudent: PropTypes.func,
};

export default StudentsListItem;
