import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledInfo } from './StudentsListItem.styles';
import Button from 'components/atoms/Button/Button';
import Average from 'components/atoms/Average/Average';

const StudentsListItem = ({ studentsData: { attendance = '0%', average, name } }) => {
  return (
    <Wrapper>
      <Average average={average} />
      <StyledInfo>
        <h3>{name}</h3>
        <p>attendance: {attendance}</p>
      </StyledInfo>
      <Button />
    </Wrapper>
  );
};

StudentsListItem.propTypes = {
  userData: PropTypes.shape({
    average: PropTypes.string.isRequired,
    attendance: PropTypes.string,
    name: PropTypes.string.isRequired,
  }),
};

export default StudentsListItem;
