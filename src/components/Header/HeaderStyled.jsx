import styled from 'styled-components';
import { font } from '../../helpers/mixins';

export const NavBar = styled.header`
  padding: 32px 0;
  background-color: ${props => props.theme.colors.greyOpacity};
  text-shadow: 1px 1px 0 ${props => props.theme.colors.white};
  ${font({ fs: 24, fw: 500, lh: 28 })};
  box-shadow: inset 2px 2px 5px ${props => props.theme.colors.colorShadow},
    inset -5px -5px 10px ${props => props.theme.colors.greyOpacity};
`;

export const NavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
