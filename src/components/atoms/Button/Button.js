import styled from 'styled-components';

export const Button = styled.button`
  margin: 15px 0;
  padding: ${({ isBig }) => (isBig ? '10px 38px' : '7px 20px')};
  font-size: ${({ isBig, theme }) => (isBig ? theme.fontSize.m : theme.fontSize.s)};
  background-color: ${({ theme }) => theme.colors.lightPurple};
  border: none;
  border-radius: 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.darkGrey};
`;
