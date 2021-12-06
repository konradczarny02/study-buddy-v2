import styled from 'styled-components';

export const Label = styled.label`
  margin: 5px 0;
  font-family: 'Montserrat', sans-serif;
  font-weight: bold;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
