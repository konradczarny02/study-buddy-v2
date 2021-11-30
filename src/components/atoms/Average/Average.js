import React from 'react';
import { Wrapper } from './Average.styles';

const Average = ({ average }) => {
  return (
    <Wrapper average={average}>
      <p>{average}</p>
    </Wrapper>
  );
};

export default Average;
