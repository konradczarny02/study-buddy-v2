import React from 'react';
import PropTypes from 'prop-types';

const StudentsListItem = ({
  studentsData: { attendance = '0%', average, name },
}) => {
  return (
    <li>
      <div>{attendance}</div>
      <div>
        <p>{name}</p>
        <p>{average}</p>
      </div>
      <button>X</button>
    </li>
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
