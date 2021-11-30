import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, average }) => {
    if (average > 4) {
      return theme.colors.success;
    } else if (average > 3) {
      return theme.colors.warning;
    } else {
      return theme.colors.error;
    }
  }};

  p {
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.white};
  }
`;
