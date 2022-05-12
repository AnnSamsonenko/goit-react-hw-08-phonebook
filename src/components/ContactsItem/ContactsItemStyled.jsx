import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    margin-bottom: ${props => props.theme.spacing(3)};
  }
`;

export const ItemContent = styled.span`
  margin-right: ${props => props.theme.spacing(2)};
  display: flex;
  justify-content: space-between;
`;

export const ItemNumber = styled.span`
  color: ${props => props.theme.colors.red};
  margin-left: ${props => props.theme.spacing(2)};
`;
