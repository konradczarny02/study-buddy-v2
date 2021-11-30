import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  height: 90px;

  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: lightgray;
  }
`;

export const StyledInfo = styled.div`
  margin: 0 14px 0 24px;

  h3 {
    color: ${({ theme }) => theme.colors.darkGrey};
    font-weight: bold;
    font-size: ${({ theme }) => theme.fontSize.l};
    margin: 0;
    padding: 0;
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.m};
    margin: 0;
    padding: 0;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;
