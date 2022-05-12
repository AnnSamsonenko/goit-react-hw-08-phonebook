import styled from 'styled-components';

export const AuthNavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthNavItem = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
